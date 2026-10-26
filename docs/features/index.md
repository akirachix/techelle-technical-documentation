# Features

Afyra is a crop-residue sourcing and collection platform connecting farmers, host farmers, animal feed manufacturers, drivers and administrators.

This section documents the platform's twelve specified features, from account management and residue listing to quality verification, supply matching and delivery coordination.

> **Documentation scope:** The features below describe the intended platform capabilities from Afyra's feature specification. Their inclusion does not mean every feature has been fully implemented or deployed.

## Feature Overview

| ID | Feature | Primary Users |
|---|---|---|
| F-01 | Accounts and API Platform | All platform users |
| F-02 | Farmer Supply Listing | Farmers |
| F-03 | Quality Verification and Pricing | Farmers, Manufacturers |
| F-04 | Market Prices | Farmers, Manufacturers |
| F-05 | Matching and Pooling | Manufacturers, Farmers |
| F-06 | View Batch Details | Manufacturers |
| F-07 | Confirm Purchase and Pickup Date | Manufacturers |
| F-08 | Notification Service | Farmers, Drivers, Manufacturers |
| F-09 | Register Driver | Manufacturers |
| F-10 | Dispatch and Routing | Drivers, Manufacturers |
| F-11 | End-to-End Farmer, Host Farmer and Driver Journey | Farmers, Host Farmers, Drivers |
| F-12 | End-to-End Manufacturer and Administrator Journey | Manufacturers, Administrators |

---

## F01: Accounts and API Platform

**Purpose:** Provide role-based access to Afyra's mobile and web applications.

The platform supports farmers, host farmers, manufacturers, drivers and administrators.

**Key capabilities:**
- User registration and authentication.
- Role-specific access to platform functionality.
- Profile management.
- Backend API services supporting the applications.
- Access control for protected operations.

**Related documentation:** [Backend](/backend/) · [Security](/security/)

## F02: Farmer Supply Listing

**Purpose:** Allow farmers to register crop residues available for sale.

**Key capabilities:**
- Create a residue listing.
- Specify crop-residue type and available quantity.
- Capture the supply location.
- Submit three supporting photographs.
- Support offline submission through a queued workflow, as specified.

The three photographs represent different views of the residue and are used for quality screening.

**Related documentation:** [Frontend Mobile](/frontend-mobile/) · [AI](/ai/)

## F03: Quality Verification and Pricing

**Purpose:** Evaluate submitted crop residues and provide pricing information.

**Key capabilities:**
- Process the submitted residue photographs.
- Classify residue quality using AI-assisted image analysis.
- Determine whether a listing meets the quality requirements.
- Support a pricing estimate based on applicable pricing rules.

Afyra's quality model distinguishes **good** and **bad** residues. The backend may use `POOR` as its internal representation of bad quality.

Pricing rules are documented separately under [Pricing Algorithm](/platform/pricing).

## F04: Market Prices

**Purpose:** Help users understand the reference value of crop residues.

**Key capabilities:**
- Display crop-residue pricing information.
- Support pricing decisions when farmers create listings.
- Provide manufacturers with relevant supply-price information.

The feature specification references HDX HAPI. The proposed transition to Tamia Feeds reference quotations must be distinguished from any pricing integration currently implemented in the backend.

**Related documentation:** [Pricing Algorithm](/platform/pricing) · [Integrations](/integrations/)

## F05: Matching and Pooling

**Purpose:** Connect available crop-residue supply with manufacturer demand.

**Key capabilities:**
- Evaluate eligible farmer listings.
- Match supply against manufacturer quantity requirements.
- Combine suitable smaller listings into larger supply pools.
- Support collection through host farmers where applicable.

Matching and pooling are separate platform processes and are documented in their respective algorithm pages.

**Related documentation:** [Matching Algorithm](/platform/matching) · [Pooling Algorithm](/platform/pooling)

## F06: View Batch Details

**Purpose:** Allow manufacturers to examine available residue batches before making a sourcing decision.

**Key capabilities:**
- View batch information.
- Review crop-residue type and quantity.
- Review available quality and pricing information.
- Examine the supply associated with a batch or pool.

**Related documentation:** [Frontend Web](/frontend-web/) · [Backend](/backend/)

## F07: Confirm Purchase and Pickup Date

**Purpose:** Support manufacturer confirmation of a sourcing decision and collection schedule.

**Key capabilities:**
- Confirm a selected purchase or supply batch.
- Specify a pickup date.
- Associate the confirmed supply with collection arrangements.
- Make the relevant pickup information available to participating users.

**Related documentation:** [Frontend Web](/frontend-web/) · [Backend](/backend/)

## F08: Notification Service

**Purpose:** Communicate important supply and collection updates to platform participants.

**Key capabilities:**
- Send relevant transaction notifications.
- Inform farmers about supply and pickup updates.
- Communicate collection details to drivers and other participants.
- Support SMS notifications as specified.

**Related documentation:** [Integrations](/integrations/)

## F09: Register Driver

**Purpose:** Allow manufacturers to register drivers involved in transporting purchased crop residues.

**Key capabilities:**
- Register driver information.
- Associate drivers with the relevant manufacturer.
- Maintain driver details for dispatch and collection workflows.

**Related documentation:** [Frontend Web](/frontend-web/) · [Backend](/backend/)

## F10: Dispatch and Routing

**Purpose:** Coordinate the movement of drivers to crop-residue collection points.

**Key capabilities:**
- Assign drivers to collection activities.
- Provide pickup-location information.
- Support routing and navigation.
- Track the progress of assigned collection activities as specified.

**Related documentation:** [Integrations](/integrations/) · [Frontend Mobile](/frontend-mobile/)

## F11: End-to-End Farmer, Host Farmer and Driver Journey

**Purpose:** Validate the connected workflow across the farmer, host farmer and driver roles.

**Workflow:**

1. A farmer creates an account and submits a crop-residue listing.
2. The listing enters quality screening.
3. Eligible supply becomes available for matching or pooling.
4. A manufacturer selects supply and confirms collection arrangements.
5. Participating farmers and the host farmer receive relevant pickup information.
6. The assigned driver proceeds to the collection location.
7. The pickup process is completed and its status recorded.

This is an end-to-end workflow specification, not evidence that every step has passed integration testing.

**Related documentation:** [QA](/qa/) · [Frontend Mobile](/frontend-mobile/)

## F12: End-to-End Manufacturer and Administrator Journey

**Purpose:** Validate the manufacturer-facing sourcing workflow and the administrator's platform responsibilities.

**Manufacturer workflow:**
- Access the manufacturer application.
- Review available supply.
- Examine eligible batches and pools.
- Confirm a sourcing decision.
- Coordinate driver assignment and collection.

**Administrator scope:**
- Access administrative functionality according to assigned permissions.
- Support platform operations and user management where authorized.

Exact administrator capabilities should be documented from the verified application and API implementation rather than assumed.

**Related documentation:** [Frontend Web](/frontend-web/) · [Security](/security/) · [QA](/qa/)

---

