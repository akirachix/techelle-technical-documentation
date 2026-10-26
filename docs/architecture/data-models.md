# Entity Relationship Diagram & Data Models

The Entity Relationship Diagram (ERD) illustrates how Afyra organizes and connects its database records.

It helps developers understand how users, crop-residue listings, quality assessments, manufacturer sourcing and collection activities relate to one another.

## Entity Relationship Diagram

![Afyra Entity Relationship Diagram](/images/afyra-erd.png)

## Understanding the Data Model

Afyra uses a relational data model to connect the different stages of crop-residue sourcing.

For example, a farmer can create a residue listing, that listing can have photographs and quality results, and eligible supply can later participate in manufacturer sourcing and collection workflows.

The database must preserve these connections as records are created and updated.

## Main Data Domains

| Data Domain           | Information Represented                                     |
| --------------------- | ----------------------------------------------------------- |
| Users and Profiles    | Accounts, roles and user-specific details                   |
| Farmer Supply         | Crop-residue listings, quantities and locations             |
| Residue Images        | Photographs associated with submitted listings              |
| Quality Verification  | AI classification results and listing eligibility           |
| Manufacturer Sourcing | Procurement requirements and sourcing decisions             |
| Matching and Pooling  | Relationships between available listings and grouped supply |
| Driver and Dispatch   | Driver records and collection assignments                   |
| Delivery              | Pickup and delivery progress                                |

These are logical groups of information. The physical schema defines the actual tables and columns.

## Entity Relationships

### Users and Listings

A farmer's account is associated with the residue listings they create.

This relationship allows the system to identify listing ownership and enforce access restrictions.

### Listings and Photographs

A listing is associated with the photographs submitted during registration.

Afyra's quality-screening workflow requires three photographs, allowing the model to evaluate different views of the residue.

### Listings and Quality Assessments

Quality-assessment information is linked to the relevant submitted images and listing.

The backend grading implementation distinguishes GOOD and POOR classifications, with the results contributing to listing eligibility.

### Manufacturer Sourcing and Supply

Manufacturer sourcing requirements must be associated with the supply selected to fulfill them.

Matching and pooling introduce relationships between sourcing requirements and one or more eligible residue listings.

### Collection and Drivers

Collection information connects confirmed sourcing activities with pickup arrangements and assigned drivers.

These relationships support the coordination of collection and delivery activities.

## Database Design Concepts

### Primary Keys

A primary key uniquely identifies each record in a table.

### Foreign Keys

Foreign keys connect related records across tables.

For example, a listing record can reference the user who created it.

### Constraints

Constraints protect data integrity by preventing invalid or inconsistent values.

### Indexes

Indexes improve the efficiency of database queries, particularly when searching large sets of records.

Location-based matching may also benefit from spatial indexing when implemented using supported geospatial database features.

## Data Integrity and Consistency

Afyra's data model must maintain consistency across connected workflows.

Important considerations include:

- Preserving the ownership of residue listings.
- Associating grading results with the correct photographs.
- Maintaining the relationship between sourcing requirements and selected supply.
- Preventing inconsistent allocation of supply.
- Keeping collection and delivery records linked to their corresponding sourcing activities.

## Physical Data Model

The **Afyra Data Model Implementation** document defines the intended physical database structure.

The actual backend models and database migrations should be used to verify:

- Table names and columns.
- Data types.
- Primary and foreign keys.
- Nullability and constraints.
- Indexes.
- Relationship cardinalities.

This page explains the model conceptually; the ERD and implementation files remain the references for exact schema definitions.

## Related Documentation

- [System Architecture Diagram](/architecture/sad)
- [Secure System Architecture Diagram](/architecture/ssad)
- [Backend](/backend/)
- [Matching Algorithm](/platform/matching)
- [Pooling Algorithm](/platform/pooling)

## References & Live Docs

- Afyra Data Model Implementation - project database design reference.
- Afyra Backend Models and Database Migrations - implementation reference.
- [Afyra API Documentation](https://afyra-def6d466c54b.herokuapp.com/docs)
