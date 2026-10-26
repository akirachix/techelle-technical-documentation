---
title: Integrations
description: External services and machine learning integrations used by Afyra.
---

# Integrations

Afyra connects with external services and its machine learning component to support crop-residue pricing, location-based operations, image storage, quality classification and SMS communication.

## Integration Overview

| Integration | Purpose                                       |
| ----------- | --------------------------------------------- |
| Tamia Feeds | Reference quotations for crop-residue pricing |
| Google Maps | Location services, maps and routing           |
| AWS S3      | Storage of crop-residue photographs           |
| YOLO26n-cls | AI-based residue quality classification       |
| SMS Leopard | SMS communication and notifications           |

---

## 1. Tamia Feeds: Pricing Reference

Tamia Feeds provides reference quotations for Afyra's crop-residue pricing approach.

Rather than relying on a live market-price API, the planned pricing system uses reference prices and applies rule-based adjustments.

### How It Works

1. A farmer submits a crop-residue listing.
2. The backend identifies the residue type and quantity.
3. The pricing logic retrieves the applicable reference quotation.
4. The estimate is adjusted according to quality and quantity.
5. The calculated estimate is returned to the application.

### Pricing Factors

| Factor       | Purpose                                        |
| ------------ | ---------------------------------------------- |
| Residue type | Determines the relevant reference price        |
| Quality      | Applies the Good or Bad quality rule           |
| Quantity     | Adjusts the estimate based on available supply |

**Integration note:** Tamia Feeds is a reference-quotation source, not a confirmed live API integration. The exact quotation values, update process and implemented calculation rules should be documented in the Pricing Algorithm section.

[View Pricing Algorithm](/platform/pricing)

---

## 2. Google Maps: Location and Routing

Google Maps supports Afyra's location-based sourcing and collection workflows.

### Purpose

- Display farmer and collection-point locations.
- Support location selection.
- Provide map-based information.
- Assist drivers with navigation.
- Support logistics coordination.

### Integration Flow

1. The application requests relevant location information.
2. The backend provides authorized collection or supply coordinates.
3. The map interface displays the location.
4. Drivers use navigation functionality to reach the collection point.

### Important Considerations

- API keys must be configured securely.
- Precise locations should only be exposed to authorized users.
- Location errors and unavailable map services must be handled appropriately.

Google Maps provides mapping functionality; Afyra's matching and pooling rules are documented separately.

[View Matching Algorithm](/platform/matching)

---

## 3. AWS S3: Image Storage

Amazon Simple Storage Service (S3) is used as the cloud-storage integration for crop-residue photographs.

### Purpose

S3 provides object storage for images submitted through the listing workflow.

### Image Storage Flow

1. A farmer selects and submits residue photographs.
2. The backend validates the uploaded files.
3. Images are processed according to the application's requirements.
4. Image objects are stored in the configured storage service.
5. The backend associates stored-image references with the relevant listing.

### Storage Considerations

- Validate file types and sizes.
- Restrict unauthorized access to stored objects.
- Avoid exposing AWS credentials in frontend applications.
- Use secure access mechanisms for private images.
- Manage object retention and deletion appropriately.

**Implementation note:** The backend design also supports local image storage. S3 configuration and deployment status should be verified against the active environment.

---

## 4. Machine Learning: Quality Classification

Afyra integrates a **YOLO26n-cls** computer vision model to assess crop-residue photographs.

Unlike the other integrations, this is an application ML component rather than a third-party service.

### Purpose

The model analyzes submitted images and predicts their visual quality category.

### Model Information

| Property   | Value                             |
| ---------- | --------------------------------- |
| Model      | YOLO26n-cls                       |
| Task       | Image classification              |
| Input      | Crop-residue photographs          |
| Output     | Quality prediction and confidence |
| Execution  | Backend inference                 |
| Model file | `ml/weights/residue_cls.pt`       |

### Integration Flow

1. A farmer submits the required photographs.
2. The FastAPI backend validates the images.
3. The images are prepared for classification.
4. The ML model generates predictions.
5. Backend rules interpret the predictions.
6. The listing workflow continues according to the quality decision.

### Quality Categories

Afyra's business-facing quality categories are:

- **Good**
- **Bad**

The model integration uses `GOOD` and `POOR` internally, with `POOR` representing the lower-quality outcome.

The documented implementation also uses a default confidence threshold of `0.60`.

For model training, evaluation results and limitations, see:

[View AI Documentation](/ai/)

---

## 5. SMS Leopard: Messaging and Notifications

SMS Leopard is the messaging integration specified for Afyra's SMS communication.

### Purpose

SMS notifications support communication with users during account access and platform operations.

### Relevant Workflows

- Authentication or verification messages.
- Supply-related notifications.
- Purchase and pickup updates.
- Driver and collection coordination.

The exact message types depend on the implemented notification workflows.

### Integration Flow

1. An application event requires an SMS.
2. The backend prepares the message.
3. The SMS Leopard integration submits the message for delivery.
4. The messaging provider processes the request.
5. The backend handles the provider response.

### Integration Considerations

- Protect messaging API credentials.
- Validate recipient phone numbers.
- Handle provider errors.
- Avoid duplicate messages where possible.
- Avoid including unnecessary sensitive information in SMS content.

The configured sender identity, message templates and delivery-status handling should be confirmed from the backend implementation.

---

## Integration Security

All integrations must follow Afyra's security requirements.

| Area           | Requirement                                          |
| -------------- | ---------------------------------------------------- |
| Credentials    | Keep API keys and secrets outside public source code |
| Authorization  | Restrict access to protected operations              |
| Data privacy   | Limit exposure of personal and location information  |
| Error handling | Handle external-service failures safely              |
| Logging        | Avoid logging credentials and sensitive payloads     |
| Configuration  | Maintain environment-specific settings               |

[View Security Documentation](/security/)

---

## Related Documentation

- [Backend](/backend/)
- [AI](/ai/)
- [Pricing Algorithm](/platform/pricing)
- [Matching Algorithm](/platform/matching)
- [Pooling Algorithm](/platform/pooling)
- [Security](/security/)

## References & Live Docs

- Tamia Feeds - approved reference quotations.
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Amazon S3 Documentation](https://docs.aws.amazon.com/s3/)
- [SMS Leopard](https://smsleopard.com/)
- Afyra AI Model and Source Selection Report.
- [Afyra Swagger API Documentation](https://afyra-def6d466c54b.herokuapp.com/docs)
