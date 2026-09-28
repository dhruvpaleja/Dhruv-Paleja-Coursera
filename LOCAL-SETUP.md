# Dhruv Paleja - V3 repair and branding notes

## Cause and repair

At upstream main commit e19b081, seven required extension runtime files had been deleted while their manifest references remained. The locally installed 2.0.0 build also reproduced Cannot read properties of null (reading 'addEventListener'): its 2026-08-31 build expiration removed the main UI before provider listeners bound.

The initial V3 repair restored the runtime from the author's actual [3.0.0 release asset](https://github.com/TobiX-Dev/Coursera-Automation-By-Tobi/releases/download/Coursera-V3.0-AI-Models-Updated-With-Videos-Skip-Fixed/Updated.Latest.Ai.zip). The experimental local 2.0.1 date patch was superseded and is not shipped. License checks and the upstream DevTools restriction have not been removed.

## Setup

Extract the release ZIP, open chrome://extensions, enable Developer mode, and select **Load unpacked** on the directory containing manifest.json. Enter your activation key and provider API key directly in the extension. Refresh the Coursera tab after installation or reload.

If **UNAUTHORIZED / Close DevTools** appears, close the extension's DevTools and reopen its popup. An inactive worker by itself is [normal idle behavior](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle).

## Evidence and limits

Verified: reproduction of the old exception; 3.0.0 service-worker registration; popup and options initialization with zero page exceptions and zero missing element lookups in an isolated Chromium profile; JavaScript syntax; runtime SHA-256 equality against the official asset and upgraded installation; version and activation screen in Chrome.

The isolated initialization tests had external networking disabled. A separate live visit to the author's status site worked but does not verify activation or provider requests. License activation, answer quality, course completion, submissions, and grades are unverified. Full marks are not guaranteed. The upstream runtime is obfuscated; these checks are not a comprehensive security audit.

Version 3.0.1 changes the manifest, popup/settings branding and icons, and adds branding.js to route the repository button to this fork. The five original runtime JavaScript files are unchanged. The original license and provider flows are preserved.

verification.json records the current distribution hashes and upstream comparisons. Run **node scripts/verify.cjs** to check this checkout against those recorded hashes and validate manifest paths and JavaScript syntax.
