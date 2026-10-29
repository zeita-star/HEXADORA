"use strict";
/* ===== GUIDE DATA — edit here. Fields: id,title,cat,diff,ov,sy,ca,tools,steps (lists use "|"), warn,ver,stop,kw ===== */
const CATS = ["Hardware", "Software", "Operating Systems", "Networking", "Maintenance"];
const CAT_INFO = {
  "Hardware": "Power, display, memory, cooling and input devices.",
  "Software": "Slow apps, malware signs and program behavior.",
  "Operating Systems": "Booting, blue screens and system errors.",
  "Networking": "Wi-Fi, cables, routers and printers on a network.",
  "Maintenance": "Cleaning, storage and routine care."
};
const G = (id, title, cat, diff, ov, sy, ca, tools, steps, warn, ver, stop, kw) =>
  ({ id, title, cat, diff, ov, sy: sy.split("|"), ca: ca.split("|"), tools, steps: steps.split("|"), warn, ver, stop, kw });
const GUIDES = [
G("power","Computer will not power on","Hardware","Beginner","The computer shows no signs of life when you press the power button. Start with the outside and the easiest checks, because most cases are power-supply to wall problems.",
"No lights or fans|No sound or beeps|Screen stays dark","Power cable unplugged or loose|Faulty wall outlet or power strip|Failed power supply (possible, not confirmed)|Dead battery on a laptop",
"A known-working power cable or outlet, a lamp to test the outlet",
"Check that the cable is firmly seated at both the wall and the computer. A loose plug is the most common cause.|Plug a lamp into the same outlet. This shows whether the outlet itself has power.|Try another outlet without the power strip, since strips can fail or be switched off.|Remove USB drives and other accessories, then try again. A faulty device can sometimes block startup.|For laptops, connect the charger and wait a few minutes before pressing power, because a fully drained battery needs time.|Look for any LED on the case or charger. Note what you see and report it to your teacher.",
"Never open the power supply or touch exposed electrical parts, even when unplugged.","The power light turns on and the computer begins to start.","Stop if there are still no signs of life, you smell burning, or you see damage. Tell your teacher or a qualified technician.","no power dead won't turn on psu outlet"),
G("nodisplay","Computer turns on but displays nothing","Hardware","Beginner","The computer seems to run (lights, fans) but the screen is blank. The fault may be the monitor, the cable, or the computer.",
"Fans spin but screen is black|Monitor says no signal|Beeps at startup","Monitor off or on the wrong input|Loose or damaged video cable|Loose memory module (possible)|Graphics output problem","A known-working monitor or cable",
"Check the monitor is on and set to the correct input (HDMI, VGA, DisplayPort).|Reseat the video cable at both ends with the computer off.|Try a different cable or monitor to see which part is at fault.|On a desktop, make sure the cable is plugged into the graphics card port if one exists, not the motherboard port.|Listen for beep patterns and note them. They can help your teacher identify the cause.",
"Turn the computer off and unplug it before reconnecting cables. Do not open the case unless your teacher supervises.","Picture appears and the computer reaches the sign-in screen.","Stop if a different monitor and cable also show nothing. Opening the case for memory or graphics checks needs supervision.","blank screen black no signal monitor display"),
G("bsod","Blue Screen of Death errors","Operating Systems","Intermediate","A blue screen means the operating system stopped to protect itself after a serious error. The stop code on screen is a clue, not a final answer.",
"Blue screen with a stop code|Restart right after the screen|Happens after a new driver or update","Faulty or new driver|Failing memory or storage (possible)|Bad update|Overheating|Malware","A phone to photograph the stop code",
"Photograph or write down the stop code and any file name shown.|Think about what changed recently: new hardware, driver, update or program.|Disconnect new USB or external devices and restart.|If it boots, check for system updates and driver updates from official sources.|Use System Restore or uninstall the most recent update if your teacher approves.|Check temperatures and that fans work, since heat can trigger errors.",
"Back up important files before changing drivers or restoring the system.","The computer runs normally for a full session without a blue screen.","Stop if blue screens repeat or the computer cannot start. Share the stop code with your teacher.","bsod blue screen stop code crash"),
G("overheat","Computer overheating","Maintenance","Beginner","Computers slow down or shut off when they get too hot. Heat is often caused by blocked airflow or dust.",
"Loud fan|Hot case or keyboard|Slowdown or sudden shutdown","Dust blocking vents|Blocked airflow (soft surfaces)|High workload|Failed fan or dried thermal paste (possible)","Flashlight, soft brush",
"Move the computer to a hard, flat surface with space around the vents.|Close heavy programs and see if the fan quiets down.|With the computer off and unplugged, look at the vents with a flashlight for dust.|Gently brush the vent openings. Do not blow hard into fans or use a vacuum.|Check the fan spins when the computer starts.",
"Do not open sealed laptops or power supplies. Hot parts can burn skin.","The computer stays warm but not hot, and the fan noise settles.","Stop if the fan does not spin, heat continues, or cleaning needs opening the case. Ask a technician.","hot fan loud thermal temperature cooling"),
G("slow","Slow computer performance","Software","Beginner","A slow computer is usually busy, short on memory or storage, or running unwanted startup programs.",
"Programs take long to open|Freezing|Disk always busy","Too many startup programs|Low free storage|Not enough memory for the task|Malware (possible)|Pending updates","None required",
"Restart the computer. It clears temporary problems.|Open Task Manager and note which program uses the most CPU, memory or disk.|Close programs you do not need.|Disable unneeded startup programs that you recognize.|Check free storage and delete files you own and no longer need.|Install pending updates and run your approved antivirus scan.",
"Do not delete files or disable items you do not recognize.","Programs open faster and Task Manager shows lower usage when idle.","Stop if the slowness is constant with little running. A failing drive or hardware limit may be involved.","slow lag freeze performance startup"),
G("restart","Unexpected shutdowns or restarts","Hardware","Intermediate","The computer turns off or restarts without you asking. Heat, power or software errors are common causes.",
"Sudden black screen and power off|Restarts during games or heavy work|No warning","Overheating|Power supply or battery issue|Loose cable|Software or driver error|Automatic update restart","Notebook to record when it happens",
"Record what you were doing and how long it ran before shutdown.|Check cables and outlet as in the power guide.|Check for dust and heat.|Look in Settings for update restarts.|Disconnect extra devices and test again.|Check Event Viewer entries near the time and note them for your teacher.",
"Save work often while testing.","The computer runs through your normal tasks without shutting down.","Stop if shutdowns are frequent or happen right after starting.","shutdown restart reboot turns off randomly"),
G("input","Keyboard or mouse not working","Hardware","Beginner","Input devices fail from loose connections, batteries, or driver problems.",
"No cursor movement|Keys do nothing|Wireless device not detected","Loose cable or USB port|Dead batteries|Wireless receiver problem|Driver or setting issue","Spare keyboard or mouse, fresh batteries",
"Check the cable or receiver is firmly connected.|Try a different USB port.|Replace batteries and switch the device on.|Test the device on another computer.|Restart the computer.|If it still fails, check Device Manager for warnings.",
"Do not pull cables hard. Handle ports gently.","The cursor moves and keys type correctly.","Stop if neither port nor another device works. Ports may be damaged.","keyboard mouse usb typing cursor touchpad"),
G("internet","No internet connection","Networking","Beginner","Work from your device outward: device, then Wi-Fi or cable, then router, then provider.",
"No websites load|Wi-Fi icon has a warning|Connected but no internet","Wi-Fi turned off|Wrong password|Cable unplugged|Router problem|Provider outage","Phone for comparison",
"Check airplane mode and that Wi-Fi is on.|See if other devices connect. If none do, the problem is likely the router or provider.|Reconnect to the network and re-enter the password if allowed.|For cable, check both ends.|Restart your device.|If you own the router, restart it by unplugging for 30 seconds.",
"Do not use others' networks without permission or change router settings you do not manage.","Websites load on your device.","Stop if all devices are offline for a long time. Contact the network owner or provider.","internet wifi network offline router connection"),
G("boot","Operating system fails to boot","Operating Systems","Advanced","The computer starts but never reaches the desktop. Some fixes risk your data, so be careful.",
"Error message at startup|Restart loop|Black screen after logo","Interrupted update|Corrupted system files|Storage problem|Wrong boot order","Phone to photograph errors",
"Write down the exact message.|Remove USB drives and discs.|Restart and see if recovery options appear.|Try Startup Repair if available and approved by your teacher.|Try Safe Mode if offered.|Do not reinstall or reset until your teacher confirms files are backed up.",
"Resetting or reinstalling can erase data. Get approval first.","The computer reaches the sign-in screen and desktop.","Stop if recovery fails or you see storage errors. Advanced repair needs supervision.","boot startup windows loop recovery"),
G("disk","Storage drive or disk-space problems","Maintenance","Beginner","Low space or drive errors cause slowness and failed saves.",
"Low disk space warning|Cannot save files|Clicking noises","Large files|Temporary files|Full recycle bin|Failing drive (possible)","None required",
"Open storage settings and see what uses space.|Empty the Recycle Bin.|Delete your own unneeded downloads.|Uninstall programs you do not use if allowed.|Move files to an approved backup.",
"Never delete system or unknown files.","Free space increases and saving works.","Stop if you hear clicking or see disk errors. Back up and ask a technician.","disk storage space drive full hard drive ssd"),
G("malware","Malware warning signs","Software","Intermediate","Malware is software meant to harm or spy. Signs can also have other causes.",
"Unwanted pop-ups|Browser settings changed|Unknown programs","Unsafe downloads|Phishing links|Outdated software","Approved antivirus",
"Disconnect from the internet if you suspect infection.|Do not click pop-ups or call numbers shown.|Run your approved antivirus scan.|Uninstall recently added programs you do not recognize.|Update the system and browser.|Change passwords only from a clean device.",
"Do not disable antivirus or run unknown commands.","Pop-ups stop and scan results are clean.","Stop and tell your teacher if scans find threats or accounts were affected.","virus malware popup spyware ransomware phishing"),
G("printer","Printer connection problems","Networking","Beginner","Printer problems often come from connection, queue or paper issues.",
"Printer offline|Job stuck|Printer not found","Cable or Wi-Fi issue|Stuck print queue|Wrong default printer|Paper or ink error","Printer manual",
"Check the printer is on with no error lights.|Check USB or Wi-Fi connection.|Confirm the right printer is selected.|Cancel stuck jobs from the queue.|Restart the printer and computer.",
"Do not pull jammed paper hard. Follow the manual.","A test page prints.","Stop if the printer shows hardware errors.","printer print offline queue paper"),
G("freeze","Computer freezes or stops responding","Operating Systems","Beginner","The screen stops reacting to the mouse and keyboard. It may be one stuck program or the whole system.",
"Cursor does not move|Clock or animations stop|Only one window is stuck","Program stuck|Too little free memory|Overheating|Failing drive (possible)","Notebook to record what you were doing",
"Wait one to two minutes. Heavy work can look like a freeze.|Try Ctrl+Shift+Esc to open Task Manager and end only the stuck program.|If nothing responds, hold the power button until it turns off, then restart.|After restart, note what you were running and check for updates.|Close extra programs and check free storage and heat.",
"Unsaved work is lost when you force a shutdown. Do this only when nothing else works.","The computer runs your normal tasks for a full session without freezing.","Stop if it freezes repeatedly or soon after starting. Tell your teacher.","freeze hang stuck not responding frozen"),
G("appcrash","Apps crash or will not open","Software","Beginner","A program closes by itself, shows an error, or does nothing when opened.",
"Window closes suddenly|Error message appears|Nothing happens on click","Outdated app or system|Corrupted app files|Not enough memory|Conflict with another program","None required",
"Restart the app, then restart the computer.|Check whether the app has an update from its official source.|Close other programs to free memory.|Test whether other apps open, to see if the problem is only this app.|If allowed, use Settings to repair or reinstall the app from its official source.",
"Reinstalling can remove app data. Ask your teacher before doing it.","The app opens and stays open during normal use.","Stop if many apps crash, or the app belongs to school software. Ask your teacher.","app crash program won't open error closes"),
G("winupdate","Windows Update errors","Operating Systems","Intermediate","Updates fail, get stuck, or keep trying again. Write down the error code first.",
"Update stuck at a percentage|Error code shown|Update keeps failing","Low storage|Internet interruption|Interrupted earlier update|Pending restart","Phone to photograph the error code",
"Write down the exact error code and message.|Check free storage and the internet connection.|Restart the computer and try the update again.|Run the Update troubleshooter in Settings if available.|Wait patiently and keep the charger connected during updates.",
"Do not turn the computer off during an update unless your teacher says it is stuck for a very long time.","Settings shows the computer is up to date.","Stop if the computer will not start after an update. Share the error code with your teacher.","windows update error stuck failed install"),
G("audio","No sound or audio output","Hardware","Beginner","The computer plays no sound through speakers or headphones.",
"No sound from speakers|Headphones not detected|Volume bar moves but silent","Muted or low volume|Wrong output device|Loose cable|Audio driver problem","Headphones or other speakers for testing",
"Check the volume and mute, on the computer and on the speakers.|Choose the correct output device in sound settings.|Check cables, the audio jack, or Bluetooth pairing.|Test the speakers or headphones on another device.|Restart the computer and run the audio troubleshooter if available.",
"Turn the volume down before testing headphones.","A test sound plays from the chosen device.","Stop if no device works and Device Manager shows audio warnings. Ask your teacher.","sound audio speaker headphones volume mute"),
G("mic","Microphone not detected","Hardware","Beginner","Apps cannot hear you, or the microphone is missing from the list.",
"Input meter does not move|Microphone not listed|Others cannot hear you","Muted or privacy setting blocked|Wrong input device|Loose plug|Driver problem","Another microphone or headset",
"Check any mute switch on the headset or laptop.|In Settings, check microphone privacy permission for the app.|Choose the correct input device in sound settings.|Reconnect the plug or try another port.|Test with another microphone to see which part is at fault.",
"Only allow microphone access to apps you trust.","The input meter moves when you speak.","Stop if no microphone is listed at all. Ask your teacher.","microphone mic input voice record headset"),
G("webcam","Webcam not working","Hardware","Beginner","The camera shows a black image, an error, or is missing from the app.",
"Black or no image|App says no camera|Camera light stays off","Camera blocked in privacy settings|Another app using it|Physical cover or switch|Driver problem","None required",
"Remove any physical cover and check for a camera switch.|In Settings, check camera permission for the app.|Close other apps that may use the camera.|For USB cameras, try another port.|Restart the computer and test again.",
"Only allow camera access to apps you trust.","The camera preview shows a clear image.","Stop if the camera is missing in Device Manager. Ask your teacher.","webcam camera video black image"),
G("battery","Laptop battery not charging","Hardware","Intermediate","The battery level does not rise while plugged in, or shows plugged in, not charging.",
"Not charging message|Charger light off|Battery drains while plugged in","Loose charger|Wrong or damaged charger|Dirty or damaged port|Battery wear (possible)","Known-working charger of the same model",
"Check both ends of the charger and the wall outlet.|Look at the cable for cuts or bends.|Try a matching charger from your teacher.|Restart the laptop and check battery status in Settings.|Let it cool if it feels hot.",
"Never use a damaged or swollen battery or charger. Do not open the laptop.","The battery percentage rises while plugged in.","Stop at once if the battery looks swollen or smells. Tell your teacher.","battery charging laptop charger plugged in"),
G("touchpad","Laptop touchpad not working","Hardware","Beginner","The cursor does not move or the touchpad buttons do not respond.",
"Cursor frozen|Gestures do nothing|Touchpad light is on","Touchpad turned off by a key or setting|Dirty surface|Driver issue","External mouse",
"Look for a touchpad key (often a function key) and press it.|Check touchpad settings in Settings.|Clean the surface gently with a dry cloth.|Connect an external mouse to continue working.|Restart the laptop.",
"Do not press hard on the touchpad.","The cursor moves and clicks work.","Stop if the touchpad is physically damaged or swollen. Tell your teacher.","touchpad trackpad cursor laptop mouse"),
G("usb","USB device not recognized","Hardware","Beginner","A flash drive or device is plugged in but does not appear.",
"No sound or pop-up when plugged in|Device not listed|Unrecognized message","Faulty port or cable|Device issue|Driver problem|Drive needs a letter","Another USB port and computer",
"Unplug and plug the device into another port.|Try a different cable if it has one.|Test the device on another computer.|Open Device Manager and check for warnings.|Restart the computer.",
"Do not format a drive if asked unless you have backed up its files.","The device appears and its files can be opened.","Stop if the device is not recognized anywhere. Data may be at risk, so ask your teacher.","usb flash drive not recognized port device"),
G("bluetooth","Bluetooth connection problems","Networking","Beginner","A Bluetooth device will not pair or keeps dropping.",
"Device not found|Pairs then disconnects|Audio stutters","Bluetooth off|Low battery|Too far away|Old pairing|Driver problem","The Bluetooth device and its manual",
"Turn Bluetooth on and charge the device.|Put the device in pairing mode following its manual.|Remove the old pairing and pair again.|Move closer and away from other wireless devices.|Restart both devices.",
"Pair only with devices you recognize.","The device connects and stays connected.","Stop if Bluetooth is missing from Settings. Ask your teacher.","bluetooth pair wireless headphones speaker"),
G("ethernet","Ethernet (wired) connection problems","Networking","Beginner","The cable is plugged in but there is no network.",
"No link light|Cable unplugged icon|Limited connection","Loose or damaged cable|Bad port|Router or switch problem","Known-good Ethernet cable",
"Reseat the cable at both ends until it clicks.|Look at the link lights near the port.|Try another cable and another port on the router or switch.|Test another device on the same cable.|Restart the computer.",
"Do not bend or pull cables hard.","The link light turns on and websites load.","Stop if no cable works. Ask your network owner or teacher.","ethernet cable lan wired network port"),
G("wifiweak","Weak Wi-Fi signal or frequent disconnects","Networking","Intermediate","Wi-Fi connects but is slow or drops often.",
"Few signal bars|Drops every few minutes|Fast near the router only","Distance or walls|Interference|Crowded network|Outdated adapter driver","Phone to compare",
"Move closer to the router and see if it improves.|Check whether other devices also drop.|Forget the network and reconnect.|Restart the router only if you own it.|Check for official driver updates.",
"Do not change router settings you do not manage.","The signal stays steady for a full session.","Stop if all devices drop. Contact the network owner.","wifi weak signal disconnect slow wireless"),
G("dns","Website or DNS connection errors","Networking","Intermediate","Some websites do not open though the connection seems fine.",
"Site cannot be reached|Other apps work|Only one site fails","DNS problem|Browser cache|Website outage|Blocked by network rules","Phone with mobile data",
"Check whether the site opens on another device.|Try another website.|Restart the browser and computer.|Clear the browser cache if your teacher agrees.|If you own the router, restart it.",
"Do not change DNS settings on school equipment.","The site opens normally.","Stop if many sites fail. Contact the network owner.","dns website cannot be reached browser error"),
G("share","Shared folders and permission problems","Networking","Advanced","A shared folder cannot be opened or edited. Permissions decide who can read or change files.",
"Access denied|Folder not found|Can read but not edit","Wrong permissions|Computer not on same network|Wrong name or path|Sharing turned off","Folder owner or teacher",
"Confirm you are on the same network.|Check the folder name or path with the owner.|Ask the owner to check your permission level.|Sign in with the account you were given.|Try again after a restart.",
"Never bypass permissions or use accounts that are not yours.","You can open the folder at the agreed permission level.","Stop and ask the teacher or administrator if access is denied. Do not look for workarounds.","shared folder permission access denied network file sharing"),
G("driver","Driver installation problems","Operating Systems","Intermediate","A driver fails to install or a device stays unrecognized.",
"Installer error|Yellow warning in Device Manager|Device works badly","Wrong driver|Corrupt download|Needs a restart|Old system","Maker's website, phone for notes",
"Note the device name and exact model.|Download only from the official maker's site.|Restart before installing.|Install and restart again.|If it fails, use Roll Back Driver or System Restore with approval.",
"Never install drivers from unknown sites.","Device Manager shows no warning and the device works.","Stop if installation keeps failing. Ask your teacher.","driver install device manager yellow warning"),
G("display","Display resolution or external monitor problems","Hardware","Beginner","The picture looks stretched, blurry, or the second screen is not found.",
"Blurry text|No second display|Wrong size","Wrong resolution|Loose cable|Wrong input|Display mode setting","Known-good cable",
"Check the cable and monitor input.|Press the Windows key and P to choose a display mode.|Open display settings and set the recommended resolution.|Try detecting displays in settings.|Update the graphics driver from the official source.",
"Turn off devices before changing cables.","The picture is sharp and the second monitor is found.","Stop if the screen flickers or cracks. Ask a technician.","display resolution monitor second screen projector hdmi"),
G("pin","Forgotten Windows PIN: official recovery","Operating Systems","Beginner","You cannot sign in because you forgot your PIN. Use only official recovery.",
"PIN rejected|Sign-in screen asks to retry","Mistyped PIN|Changed PIN|Account issue","Phone for account recovery",
"Check Caps Lock and the keyboard layout.|Choose I forgot my PIN on the sign-in screen.|Follow the prompts using your own account recovery method.|Ask the school administrator if it is a school account.|Do not try to bypass the sign-in.",
"Never attempt to bypass passwords or sign in to accounts that are not yours.","You sign in with a new PIN.","Stop and ask your teacher or administrator if recovery does not work.","pin password sign in forgot windows login"),
G("backup","File backup and restore problems","Maintenance","Intermediate","Backups fail, or restoring files does not work.",
"Backup error|Files missing after restore|Drive not found","Backup drive full|Drive disconnected|Wrong location|Permissions","External drive or approved storage",
"Check the backup drive is connected and has free space.|Confirm the backup location.|Run the backup again and read the message.|Test restoring one small file first.|Keep a second copy of important files.",
"Do not overwrite files before checking your backup works.","A test file restores correctly.","Stop if the backup drive is not recognized. Ask your teacher.","backup restore files copy recovery"),
];
const ICON = { "Hardware":"M9 3h6v3h3v6h3v3h-3v3h-6v3H9v-3H6v-6H3V9h3z","Software":"M4 5h16v14H4zM4 9h16","Operating Systems":"M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z","Networking":"M12 18v-6M5 12a10 10 0 0114 0M8 15a6 6 0 018 0","Maintenance":"M14 6l4 4-9 9H5v-4z" };
const icon = c => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="${ICON[c]}"/></svg>`;

/* ===== QUIZ DATA ===== */
const QUIZ = {
  power: ["Do any lights or fans react when you press power?", [["Nothing at all",["power"]],["Lights or fans start, then stop",["restart","overheat"]],["Works on battery only or charger issue",["power"]]]],
  nodisplay: ["What does the monitor say?", [["No signal message",["nodisplay"]],["Completely dark, fans spinning",["nodisplay","power"]],["Beeps at startup",["nodisplay"]]]],
  slow: ["When is it slow?", [["Always, even right after restart",["slow","disk","malware"]],["Only with many programs",["slow"]],["Also hot and loud",["overheat","slow"]]]],
  overheat: ["What happens when it gets hot?", [["Fan is loud but it keeps running",["overheat"]],["It shuts off",["restart","overheat"]],["It slows down",["overheat","slow"]]]],
  bsod: ["When does the blue screen appear?", [["After a new update, driver or device",["bsod"]],["Randomly",["bsod","overheat","disk"]],["Every startup, cannot reach desktop",["boot","bsod"]]]],
  internet: ["What else is offline?", [["Only this computer",["internet"]],["All devices",["internet"]],["Only the printer",["printer"]]]],
  input: ["What does not work?", [["Keyboard",["input"]],["Mouse",["input"]],["Both, even after restart",["input","power"]]]],
  boot: ["What do you see at startup?", [["An error message",["boot"]],["Blue screen",["bsod","boot"]],["Restart loop",["boot","disk"]]]],
  freeze: ["What happens?", [["Whole computer stops responding",["freeze","slow","overheat"]],["One app closes or will not open",["appcrash","freeze"]],["Slow, then freezes",["slow","freeze","disk"]]]],
  audio: ["Which part fails?", [["No sound",["audio","driver"]],["Microphone not heard",["mic","audio"]],["Camera shows nothing",["webcam"]]]],
  wifi: ["What is the connection like?", [["Wi-Fi weak or drops",["wifiweak","internet"]],["Cable plugged in but no network",["ethernet","internet"]],["Some websites will not open",["dns","internet"]]]],
  usb: ["Which device?", [["USB drive or device",["usb","driver"]],["Bluetooth device",["bluetooth"]],["Laptop touchpad",["touchpad","input"]]]],
  files: ["What do you need?", [["Open a shared folder",["share"]],["Backup or restore",["backup","disk"]],["Update fails or cannot sign in",["winupdate","pin"]]]],
  screen: ["What is the problem?", [["Battery not charging",["battery","power"]],["Display or second monitor",["display","nodisplay"]],["Device warning or driver error",["driver"]]]]
};
const PROBLEMS = [["power","Computer does not power on"],["nodisplay","Computer powers on but there is no display"],["slow","Computer is unusually slow"],["overheat","Computer overheats"],["bsod","Computer shows a blue screen"],["internet","Computer cannot connect to the internet"],["input","Keyboard or mouse does not work"],["boot","Computer cannot boot into the operating system"],["freeze","Computer freezes or an app crashes"],["audio","Sound, microphone or webcam problem"],["wifi","Wi-Fi, wired or website problem"],["usb","USB, Bluetooth or touchpad problem"],["files","Sharing, backup, update or sign-in problem"],["screen","Battery, display or driver problem"],["other","Other or unsure"]];

/* ===== HELPERS ===== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const mem = {};
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : (k in mem ? mem[k] : d); } catch { return k in mem ? mem[k] : d; } },
  set(k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const dec = s => { try { return decodeURIComponent(s); } catch { return ""; } };
const byId = id => GUIDES.find(g => g.id === id);
let favs = store.get("hx-favs", []), prog = store.get("hx-prog", {});
function toast(msg) { const t = $("#toast"); if (!t) return; t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200); }
function matches(g, q) { q = q.trim().toLowerCase(); if (!q) return true; const hay = [g.title, g.cat, g.ov, g.kw, ...g.sy, ...g.ca].join(" ").toLowerCase(); return q.split(/\s+/).every(w => hay.includes(w)); }
const card = g => `<a class="card" href="#/guide/${g.id}"><span class="tag">${g.cat}</span><h3>${g.title}</h3><p>${g.ov.split(". ")[0]}.</p><span class="muted small">${g.diff} ${favs.includes(g.id) ? "· ★ Favorite" : ""}</span></a>`;

/* ===== INTRO ===== */
function hideIntro() {
  const el = $("#intro"); if (!el) return;
  try { sessionStorage.setItem("hx-intro", "1"); } catch {}
  clearInterval(hideIntro.i); clearTimeout(hideIntro.t);
  el.classList.add("out"); setTimeout(() => el.remove(), 650);
}
function initIntro() {
  const el = $("#intro"); if (!el) return;
  let seen = false; try { seen = sessionStorage.getItem("hx-intro") === "1"; } catch {}
  if (seen) { el.remove(); return; }
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches, dur = reduce ? 2500 : 4000;
  let p = 0; const pct = $("#pct");
  hideIntro.i = setInterval(() => { p = Math.min(100, p + 100 / (dur / 80)); pct.textContent = Math.round(p); }, 80);
  hideIntro.t = setTimeout(hideIntro, dur);
  $("#skip").addEventListener("click", hideIntro); $("#skip").focus();
}

/* ===== VIEWS / ROUTER ===== */
function setTheme(t) { document.documentElement.dataset.theme = t; const b = $("#themeBtn"); b.textContent = t === "dark" ? "☀️" : "🌙"; b.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme"); store.set("hx-theme", t); }
function route() {
  const [, view = "", arg = ""] = (location.hash || "#/").slice(1).split("/");
  const name = ["library", "guide", "quiz", "about"].includes(view) ? view : "home";
  document.title = "HEXADORA – Computer Troubleshooting for TVL-ICT";
  $$("[data-view]").forEach(s => s.hidden = s.dataset.view !== name);
  $$("#nav a").forEach(a => a.dataset.nav === (name === "guide" ? "library" : name) ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false");
  if (name === "library") { $("#cat").value = CATS.includes(dec(arg)) ? dec(arg) : "all"; favMode = arg === "fav"; renderList(); }
  if (name === "guide") renderGuide(arg);
  if (name === "quiz") quizReset();
  if (name === "home") renderHome();
  scrollTo(0, 0);
}

/* ===== HOME ===== */
function renderHome() {
  $("#cats").innerHTML = CATS.map(c => `<a class="card" href="#/library/${encodeURIComponent(c)}">${icon(c)}<h3>${c}</h3><p>${CAT_INFO[c]}</p></a>`).join("");
  $("#featured").innerHTML = ["power", "slow", "internet", "bsod"].map(id => card(byId(id))).join("");
}
function heroSearch() {
  const q = $("#heroSearch").value, out = $("#heroResults");
  if (!q.trim()) { out.innerHTML = ""; return; }
  const r = GUIDES.filter(g => matches(g, q)).slice(0, 5);
  out.innerHTML = r.length ? r.map(g => `<li><a href="#/guide/${g.id}">${g.title}</a></li>`).join("") : `<li>No guides found. Try other words or <a href="#/quiz">take the quiz</a>.</li>`;
}

/* ===== LIBRARY ===== */
let favMode = false;
function renderList() {
  const q = $("#q").value, c = $("#cat").value, s = $("#sort").value;
  let r = GUIDES.filter(g => matches(g, q) && (c === "all" || g.cat === c) && (!favMode || favs.includes(g.id)));
  r.sort((a, b) => s === "cat" ? a.cat.localeCompare(b.cat) || a.title.localeCompare(b.title) : a.title.localeCompare(b.title));
  $("#favOnly").setAttribute("aria-pressed", favMode);
  $("#count").textContent = `${r.length} guide${r.length === 1 ? "" : "s"} shown`;
  $("#list").innerHTML = r.length ? r.map(card).join("") : `<div class="empty"><p>${favMode && !favs.length ? "You have no favorites yet. Open a guide and press “Add to favorites”." : "No guides match your search. Try fewer words or clear the filters."}</p></div>`;
}

/* ===== GUIDE ===== */
function renderGuide(id) {
  const g = byId(id), box = $("#guide");
  if (!g) { box.innerHTML = `<div class="empty"><p class="bad">Guide not found.</p><a class="btn" href="#/library">Back to library</a></div>`; return; }
  document.title = g.title + " – HEXADORA";
  const done = prog[id] || [], fav = favs.includes(id), li = a => a.map(x => `<li>${x}</li>`).join("");
  box.innerHTML = `<p class="no-print"><a href="#/library">← Back to library</a> · <a href="#/">Home</a></p>
  <span class="tag">${g.cat}</span><h1>${g.title}</h1><p class="lead">${g.ov}</p>
  <p><strong>Difficulty:</strong> ${g.diff}. <strong>Tools:</strong> ${g.tools}.</p>
  <div class="row no-print"><button class="btn alt" id="favBtn" aria-pressed="${fav}">${fav ? "★ Remove from favorites" : "☆ Add to favorites"}</button><button class="btn alt" id="printBtn">Print guide</button></div>
  <div class="warn">${g.warn}</div>
  <h2>Symptoms you may observe</h2><ul>${li(g.sy)}</ul>
  <h2>Possible causes</h2><p class="muted">These are possibilities, not confirmed diagnoses.</p><ul>${li(g.ca)}</ul>
  <h2>Troubleshooting steps</h2><progress id="pg" max="${g.steps.length}" value="${done.length}"></progress><p id="pgTxt" aria-live="polite"></p>
  <ol class="steps">${g.steps.map((s, i) => `<li><label><input type="checkbox" data-i="${i}" ${done.includes(i) ? "checked" : ""}><span>${s}</span></label></li>`).join("")}</ol>
  <button class="btn alt no-print" id="resetBtn">Reset progress</button>
  <h2>How to verify it is fixed</h2><p class="good">${g.ver}</p>
  <h2>When to stop and ask for help</h2><p class="note">${g.stop}</p>`;
  const upd = () => { const n = $$(".steps input:checked").length; $("#pg").value = n; $("#pgTxt").textContent = `${n} of ${g.steps.length} steps complete`; };
  upd();
  $$(".steps input").forEach(cb => cb.addEventListener("change", () => { prog[id] = $$(".steps input:checked").map(x => +x.dataset.i); store.set("hx-prog", prog); upd(); }));
  $("#resetBtn").onclick = () => { prog[id] = []; store.set("hx-prog", prog); $$(".steps input").forEach(c => c.checked = false); upd(); toast("Progress reset"); };
  $("#printBtn").onclick = () => window.print();
  $("#favBtn").onclick = () => { favs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]; store.set("hx-favs", favs); renderGuide(id); toast(favs.includes(id) ? "Added to favorites" : "Removed from favorites"); };
}

/* ===== QUIZ ===== */
let qs = {};
function quizReset() { qs = { step: 0, p: null, a: null }; renderQuiz(); }
function renderQuiz() {
  const box = $("#quiz"), nav = (next) => `<div class="row"><button class="btn alt" id="back" ${qs.step ? "" : "disabled"}>Back</button>${next}</div>`;
  const head = `<progress max="3" value="${qs.step + 1}"></progress><p class="muted">Step ${Math.min(qs.step + 1, 3)} of 3</p>`;
  if (qs.step === 0) {
    box.innerHTML = head + `<fieldset><legend>What problem are you experiencing?</legend>${PROBLEMS.map(([k, l]) => `<label class="opt"><input type="radio" name="o" value="${k}" ${qs.p === k ? "checked" : ""}>${l}</label>`).join("")}</fieldset>` + nav(`<button class="btn" id="next" ${qs.p ? "" : "disabled"}>Next</button>`);
  } else if (qs.step === 1) {
    const [q, opts] = QUIZ[qs.p];
    box.innerHTML = head + `<fieldset><legend>${q}</legend>${opts.map(([l], i) => `<label class="opt"><input type="radio" name="o" value="${i}" ${qs.a === i ? "checked" : ""}>${l}</label>`).join("")}</fieldset>` + nav(`<button class="btn" id="next" ${qs.a !== null ? "" : "disabled"}>See results</button>`);
  } else {
    const ids = qs.p === "other" ? [] : QUIZ[qs.p][1][qs.a][1];
    box.innerHTML = head + `<h2>Suggested guides</h2>` + (ids.length ? `<p>Based on what you reported, start with these. They are possibilities, not a confirmed diagnosis.</p><div class="grid">${ids.filter(byId).map(i => card(byId(i))).join("")}</div>` :
      `<p>Not sure? Write down exactly what you see, hear and smell, and what changed recently. Then browse the library or ask your teacher.</p><a class="btn" href="#/library">Browse all guides</a>`) +
      `<div class="row"><button class="btn alt" id="back">Back</button><button class="btn" id="restart">Restart Quiz</button></div>`;
  }
  $$("#quiz input").forEach(r => r.addEventListener("change", () => { if (qs.step === 0) qs.p = r.value; else qs.a = +r.value; $("#next").disabled = false; }));
  const n = $("#next"); if (n) n.onclick = () => { qs.step++; if (qs.step === 1 && qs.p === "other") qs.step = 2; renderQuiz(); };
  const b = $("#back"); if (b) b.onclick = () => { qs.step = qs.step === 2 && qs.p === "other" ? 0 : qs.step - 1; if (qs.step === 0) qs.a = null; renderQuiz(); };
  const r = $("#restart"); if (r) r.onclick = quizReset;
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  setTheme(store.get("hx-theme", matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  $("#themeBtn").onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  $("#menuBtn").onclick = () => { const o = $("#nav").classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", o); $("#menuBtn").setAttribute("aria-label", o ? "Close menu" : "Open menu"); };
  $("#cat").innerHTML = `<option value="all">All categories</option>` + CATS.map(c => `<option>${c}</option>`).join("");
  ["q", "cat", "sort"].forEach(i => $("#" + i).addEventListener("input", renderList));
  $("#favOnly").onclick = () => { favMode = !favMode; renderList(); };
  $("#clear").onclick = () => { $("#q").value = ""; $("#cat").value = "all"; $("#sort").value = "az"; favMode = false; renderList(); toast("Filters cleared"); };
  $("#heroSearch").addEventListener("input", heroSearch);
  window.addEventListener("hashchange", route);
  route(); initIntro();
});
