# NEON STRIKE — iPhone blank-screen fix

This version replaces the black portrait screen with a branded landing view while keeping **gameplay landscape-only**.

## GitHub Pages installation

Upload the **contents of this folder** (index.html, manifest.webmanifest, sw.js, icons/) to the root of the existing GitHub Pages repository. Do not upload the enclosing directory or ZIP itself. Commit, then reload the website.

## Mobile

- In portrait, iOS and Android display a NEON STRIKE landing view rather than an empty screen. Gameplay is not available in portrait.
- In landscape, the game and controls are displayed normally.
- iOS Safari and in-app browsers cannot force the device to physically rotate. Users must rotate their device to play in landscape.
- The service worker cache name is bumped to load the new version.

This package retains the browser guide, sound, pause, dash, skins, and other gameplay effects. Cloud accounts still require a configured backend.
