---
title: Errors
description: Error format and error codes.
---

Errors come with a matching HTTP status and a JSON body:

```json
{
  "code": "NOT_FOUND",
  "message": "Server not found"
}
```

Check `code` in your code. `message` is for humans and can be translated or reworded.

## Validation errors

If the request body is invalid you get a `400` with `VALIDATION_ERROR` and a `fields` object saying what's wrong with each field:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Validation failed",
  "fields": {
    "email": "invalid email format",
    "password": "password too short"
  }
}
```

## Codes

| Code | Meaning |
| --- | --- |
| `VALIDATION_ERROR` | Invalid body or parameters, see `fields` |
| `INVALID_REQUEST_BODY` | Body isn't valid JSON |
| `INVALID_ID` | Malformed id in the URL |
| `NOT_FOUND` | Doesn't exist, or not in your organisation |
| `ALREADY_EXISTS` | Something with that name/value already exists |
| `UNAUTHORIZED` | Authentication failed |
| `SESSION_INVALID` | Missing or expired token or key |
| `INSUFFICIENT_PERMISSIONS` | Your key or account isn't allowed to do this |
| `LIMIT_EXCEEDED` | You hit a limit on your account or plan |
| `RATE_LIMIT_EXCEEDED` | Too many requests, wait and retry |
| `INTERNAL_ERROR` | Server-side problem. If it keeps happening, contact support |

Some endpoints have their own codes, listed on the endpoint.
