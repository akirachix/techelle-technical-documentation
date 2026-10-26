# Secure System Architecture Diagram (SSAD)

The Secure System Architecture Diagram presents Afyra's architecture from a security perspective. It identifies the components that process sensitive information, the boundaries between them and the controls required to protect communication and data.

Unlike the System Architecture Diagram, which explains how the platform operates, the SSAD focuses on **how the system is protected**.

## Secure System Architecture Diagram

![Afyra Secure System Architecture Diagram](/images/afyra-ssad.png)

## Security Architecture Overview

Afyra processes user identities, contact information, farm locations, residue photographs, procurement records and collection information.

These data types require appropriate protection as information moves between mobile applications, web interfaces, backend services, persistent storage and external providers.

## Security Boundaries

| Boundary                      | Security Considerations                                           |
| ----------------------------- | ----------------------------------------------------------------- |
| User to application           | Authentication and protection of user sessions                    |
| Application to backend        | Secure API communication and request validation                   |
| Backend to database           | Restricted database access and protection of stored records       |
| Backend to image storage      | Upload validation and controlled access to stored photographs     |
| Backend to external providers | Controlled data sharing and protection of credentials             |
| Administrator to platform     | Role-based authorization and restricted administrative operations |

These describe security responsibilities. Their presence in this documentation does not independently confirm that every control has been implemented.

## Authentication and Authorization

### Authentication

Authentication establishes the identity of a user accessing Afyra.

The security requirements call for protected authentication flows, secure handling of authentication tokens and appropriate session management.

### Authorization

Authorization determines which operations an authenticated user can perform.

Afyra's role-based workflows require restrictions for farmers, manufacturers, drivers and administrators.

For example, a user should not be able to modify another farmer's listing without the required permissions.

## API Security

The backend is responsible for enforcing security controls on protected API operations.

Relevant requirements include:

- Validating incoming request data.
- Checking authentication and permissions.
- Enforcing resource ownership.
- Restricting access to sensitive operations.
- Handling errors without exposing secrets or internal system information.

Client-side restrictions alone are not sufficient to secure backend resources.

## Data Protection

### Personal Information

Afyra handles personal and operational data, including contact details and location information.

The security requirements emphasize collecting only necessary information and restricting access according to user responsibilities.

### Location Information

Precise farm coordinates are relevant to collection and navigation.

The security design should distinguish situations requiring exact locations from those where generalized location information is sufficient.

### Residue Photographs

Uploaded images must be handled securely.

The documented backend image-processing integration removes EXIF metadata, applies file-processing restrictions and supports controlled storage access.

## External Integration Security

External services introduce additional boundaries because information leaves Afyra's core application environment.

The security design requires:

- Protecting API keys and service credentials.
- Limiting information shared with providers.
- Validating external responses.
- Handling provider failures safely.

## Security Monitoring and Verification

The security requirements also address logging, dependency security, secret management, backups and testing against common web-application vulnerabilities.

These requirements should be verified through implementation reviews and security testing before being described as operational controls.

## Related Documentation

- [System Architecture Diagram](/architecture/sad)
- [ERD & Data Models](/architecture/data-models)
- [Security](/security/)
- [Backend](/backend/)
- [Integrations](/integrations/)

## References & Live Docs

- Afyra Secure System Architecture Diagram - approved security architecture asset.
- Afyra Security and Privacy Requirements Document.
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Afyra API Documentation](https://afyra-def6d466c54b.herokuapp.com/docs)
