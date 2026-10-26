# System Architecture Diagram (SAD)

The System Architecture Diagram illustrates how Afyra's applications, backend services, database, AI model and external integrations work together to support crop-residue sourcing and collection.

It provides a high-level view of the system and shows how information moves between its major components.

## System Architecture Diagram

![Afyra System Architecture Diagram](/images/afyra-sad.png) 

## Architecture Overview

Afyra connects farmers supplying agricultural residues with animal feed manufacturers seeking raw materials. Its architecture supports the flow of information from residue registration and quality verification to manufacturer sourcing and collection coordination.

The system consists of client applications, a central backend API, data storage, AI-assisted processing and supporting integrations.

## Main Architecture Components

| Component                  | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| Flutter Mobile Application | Supports mobile workflows for farmers and drivers                            |
| Web Application            | Provides manufacturer-facing and administrative interfaces                   |
| FastAPI Backend            | Processes requests, applies business rules and coordinates system operations |
| PostgreSQL Database        | Stores persistent platform records and relationships                         |
| YOLO26n-cls Model          | Supports crop-residue image classification                                   |
| Image Storage              | Stores photographs submitted with residue listings                           |
| External Services          | Support functions such as notifications, maps and reference pricing          |

## How the Components Interact

### Client Applications and Backend

The mobile and web applications communicate with the FastAPI backend through API requests.

Users submit information through their respective interfaces, and the backend handles validation, processing and retrieval of platform data.

### Backend and Database

The backend interacts with PostgreSQL to store and retrieve information about users, crop-residue listings, quality results, sourcing activities and collection workflows.

### Backend and AI Model

When a farmer submits a listing with residue photographs, the backend can initiate image classification using the YOLO26n-cls model.

The resulting quality assessment contributes to determining whether the listing is eligible for subsequent sourcing workflows.

### Backend and External Integrations

Supporting services provide functionality beyond the core application, including mapping, messaging and pricing-related data.

The exact provider and deployment status of each integration are documented in the Integrations section.

## Example System Data Flow

1. A farmer submits a crop-residue listing through the mobile application.
2. The backend receives the listing information and photographs.
3. The quality-screening process evaluates the submitted images.
4. Listing information and grading results are stored.
5. Eligible supply becomes available for matching and pooling.
6. A manufacturer reviews suitable supply through the web application.
7. Collection arrangements are coordinated with participating farmers and drivers.

This describes the intended end-to-end interaction. It does not imply every workflow is deployed.

## Related Documentation

- [Secure System Architecture Diagram](/architecture/ssad)
- [ERD & Data Models](/architecture/data-models)
- [Backend](/backend/)
- [Integrations](/integrations/)
