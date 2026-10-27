---
title: Pricing Algorithm
description: Rule-based crop-residue price estimation using Tamia Feeds reference quotations.
---

# Pricing Algorithm

Afyra provides an **estimated price range** for a crop-residue listing using a stored reference price, the residue's quality grade, and its quantity in kilograms. The estimate helps farmers and manufacturers compare potential sourcing costs before an order is agreed. It is **not a guaranteed purchase price**.

The calculation is implemented in `afyra/services/pricing.py`, with configuration in `afyra/core/rules.py` and price selection in `afyra/services/catalog.py`.

## 1. Reference price

Each calculation begins with a **base rate in Kenyan shillings per kilogram (KES/kg)** for a residue type and county.

The backend retrieves the latest stored price whose effective date is not in the future. Its current selection logic is:

1. Look for a stored price for the requested residue type and county.
2. If none exists, look for the same residue type in **Meru**, the configured supplier reference county.
3. If neither exists, the estimate endpoint returns `PRICE_NOT_AVAILABLE` instead of inventing a price.

For counties other than Meru, a county-specific stored price is labeled as an **admin price**. When the calculation falls back to Meru, it uses the configured **Tamia Feeds reference price (Meru)** label.

### Tamia Feeds reference collection

The supplier integration reads the configured [Tamia Feeds reference page](https://tamiafeeds.co.ke/madam-karimi-from-tigania-meru-county/) and looks specifically for **maize stalk** quotations. For each recognized quotation, it:

- Identifies one price amount in KES and one weight in kilograms or tonnes.
- Converts tonnes to kilograms where necessary.
- Divides the quoted amount by the weight to obtain KES/kg.
- Averages recognized maize-stalk rates if more than one quotation is found, rounding to two decimal places.
- Saves the result for **Meru** using the quotation's publication date, provided the matching residue type exists and that county/type/date record has not already been saved.

The collection skips quotations without a publication date. Collection can be disabled by configuration and runs only when triggered by the admin collection endpoint or the collection script. The script checks whether a refresh is due according to the configured interval.

**Current scope:** The supplier parser handles maize stalk quotations; it does not automatically extract reference prices for every crop-residue category.

## 2. Quality adjustment

The pricing engine has two quality levels:

| User-facing quality | Backend grade |      Price adjustment |
| ------------------- | ------------- | --------------------: |
| Good                | `GOOD`        |   0 percentage points |
| Bad                 | `POOR`        | −30 percentage points |

A good-quality listing keeps the base rate before the quantity adjustment. A bad-quality listing receives a 30-percentage-point reduction before the quantity adjustment is combined.


> **AI classification and pricing are separate processes.**
>
> Afyra's image-classification model supports preliminary crop-residue quality screening. The model does not calculate prices.
>
> The pricing service receives a quality grade (`GOOD` or `POOR`), a residue type, a county, and a quantity in kilograms.
>
> The pricing algorithm then uses the stored reference rate and the configured quality and quantity adjustments to calculate an estimated price range.
>
> The pricing calculation does not inspect uploaded images or independently verify whether the supplied grade is correct.
>
> The estimated price is not a guaranteed purchase price.


## 3. Quantity adjustment

The backend applies the following tiers based on the quantity being estimated:

| Quantity                     |            Adjustment |
| ---------------------------- | --------------------: |
| 5,000 kg or more             | +10 percentage points |
| 2,000–4,999.99 kg            |  +5 percentage points |
| 500–1,999.99 kg              |   0 percentage points |
| More than 0 and below 500 kg |  −5 percentage points |

These are the values defined in `QUANTITY_TIERS`. The quantity supplied to `/prices/estimate` must be greater than zero.

## 4. Calculation formula

The backend **adds** the quality and quantity adjustments. It does not apply them one after the other as separate percentage multipliers.

```text
Total adjustment (%) = Quality points + Quantity points
Capped adjustment (%) = min(15, max(-40, Total adjustment))
Adjusted rate (KES/kg) = Base rate × (1 + Capped adjustment / 100)
```

The configured adjustment limits are **−40%** and **+15%**. The adjusted rate is used to produce a range of **10% below and 10% above** the adjusted value:

```text
Minimum estimate per kg = round(Adjusted rate × 0.90, 2)
Maximum estimate per kg = round(Adjusted rate × 1.10, 2)
Minimum total (KES) = round(Minimum estimate per kg × Weight in kg, 2)
Maximum total (KES) = round(Maximum estimate per kg × Weight in kg, 2)
```

Rounding uses decimal arithmetic with `ROUND_HALF_UP` to two decimal places. The endpoint returns the estimated range, not a single binding quotation.

## 5. Worked examples

The examples below use a **hypothetical base rate of KES 5.00/kg** to demonstrate the implemented formula. This is an illustration, not a live Tamia Feeds quotation.

### Example A: Good quality, 2,500 kg

| Step                | Calculation            |        Result |
| ------------------- | ---------------------- | ------------: |
| Base rate           | Example reference rate |   KES 5.00/kg |
| Quality adjustment  | `GOOD`                 |            0% |
| Quantity adjustment | 2,500 kg               |           +5% |
| Combined adjustment | 0% + 5%                |           +5% |
| Adjusted rate       | 5.00 × 1.05            |   KES 5.25/kg |
| Minimum rate        | 5.25 × 0.90            |   KES 4.73/kg |
| Maximum rate        | 5.25 × 1.10            |   KES 5.78/kg |
| Minimum total       | 4.73 × 2,500           | KES 11,825.00 |
| Maximum total       | 5.78 × 2,500           | KES 14,450.00 |

**Estimated price range: KES 11,825.00–14,450.00.**

### Example B: Bad quality, 2,500 kg

| Step                | Calculation            |        Result |
| ------------------- | ---------------------- | ------------: |
| Base rate           | Example reference rate |   KES 5.00/kg |
| Quality adjustment  | `POOR`                 |          −30% |
| Quantity adjustment | 2,500 kg               |           +5% |
| Combined adjustment | −30% + 5%              |          −25% |
| Adjusted rate       | 5.00 × 0.75            |   KES 3.75/kg |
| Minimum rate        | 3.75 × 0.90            |   KES 3.38/kg |
| Maximum rate        | 3.75 × 1.10            |   KES 4.13/kg |
| Minimum total       | 3.38 × 2,500           |  KES 8,450.00 |
| Maximum total       | 4.13 × 2,500           | KES 10,325.00 |

**Estimated price range: KES 8,450.00–10,325.00.**

The two examples show how quality changes the estimate while the residue type, reference rate, and quantity remain the same.

## 6. Price age and availability

`GET /prices/quote` reports whether a reference price is **stale**. A price is marked stale when its effective date is **more than 90 days old**.

The estimate endpoint uses the latest available stored price and does **not** reject it solely because it is older than 90 days. If there is no applicable reference price, it returns `PRICE_NOT_AVAILABLE`.

## 7. Related API endpoints

| Endpoint                            | Access             | Purpose                                                                      |
| ----------------------------------- | ------------------ | ---------------------------------------------------------------------------- |
| `GET /prices/quote`                 | Authenticated user | Return the base reference rate, effective date, source label, and stale flag |
| `GET /prices/estimate`              | Authenticated user | Return the quality- and quantity-adjusted price range                        |
| `GET /admin/market-prices`          | Admin              | List stored reference prices                                                 |
| `POST /admin/market-prices`         | Admin              | Add a reference price                                                        |
| `POST /admin/market-prices/collect` | Admin              | Trigger configured Tamia Feeds collection                                    |

The estimate endpoint accepts `residue_type_id`, `county`, `weight_kg`, and an optional `grade` (default `GOOD`). The response includes the residue category, user-facing quality, quantity, combined adjustment points, minimum and maximum rates, minimum and maximum totals, source label, and `is_estimate: true`.

For the complete request and response schemas, see the [API Documentation](/backend/api-documentation).

## 8. Why Afyra uses an estimate

The algorithm offers an early pricing guide rather than a final commercial agreement. It helps manufacturers compare residue listings and plan sourcing budgets, while making the effects of quality and quantity visible. Actual ordering decisions and final prices remain subject to the parties' agreement and any checks needed beyond an image-based pre-screening result.

