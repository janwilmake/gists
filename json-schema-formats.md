The JSON Schema specification includes several predefined formats that you can use with the `format` keyword. These formats are used for semantic validation of string values. Here are the standard formats available:

### String Formats in JSON Schema

**Date/Time Formats:**

- `date-time`: Date and time together (ISO 8601), e.g., "2018-11-13T20:20:39+00:00"
- `date`: Calendar date (ISO 8601), e.g., "2018-11-13"
- `time`: Time (ISO 8601), e.g., "20:20:39+00:00"
- `duration`: Duration (ISO 8601), e.g., "P3D" (3 days)

**Email Formats:**

- `email`: Email address, e.g., "user@example.com"
- `idn-email`: Internationalized email address

**URI/URL Formats:**

- `uri`: Universal Resource Identifier
- `uri-reference`: URI reference
- `uri-template`: URI template
- `url`: URL (deprecated alias for `uri`)
- `iri`: Internationalized Resource Identifier
- `iri-reference`: Internationalized Resource Identifier reference

**Host/IP Formats:**

- `hostname`: Internet host name
- `idn-hostname`: Internationalized host name
- `ipv4`: IPv4 address, e.g., "192.168.1.1"
- `ipv6`: IPv6 address, e.g., "2001:0db8:85a3:0000:0000:8a2e:0370:7334"

**Identifier Formats:**

- `uuid`: UUID (universally unique identifier)
- `regex`: Regular expression
- `json-pointer`: JSON Pointer
- `relative-json-pointer`: Relative JSON Pointer

**Other Formats:**

- `byte`: Base64-encoded binary data
- `binary`: Binary data (typically only available in OpenAPI/Swagger)

Note that support for these formats may vary between JSON Schema validators. Some validators may not support all of these formats or may implement them slightly differently. Additionally, some tools or libraries might support custom formats beyond the standard ones listed above.

If you need to validate a specific pattern (like your alphanumeric slug with dashes and underscores), using the `pattern` keyword with a regular expression is usually more reliable across implementations than relying on custom formats.
