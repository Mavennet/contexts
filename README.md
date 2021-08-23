# Contexts

Please refer [this link](https://www.w3.org/TR/vc-data-model/#contexts) to understand what is a context and why it is required in terms of the Verifiable Credential (VC) Data Model. Basically a context defines the vocabulary used in a VC.

This repository defines contexts for numerous VCs. Few Neoflow Event VCs do not have their contexts defined at [traceability-vocab](https://github.com/w3c-ccg/traceability-vocab). Hence, this repository helps you define the context for those VCs. If the vocabulary in the context is defined correctly for a VC then the VC is issued successfully. (FYI - [vc-js](https://github.com/digitalbazaar/vc-js) is the library used to issue the VC).

If a new context needs to be added/supported then you should define a new .jsonld file and its corresponding vocab in a .md file format. Please refer the existing event example -

[The Context is hosted at ]["https://mavennet.github.io/contexts/v1.jsonld"]

## Hosting

The contexts are hosted using GitHub Pages. For example, a storage VC's context can be found at https://mavennet.github.io/contexts/storage-event-v1.0.jsonld
