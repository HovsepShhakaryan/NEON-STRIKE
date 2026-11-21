# NEON STRIKE — instant landscape layout

Upload all files **inside this folder** to the root of your GitHub Pages repository: `index.html`, `sw.js`, `manifest.webmanifest`, and `icons/`.

- No rotate-message overlay. Game launches right away.
- On an upright phone, the HTML game surface is rotated 90 degrees into a landscape-style canvas with remapped pointer/touch controls.
- On a physically rotated phone, the game uses native landscape sizing.
- Where supported, installed Android web apps may lock device orientation via the Web App Manifest and Screen Orientation API.
- **iPhone limitation:** Safari/PWA cannot force the iPhone OS into physical landscape. The game content can rotate, but the home screen, system UI and browser viewport remain controlled by iOS.
- If installed already, close and reopen the app after deploying; if the previous version persists, remove it and add the page to the home screen again.
- The current player-account screen is still Supabase-based and requires your Supabase configuration to enable cloud login.
