---
title: API
description: Manage your servers and services over the API.
---

Everything you can do in the control panel, you can also do over the API: create and manage servers, DNS, firewalls, billing and the rest. The panel itself is built on it.

## Base URL

All endpoints are under `/v1` on your provider's API host. The examples here use `api.example.com`, swap in your provider's address. If you're not sure what it is, ask their support.

```
https://api.example.com/v1
```

Requests and responses are JSON. Send `Content-Type: application/json` when there's a body.

## Next

- [Authentication](authentication/): get an API key
- [Errors](errors/)
- [Endpoints](reference/)
