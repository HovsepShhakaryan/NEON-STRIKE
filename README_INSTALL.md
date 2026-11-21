# NEON STRIKE — iPhone layout & controls fix

This edition removes the 90-degree portrait CSS rotation that made the iOS UI sideways and shifted the layout. The game now uses the screen orientation naturally (portrait while upright, landscape while sideways), with larger semi-transparent touch controls, safe-area padding, and corrected touch coordinates. iOS Safari/PWA cannot physically force landscape.

Upload **all** files inside this folder to the root of your existing GitHub Pages repository (not the folder itself). Replace index.html, sw.js and manifest.webmanifest. Preserve icons/ paths.

If an installed PWA still shows an older version, close it completely, open the game URL in Safari, refresh the page and reopen the installed app. If necessary, remove the old Home Screen shortcut and install it again.

Cloud accounts still require your Supabase configuration; this version doesn't migrate the backend to Firebase.

## Browser recommendation
Browsers and messaging apps decide where links open. A GitHub Pages site cannot guarantee Safari on iOS or Chrome on Android. This update shows a dismissible copy-link tip only when it detects a different browser; it never redirects without permission. Installed PWAs launch standalone.


## Landscape only
- Mobile gameplay and menus are accessible only when the screen is landscape.
- Portrait displays a dark blank screen (no rotation prompt, no sideways game).
- If you rotate to portrait during gameplay, the game pauses; rotate back to landscape and tap Resume.
- The installed app requests landscape through its web manifest and a best-effort browser orientation lock.
- iOS Safari/PWA does not provide a reliable way for web pages to physically force the device orientation. Rotate the device to use the game.
- iOS/Android browser recommendation logic is preserved.
