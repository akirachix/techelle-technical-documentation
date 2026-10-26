# Frontend Mobile

Afyra's mobile application is built with **Flutter** and provides role-specific interfaces for farmers and drivers involved in crop-residue sourcing and collection.

The mobile application connects users to Afyra's backend services, allowing them to manage supply information, access collection details and participate in the platform's workflows.

## Mobile Application Overview

The application is designed around two primary mobile experiences.

| User Role | Primary Responsibilities                                                                           |
| --------- | -------------------------------------------------------------------------------------------------- |
| Farmer    | Manage crop-residue listings, review supply information and follow collection updates              |
| Driver    | Access assigned collection activities, navigate to pickup locations and record collection progress |

Host farmers participate in the farmer workflow and have additional responsibilities when their location is selected as a collection point.

## Technology

| Technology | Purpose                                                   |
| ---------- | --------------------------------------------------------- |
| Flutter    | Cross-platform mobile application development             |
| Dart       | Application programming language                          |
| REST APIs  | Communication with Afyra backend services                 |
| FastAPI    | Backend service providing application data and operations |

The mobile application relies on backend authorization and validation for protected operations.

---

## Farmer Application

The farmer experience focuses on making crop residues available for sourcing and keeping farmers informed about their supply.

### Account Registration and Access

The account flow allows farmers to access the platform using the supported authentication process.

Account-related screens provide the entry point to the farmer's role-specific features.

### Farmer Dashboard

The dashboard provides an entry point to the farmer's supply-related activities.

It should help farmers access their listings, begin a new listing and navigate to relevant updates.

### Crop-Residue Listing

The residue-listing workflow captures the information needed to describe available agricultural material.

The feature specification includes:

- Crop-residue type.
- Available quantity.
- Supply location.
- Three supporting photographs.
- Listing submission.

The photographs support the backend quality-verification process.

### Listing Status and History

Farmers need to understand the progress of their submitted supply.

Listing-related views should distinguish the relevant stages of submission, quality assessment and sourcing.

Exact status labels should match the implemented backend and mobile application.

### Host Farmer Experience

A host farmer provides a collection point for eligible pooled supply.

The host-farmer workflow includes access to relevant collection information and participation in pickup verification, as defined in Afyra's data-model design.

### Offline Listing Support

The feature specification includes offline queuing for farmer supply listings.

This is important in areas where network connectivity is unreliable.

The intended behavior is to retain pending listing information and submit it when connectivity becomes available.

Offline functionality should be verified against the current Flutter implementation before being described as complete.

---

## Driver Application

The driver experience focuses on collection assignments and delivery coordination.

### Driver Access

Drivers access role-specific application functionality associated with their assigned responsibilities.

### Assigned Collections

The driver workflow provides access to relevant collection information, including pickup locations and assignment details.

### Navigation and Routing

The platform design includes navigation support for reaching collection locations.

Routing behavior depends on the configured mapping integration and the availability of location information.

### Pickup Verification

The data-model design describes a verification-code or QR-based handoff at the collection point.

This process is intended to verify that the arriving driver is authorized to collect the assigned supply.

### Delivery Progress

The driver workflow includes recording collection and delivery progress so that other participants can receive relevant updates.

---

## Mobile User Journeys

### Farmer Journey

1. Access the farmer application.
2. Create a crop-residue listing.
3. Provide supply details and photographs.
4. Submit the listing.
5. Review the listing's status.
6. Receive relevant sourcing or collection updates.
7. Participate in pickup arrangements when applicable.

### Driver Journey

1. Access the driver application.
2. Review assigned collection activities.
3. View pickup information.
4. Navigate to the collection location.
5. Complete the required pickup-verification process.
6. Record collection and delivery progress.

These describe the documented workflows, not independently verified end-to-end test results.

---

## Mobile Screen Designs

This section presents the approved mobile screens and their intended role in the user experience.

### Farmer Screens

Include the approved farmer designs for:

- Authentication and onboarding.
- Farmer dashboard.
- Residue listing and photo submission.
- Listing details and status.
- Collection-related information.
- Profile and account management.

### Driver Screens

Include the approved driver designs for:

- Driver access.
- Assigned collections.
- Pickup details.
- Navigation.
- Pickup verification.
- Delivery progress.

For each screen, document its purpose, user actions and relevant backend interaction.

The exact image paths should use the existing assets in `docs/public/`. Do not create links to filenames that are not present.

---

## Backend Integration

The mobile application communicates with Afyra's backend API.

Relevant API operations include authentication, residue listing management, image submission and collection-related workflows.

Backend responses determine the information available to the user, while backend validation and authorization protect the associated operations.

For the actual endpoint definitions, consult the API documentation.

## Mobile Quality Considerations

The mobile experience should be evaluated for:

- Clear navigation between role-specific screens.
- Form validation and useful error messages.
- Image submission and upload failures.
- Network interruptions and retry behavior.
- Accessibility and readability.
- Performance on lower-specification Android devices.
- Correct display of backend statuses.

These are evaluation areas, not claims that all tests have passed.

## Related Documentation

- [Features](/features/)
- [Backend](/backend/)
- [AI](/ai/)
- [Integrations](/integrations/)
- [QA](/qa/)

## References & Live Docs

- Afyra Farmer and Driver UI Designs 
- Afyra Feature Specification 
- [Afyra API Documentation](https://afyra-def6d466c54b.herokuapp.com/docs)
