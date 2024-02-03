# n8n-better-google-services-credential

This is an n8n community credential. It lets you use the Google Services Account API in your workflows but allows you overwriting the user to impersonate.  
This is useful for scenarios where, for example, you want to set a company-wide signature in Gmail for all users.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Credentials](#credentials)
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation. The name of the package is `n8n-better-google-services-credential`

## Credentials

Refer to the [Google Service Account documentation](https://docs.n8n.io/integrations/builtin/credentials/google/service-account/) to set up the credentials for use in HTTP nodes.

Whenever you want to impersonate a different user, you can set the `delegated-email` header in the HTTP node.

## Compatibility

Tested with n8n v1.26.0

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Google Service Account documentation](https://docs.n8n.io/integrations/builtin/credentials/google/service-account/)
