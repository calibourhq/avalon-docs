---
title: Introduction
description: What Avalon is and what it covers.
sidebar:
  order: 1
---

Avalon is a hosting and billing platform. One Go API server backs two web apps: a customer panel where users manage their organisations and services, and an admin panel where staff run the platform.

## Services

Each service can be switched on or off under `features:` in `config.yaml`. They are all off unless listed.

| Key | Service |
| --- | --- |
| `vps` | Virtual private servers |
| `dedicated_servers` | Dedicated servers and racks |
| `dns` | Managed DNS |
| `cdn` | CDN zones |
| `bgp` | BGP sessions and announcements |
| `private_networks` | Private networks between services |
| `s3` | S3-compatible object storage |
| `webhosting` | Shared web hosting |
| `email` | Email hosting |
| `domains` | Domain registration |
| `support` | Support tickets |
| `donations` | Donations |

Your customers can use the [API](../../api/) to manage their services.
