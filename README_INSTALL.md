# NEON STRIKE — Android Install + iPhone landscape-only

1. Upload the **contents of this folder** (index.html, manifest.webmanifest, sw.js, icons/) to the **root** of your public GitHub Pages repository, not the folder itself.
2. Commit. Open the HTTPS GitHub Pages link on Android **Chrome**.
3. The **INSTALL APP** button appears on the portrait landing screen or the game start menu. If Chrome has dispatched `beforeinstallprompt`, tapping the button calls Chrome's native installation prompt; the user must confirm. If Chrome does not offer a prompt, the button shows Chrome menu instructions.
4. Once installed, launch from the home screen. The PWA manifest requests landscape on browsers/devices that support orientation locking.
5. On **iPhone Safari**, websites cannot force the physical screen to rotate or lock landscape on page load. This version keeps the landing screen visible in portrait and permits gameplay in landscape when the device is turned sideways. Safari users can install via **Share → Add to Home Screen**.
6. When updating an already-installed game, close and reopen it so the service worker can replace the cached app shell. If needed, refresh the GitHub Pages link in the browser.

Cloud login and scores still require your separately configured Supabase backend (this is not the Firebase migration).
