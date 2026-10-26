---
title: Backend
description: Afyra backend services, API architecture, database integration and business logic.
---

# Backend

The Afyra backend manages the platform's core business operations, connecting farmers, feed manufacturers, drivers and administrators through a centralized API.

Built with **Python and FastAPI**, the backend processes application requests, manages persistent data, supports crop-residue quality verification and coordinates sourcing and collection workflows.

## Backend Overview

The backend serves both the Flutter mobile application and the Next.js web application.

Its responsibilities include:

- User authentication and role-based access.
- Farmer and manufacturer account management.
- Crop-residue listing operations.
- Image submission and quality assessment.
- Price estimation.
- Supply matching and pooling.
- Procurement and pickup coordination.
- Driver assignments and delivery workflows.
- Integration with external services.

## Technology Stack

| Technology        | Purpose                                                         |
| ----------------- | --------------------------------------------------------------- |
| Python            | Backend programming language                                    |
| FastAPI           | REST API framework                                              |
| PostgreSQL        | Relational database                                             |
| PostGIS           | Geospatial database functionality specified in the architecture |
| YOLO26n-cls       | Crop-residue image classification                               |
| OpenAPI / Swagger | Interactive API documentation                                   |

## Backend Responsibilities

### 1. Authentication and Authorization

The backend provides the authentication and access-control layer for the platform.

Afyra supports role-specific workflows for farmers, manufacturers, drivers and administrators.

Protected operations must verify that the authenticated user has permission to perform the requested action.

### 2. Crop-Residue Listings

The listing workflow receives crop-residue information submitted by farmers.

Relevant information includes:

- Crop-residue type.
- Available quantity.
- Location.
- Supporting photographs.
- Listing ownership and status.

The backend is responsible for validating submitted data and maintaining the associated listing records.

### 3. Quality Verification

The backend integrates with Afyra's crop-residue image-classification model.

The documented workflow uses three photographs to assess the submitted residue.

The model produces classification results that are used by backend logic when evaluating listing eligibility.

For model details, see the [AI documentation](/ai/).

### 4. Pricing

The pricing component estimates crop-residue value using reference prices and business rules.

Afyra's planned pricing approach uses **Tamia Feeds reference quotations**, with adjustments based on quantity and quality.

The quality categories used for pricing are:

- Good
- Bad

The transition from the earlier HDX HAPI-based approach should be documented against the current backend implementation.

See [Pricing Algorithm](/platform/pricing).

### 5. Matching and Pooling

The matching process evaluates available supply against manufacturer sourcing requirements.

Where one listing cannot satisfy a requested quantity, the pooling process is designed to combine eligible supply from multiple farmers.

The documented design includes proximity-based grouping around eligible host farmers.

See [Matching Algorithm](/platform/matching) and [Pooling Algorithm](/platform/pooling).

### 6. Procurement and Collection

The backend supports the platform's intended procurement and collection workflow.

This includes coordinating:

- Selected supply or batches.
- Manufacturer confirmation.
- Pickup arrangements.
- Driver assignments.
- Collection-point information.
- Pickup verification.
- Delivery status updates.

The exact supported operations and status transitions must be checked against the current API implementation.

### 7. Notifications and Integrations

The platform design includes notifications and external integrations for operational updates.

These may support pickup coordination, assignment updates and other workflow events.

See [Integrations](/integrations/).

---

## API Architecture

Afyra exposes backend functionality through REST API endpoints.

The frontend applications submit requests, receive structured responses and display the relevant information to users.

### API Request Flow

1. The mobile or web application sends a request.
2. FastAPI receives the request.
3. Authentication and authorization checks are applied where required.
4. Input data is validated.
5. The relevant backend operation is processed.
6. Data is retrieved or updated as necessary.
7. A response is returned to the application.

### Interactive API Documentation

The backend provides Swagger documentation for exploring the API specification.

**[Open Afyra Swagger API Documentation](https://afyra-def6d466c54b.herokuapp.com/docs)**

Use Swagger to inspect the actual endpoint paths, HTTP methods, request schemas, response models and authentication requirements.

---

## Database Integration

The backend uses PostgreSQL for structured platform data.

The documented data model covers user profiles, crop-residue listings, image assessments, sourcing requests, pooling and logistics records.

Relationships between these entities support tracking supply from initial listing through procurement and collection.

For entity relationships, keys and constraints, see [ERD & Data Models](/architecture/data-models).

---

## Backend Security

Security requirements include:

- Authentication for protected endpoints.
- Role-based authorization.
- Request validation.
- Secure handling of credentials and tokens.
- Restrictions on access to personal and location information.
- Validation of uploaded images.
- Secure management of external-service credentials.
- Appropriate error handling and audit information.

These are documented security requirements; their implementation and verification status should be confirmed through code review and testing.

See [Secure System Architecture Diagram](/architecture/ssad) and [Security](/security/).

---

## Backend Testing

Backend testing should cover the system's core operations and failure conditions.

| Area           | Testing Focus                                 |
| -------------- | --------------------------------------------- |
| Authentication | Valid and invalid access attempts             |
| Authorization  | Role permissions and protected operations     |
| Listings       | Data validation, creation and retrieval       |
| Images         | Upload validation and classification failures |
| Pricing        | Quality and quantity adjustments              |
| Matching       | Eligible and ineligible supply                |
| Pooling        | Quantity and location constraints             |
| Procurement    | Valid workflow transitions                    |
| Dispatch       | Driver assignments and pickup verification    |
| Integrations   | External-service failures and error handling  |

Test coverage and passing results should be reported from the actual backend test suite.

---

## Related Documentation

- [System Architecture Diagram](/architecture/sad)
- [Secure System Architecture Diagram](/architecture/ssad)
- [ERD & Data Models](/architecture/data-models)
- [Frontend Mobile](/frontend-mobile/)
- [Frontend Web](/frontend-web/)
- [AI](/ai/)
- [Security](/security/)
- [QA](/qa/)

## References & Live Docs

- [Afyra Swagger API Documentation](https://afyra-def6d466c54b.herokuapp.com/docs)
