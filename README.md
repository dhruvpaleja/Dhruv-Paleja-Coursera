# Dhruv Paleja - Coursera Assistant

Chrome extension maintained and branded by **Dhruv Paleja**, based on the repaired upstream V3 runtime. Current release: **3.0.1**.

**[Download Dhruv Paleja Coursera Assistant](https://github.com/dhruvpaleja/Dhruv-Paleja-Coursera/releases/latest)** - choose **Dhruv-Paleja-Coursera-v3.0.1.zip** under Assets.

## Install

1. Extract the ZIP into a permanent folder.
2. Open chrome://extensions and enable **Developer mode**.
3. Click **Load unpacked** and select the folder containing manifest.json.
4. Open **Dhruv Paleja - Coursera Assistant** and enter your activation key.
5. Configure your Groq or Gemini API key, then refresh your Coursera tab.

For an existing installation, back up its directory, replace the extension files there, and click **Reload** in Chrome. Keeping the installation path preserves the extension identity. Never commit keys.

## This release

- Dhruv Paleja name, DP icons, popup, settings and GitHub link.
- Repaired V3 runtime restored from the original author's 3.0.0 release; branding version bumped to 3.0.1.
- Installation notes and reproducible integrity checks: **node scripts/verify.cjs**.

The runtime still requires activation and an AI provider key. License checks and the upstream DevTools restriction remain. If **UNAUTHORIZED / Close DevTools** appears, close the extension's DevTools and reopen the popup. An idle service worker is [normal in Manifest V3](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle).

Service-worker, popup and settings initialization, file hashes and syntax were checked. Live solving, submissions and grades remain unverified; full marks are not guaranteed. This is the V3 branding release, not the unfinished custom V4.

## Attribution

Forked from [TobiX-Dev/Coursera-Automation-By-Tobi](https://github.com/TobiX-Dev/Coursera-Automation-By-Tobi). The original MIT copyright is retained in [LICENSE](LICENSE). [Original upstream documentation](UPSTREAM-README.md) is historical reference, not independently verified feature claims.

See [repair notes](LOCAL-SETUP.md) and [file verification records](verification.json).
