---
title: Admin API
description: Admin API for staff.
---

What the admin panel uses. Staff sessions only, anything else gets `STAFF_ACCESS_REQUIRED`.

Base URL, [auth header](../authentication/) and [error format](../errors/) are the same as the [API](../), just with a staff session token.

Listed here are the staff-only endpoints, plus the shared ones that take extra parameters or return extra fields for staff. Shared endpoints that behave the same for everyone are only in the [API reference](../reference/).

Permissions come from the staff account's admin group; missing one gets `INSUFFICIENT_PERMISSIONS`.
