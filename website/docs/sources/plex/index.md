---
title: Plex
---

<span class="badge badge--secondary">Support level: Community</span>

Allows users to authenticate using their Plex credentials

## Preparation

None

## authentik -> Sources

Add _Plex_ as a _source_

-   Under Directory -> Federation & Social login
-   Create 
-   Select "Plex Source" -> Next
-   Name: Choose a name (For the example I used Plex)
-   Slug: plex (You can choose a different slug, if you do you will need to update the Plex redirect URLand point it to the correct slug.)
-   Client ID: Set a unique Client Id or leave the generated ID
-   Press _Load Servers_ to login to plex
-   Select the authorized Plex Server(s) from "Allowed Servers"
-   Check if you want to "Allow friends to authenticate via Plex, even if you don't share any servers"

Save, and you now have Plex as a source.

:::note
For more details on how-to have the new source display on the Login Page see [here](../index.md#add-sources-to-default-login-page).
:::
