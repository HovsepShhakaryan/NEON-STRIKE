# NEON STRIKE — Android install support

Upload **index.html**, **manifest.webmanifest**, **sw.js** and the entire **icons/** folder to the root of your GitHub Pages repository. Do not upload the ZIP itself. The site must be served over HTTPS (GitHub Pages provides this).

## Install on Android

1. Open your GitHub Pages game URL in **Chrome for Android**.
2. Tap **INSTALL GAME** on the game landing screen (including in portrait).
3. If Chrome offers the native app-install prompt, confirm it. If not, follow the on-screen directions to open Chrome’s menu → **Install app** or **Add to Home screen**.
4. Launch NEON STRIKE from your Android Home Screen. Gameplay remains landscape-only.

Chrome controls whether the native installation prompt is available; the button cannot force one to appear. In-app browsers may not support PWA installation. The installed app may request landscape orientation on supported devices.

## iPhone

Use Safari → Share → Add to Home Screen. iOS cannot be forced into landscape by a website.

When updating an already installed game, close and reopen it after the new service worker updates. Android browser installation and device behaviors need testing on hardware.


LANDSCAPE LAUNCH UPDATE
- Attempts Android landscape lock immediately when opening the URL. Ordinary browser tabs commonly reject this due to browser security restrictions.
- If the first attempt fails, Android has a PLAY LANDSCAPE button to request fullscreen and landscape after a user gesture.
- Installed Android PWA manifest retains orientation: landscape.
- On iOS Safari, a site cannot force the device orientation: turn the phone physically. Portrait displays a landing screen rather than a broken or blank game.
