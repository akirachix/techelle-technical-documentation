# Frontend Web

The Afyra web application provides role-specific interfaces for feed manufacturers and platform administrators. It connects to the Afyra backend to support crop-residue sourcing, procurement, logistics coordination and platform management.

This section documents the web application's responsibilities, user workflows, interface structure and backend integration.

## Application Overview

Afyra's web platform supports two primary user groups:

| User          | Main Responsibilities                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| Manufacturer  | Discover available crop residues, review supply, manage sourcing requirements and coordinate collection |
| Administrator | Access authorized platform-management and oversight functions                                           |

The web application presents information retrieved from the backend and submits user actions through API requests.

## Technology Overview

The supplied web application uses **Next.js and React**.

| Technology | Purpose                                   |
| ---------- | ----------------------------------------- |
| Next.js    | Web application framework and routing     |
| React      | Component-based user interfaces           |
| TypeScript | Typed application development             |
| REST APIs  | Communication with Afyra backend services |
| FastAPI    | Backend business logic and data access    |

## Manufacturer Experience

### Manufacturer Dashboard

The dashboard provides an entry point for sourcing and procurement activities.

It is intended to help manufacturers access relevant supply information and navigate to their operational workflows.

### Supply Discovery

Manufacturers can examine crop-residue supply based on their sourcing requirements.

Relevant information includes residue type, available quantity, quality assessment and pricing information.

### Batch Details

Batch details provide information about the supply associated with a listing or grouped batch.

This allows manufacturers to review available information before confirming a sourcing decision.

### Matching and Pooling

The platform's matching and pooling functions support manufacturers seeking quantities that may require combining supply from multiple farmers.

The web interface presents the results of these backend processes.

For detailed algorithm rules, see:

- [Matching Algorithm](/platform/matching)
- [Pooling Algorithm](/platform/pooling)

### Purchase and Pickup Confirmation

The procurement workflow includes confirming selected supply and specifying collection arrangements.

The associated backend operations manage the relevant procurement records and workflow state.

### Driver Management

The feature specification includes manufacturer registration of drivers involved in collection activities.

Driver information supports subsequent dispatch and logistics coordination.

### Dispatch and Collection

Collection-related interfaces support the coordination of pickup activities, including relevant driver and collection information.

The exact actions and statuses should follow the implemented backend.

---

## Administrator Experience

Administrative functionality is separate from manufacturer sourcing.

It is intended to support authorized platform operations and oversight.

The scope of administrator permissions must follow the backend's implemented access-control rules.

Administrative interfaces should not be documented as fully operational solely because they appear in product designs.

---

## Web Application Data Flow

A typical interaction follows this sequence:

1. A user opens a page in the web application.
2. The application requests the relevant data from the backend.
3. The backend validates access and processes the request.
4. The application displays the returned information.
5. User actions are submitted through the appropriate API operations.
6. The interface updates according to the backend response.

## Web UI Designs

The web application's visual designs are documented separately.

**[View Web UI Designs](/frontend-web/ui-designs)**

This includes manufacturer and administrator screens, their intended purposes and their relationships to the platform workflows.

## Backend Integration

The web application depends on the backend for protected operations, including authentication, sourcing data, procurement actions and other role-specific functionality.

The actual request paths, parameters and response structures should be verified against the implemented API.

## Quality Considerations

Important web-testing areas include:

- Role-based navigation and access.
- Form validation and error handling.
- Loading and empty states.
- Correct rendering of API data.
- Responsive layouts.
- Accessibility.
- Authentication and session behavior.
- Procurement workflow consistency.

## Related Documentation

- [Features](/features/)
- [System Architecture Diagram](/architecture/sad)
- [Backend](/backend/)
- [Security](/security/)
- [QA](/qa/)

## References & Live Docs

- Afyra Web UI Designs 
- [Afyra API Documentation](https://afyra-def6d466c54b.herokuapp.com/docs)
