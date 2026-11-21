# NEON STRIKE — iPhone layout & controls fix

This edition removes the 90-degree portrait CSS rotation that made the iOS UI sideways and shifted the layout. The game now uses the screen orientation naturally (portrait while upright, landscape while sideways), with larger semi-transparent touch controls, safe-area padding, and corrected touch coordinates. iOS Safari/PWA cannot physically force landscape.

Upload **all** files inside this folder to the root of your existing GitHub Pages repository (not the folder itself). Replace index.html, sw.js and manifest.webmanifest. Preserve icons/ paths.

If an installed PWA still shows an older version, close it completely, open the game URL in Safari, refresh the page and reopen the installed app. If necessary, remove the old Home Screen shortcut and install it again.

Cloud accounts still require your Supabase configuration; this version doesn't migrate the backend to Firebase.
