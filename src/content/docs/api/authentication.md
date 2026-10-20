---
title: Authentication
description: Authenticate with an API key.
---

Send your API key as a Bearer token:

```bash
curl https://api.example.com/v1/vps \
  -H "Authorization: Bearer avk_..."
```

## API keys

Create one in the control panel. Keys start with `avk_`.

A key belongs to one organisation and only gets the permissions you pick when creating it, never more than your own account has. Keep it secret; if one leaks, delete it in the panel and make a new one.

## Session tokens

The control panel uses session tokens, sent in the same header. You can get one through the sign-in endpoints, but they expire and sign-in may ask for 2FA, so use an API key for scripts.

## When it fails

A missing, invalid or expired token gets a `401` with `SESSION_INVALID`. A valid key without the needed permission gets `INSUFFICIENT_PERMISSIONS`. See [Errors](../errors/).
