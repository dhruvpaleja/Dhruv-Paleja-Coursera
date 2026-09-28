# Coursera Extension V3 - repaired distribution

Maintained by **Dhruv Paleja**, forked from [TobiX-Dev/Coursera-Automation-By-Tobi](https://github.com/TobiX-Dev/Coursera-Automation-By-Tobi). Original runtime and copyright belong to TobiX-Dev under the [MIT license](LICENSE).

This fork restores the missing extension files using the author's official **3.0.0** release asset. The upstream main branch referenced runtime files that had been deleted. An older installed 2.0.0 build also crashed during popup initialization after its built-in expiration date.

**[Download the repaired V3 release](https://github.com/dhruvpaleja/Coursera-Automation-By-Tobi/releases/latest)** and choose **Coursera-Extension-V3-Ready.zip** under Assets.

## Install in Chrome

1. Extract the ZIP into a permanent folder.
2. Open chrome://extensions and enable **Developer mode**.
3. Choose **Load unpacked** and select the folder containing manifest.json.
4. Open the extension and enter your activation key.
5. Configure your Groq or Gemini API key in the extension UI, then refresh your Coursera tab.

For an existing installation, back up its folder, replace the runtime files there, and click **Reload** in Chrome. Keeping the same installation folder preserves its extension identity. Do not commit activation keys or provider credentials.

The extension retains its upstream name, **Boring Quiz Solver**, and manifest version **3.0.0**. The release tag v3.0.0-repaired identifies this repository packaging repair; it is not a new AI engine or the unfinished custom V4 extension.

## Verification and remaining setup

- Verified: service-worker registration, popup and options initialization with zero page exceptions or missing element lookups, JavaScript syntax, and runtime hashes against the official release.
- The activation screen was also verified in Chrome after upgrading the existing installation.
- Activation, provider requests, course automation, submissions, and marks have **not** been verified. Full marks are not guaranteed.
- License checks and the upstream DevTools restriction remain. If the popup displays **UNAUTHORIZED / Close DevTools**, close the extension's DevTools and reopen the popup.
- An idle **Service worker (Inactive)** is normal [Manifest V3 behavior](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle).

Run **node scripts/verify.cjs** for dependency-free integrity and syntax checks. Browser initialization was tested separately in isolated Chromium with external networking disabled.

See [repair details](LOCAL-SETUP.md) and [SHA-256 verification](verification.json). The [original upstream README](UPSTREAM-README.md) is preserved for reference; its feature claims are not independent validation by this fork.
