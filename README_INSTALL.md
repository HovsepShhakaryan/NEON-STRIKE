# NEON STRIKE — Installable Game (PWA)

## Upload to GitHub Pages

1. Unzip this package.
2. In your public GitHub repository, upload **index.html**, **manifest.webmanifest**, **sw.js**, and the entire **icons** folder. Keep their names and paths. Do not upload the ZIP alone.
3. In repository **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)` and Save.
4. Open `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/` in a browser. GitHub Pages gives HTTPS automatically.
5. Android: Chrome → Install app (or `⋮` → Add to Home screen).
6. iOS/iPadOS: Safari → Share → Add to Home Screen → Open as Web App (if offered) → Add.

An **INSTALL APP** button has also been added to the game's start screen, which either triggers the supported install prompt or shows device-specific instructions.

## Features

- Standalone app icon and launch experience on iOS and Android.
- Game shell cached to work offline after first successful online visit.
- Fullscreen-feeling standalone browser window.
- Touch controls retained.

## Important: player accounts

This package is based on the existing Supabase-equipped game. It **does not replace Supabase with Firebase**. If you want Firebase, the game's account code must still be migrated. Do not put service-account or admin secrets into index.html.

Offline cloud operations cannot succeed without internet. Guest/local play works offline after installation.

## Updates

After uploading new game versions, change `CACHE_NAME` in `sw.js` (for example v2) so installed app instances refresh their cached assets. Players may need to relaunch while online.

## Testing

Open Chrome DevTools → Application → Manifest / Service workers. For iOS test through Safari on a real iPhone.

## Landscape-only play
The PWA requests landscape mode on installation (where supported). In mobile browsers that cannot lock orientation, a rotate-phone screen covers gameplay when held in portrait. Rotate your device sideways to play. On iOS you may need to disable the system rotation lock. Replace **all** existing PWA files in GitHub Pages and reload/relaunch the installed app to get the update.


## Pause / Resume (new)
- Tap the ⏸ button in the upper-right HUD. The game stops and the music pauses.
- Tap **Resume Game** on the pause screen or the ▶ button to continue.
- Desktop: press **P** or **Esc**.
- Switching tabs, minimizing the app, or rotating to portrait automatically pauses. Return to landscape and tap Resume.
- Re-upload all updated files to GitHub Pages; updated service worker cache version installs the new code.


Update: Added a reactive neon background flash that changes color briefly whenever the player fires.


Automatic landscape layout: no rotate prompt. On portrait mobile browsers, the entire game is visually rotated into a landscape layout and controls remain usable. Browsers cannot physically rotate the device or always lock iOS screen orientation.
