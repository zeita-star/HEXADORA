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
G("power","Computer Will Not Power On","Hardware","Beginner","The computer showed no signs of life when the power button was pressed. Start with the outside and the easiest checks, because most cases are power-supply to wall problems.",
"No lights or fans|No sound or beeps|Screen stays dark","Power cable unplugged or loose|Faulty wall outlet or power strip|Failed power supply (possible, not confirmed)|Dead battery on a laptop",
"A known-working power cable or outlet, a lamp to test the outlet",
"Check that the cable is firmly seated at both the wall and the computer. A loose plug is the most common cause.|Plug a lamp into the same outlet. This shows whether the outlet itself has power.|Try another outlet without the power strip, since strips can fail or be switched off.|Remove USB drives and other accessories, then try again. A faulty device can sometimes block startup.|For laptops, connect the charger and wait a few minutes before pressing power, because a fully drained battery needs time.|Look for any LED on the case or charger. Note what you see and report it to your teacher.",
"Never open the power supply or touch exposed electrical parts, even when unplugged.","The power light turns on and the computer begins to start.","Stop if there are still no signs of life, you smell burning, or you see damage. Tell your teacher or a qualified technician.","no power dead won't turn on psu outlet"),
G("nodisplay","Computer Turns On but Displays Nothing","Hardware","Beginner","The computer seemed to run, with lights and fans on, but the screen was blank. The fault may be the monitor, the cable, or the computer.",
"Fans spin but screen is black|Monitor says no signal|Beeps at startup","Monitor off or on the wrong input|Loose or damaged video cable|Loose memory module (possible)|Graphics output problem","A known-working monitor or cable",
"Check the monitor is on and set to the correct input (HDMI, VGA, DisplayPort).|Reseat the video cable at both ends with the computer off.|Try a different cable or monitor to see which part is at fault.|On a desktop, make sure the cable is plugged into the graphics card port if one exists, not the motherboard port.|Listen for beep patterns and note them. They can help your teacher identify the cause.",
"Turn the computer off and unplug it before reconnecting cables. Do not open the case unless your teacher supervises.","Picture appears and the computer reaches the sign-in screen.","Stop if a different monitor and cable also show nothing. Opening the case for memory or graphics checks needs supervision.","blank screen black no signal monitor display"),
G("bsod","Blue Screen of Death Errors","Operating Systems","Intermediate","A blue screen means the operating system stopped to protect itself after a serious error. The stop code on screen is a clue, not a final answer.",
"Blue screen with a stop code|Restart right after the screen|Happens after a new driver or update","Faulty or new driver|Failing memory or storage (possible)|Bad update|Overheating|Malware","A phone to photograph the stop code",
"Photograph or write down the stop code and any file name shown.|Think about what changed recently: new hardware, driver, update or program.|Disconnect new USB or external devices and restart.|If it boots, check for system updates and driver updates from official sources.|Use System Restore or uninstall the most recent update if your teacher approves.|Check temperatures and that fans work, since heat can trigger errors.",
"Back up important files before changing drivers or restoring the system.","The computer runs normally for a full session without a blue screen.","Stop if blue screens repeat or the computer cannot start. Share the stop code with your teacher.","bsod blue screen stop code crash"),
G("overheat","Computer Overheating","Maintenance","Beginner","The computer overheated, slowed down, or shut off. Heat is often caused by blocked airflow or dust.",
"Loud fan|Hot case or keyboard|Slowdown or sudden shutdown","Dust blocking vents|Blocked airflow (soft surfaces)|High workload|Failed fan or dried thermal paste (possible)","Flashlight, soft brush",
"Move the computer to a hard, flat surface with space around the vents.|Close heavy programs and see if the fan quiets down.|With the computer off and unplugged, look at the vents with a flashlight for dust.|Gently brush the vent openings. Do not blow hard into fans or use a vacuum.|Check the fan spins when the computer starts.",
"Do not open sealed laptops or power supplies. Hot parts can burn skin.","The computer stays warm but not hot, and the fan noise settles.","Stop if the fan does not spin, heat continues, or cleaning needs opening the case. Ask a technician.","hot fan loud thermal temperature cooling"),
G("slow","Slow Computer Performance","Software","Beginner","The computer ran slowly. A slow computer is usually busy, short on memory or storage, or running unwanted startup programs.",
"Programs take long to open|Freezing|Disk always busy","Too many startup programs|Low free storage|Not enough memory for the task|Malware (possible)|Pending updates","None required",
"Restart the computer. It clears temporary problems.|Open Task Manager and note which program uses the most CPU, memory or disk.|Close programs you do not need.|Disable unneeded startup programs that you recognize.|Check free storage and delete files you own and no longer need.|Install pending updates and run your approved antivirus scan.",
"Do not delete files or disable items you do not recognize.","Programs open faster and Task Manager shows lower usage when idle.","Stop if the slowness is constant with little running. A failing drive or hardware limit may be involved.","slow lag freeze performance startup"),
G("restart","Unexpected Shutdowns or Restarts","Hardware","Intermediate","The computer turned off or restarted without being asked. Heat, power or software errors are common causes.",
"Sudden black screen and power off|Restarts during games or heavy work|No warning","Overheating|Power supply or battery issue|Loose cable|Software or driver error|Automatic update restart","Notebook to record when it happens",
"Record what you were doing and how long it ran before shutdown.|Check cables and outlet as in the power guide.|Check for dust and heat.|Look in Settings for update restarts.|Disconnect extra devices and test again.|Check Event Viewer entries near the time and note them for your teacher.",
"Save work often while testing.","The computer runs through your normal tasks without shutting down.","Stop if shutdowns are frequent or happen right after starting.","shutdown restart reboot turns off randomly"),
G("input","Keyboard or Mouse Not Working","Hardware","Beginner","The keyboard or mouse did not work. Input devices fail from loose connections, batteries, or driver problems.",
"No cursor movement|Keys do nothing|Wireless device not detected","Loose cable or USB port|Dead batteries|Wireless receiver problem|Driver or setting issue","Spare keyboard or mouse, fresh batteries",
"Check the cable or receiver is firmly connected.|Try a different USB port.|Replace batteries and switch the device on.|Test the device on another computer.|Restart the computer.|If it still fails, check Device Manager for warnings.",
"Do not pull cables hard. Handle ports gently.","The cursor moves and keys type correctly.","Stop if neither port nor another device works. Ports may be damaged.","keyboard mouse usb typing cursor touchpad"),
G("internet","No Internet Connection","Networking","Beginner","The computer could not reach the internet.",
"No websites load|Wi-Fi icon has a warning|Connected but no internet","Wi-Fi turned off|Wrong password|Cable unplugged|Router problem|Provider outage","Phone for comparison",
"Check airplane mode and that Wi-Fi is on.|See if other devices connect. If none do, the problem is likely the router or provider.|Reconnect to the network and re-enter the password if allowed.|For cable, check both ends.|Restart your device.|If you own the router, restart it by unplugging for 30 seconds.",
"Do not use others' networks without permission or change router settings you do not manage.","Websites load on your device.","Stop if all devices are offline for a long time. Contact the network owner or provider.","internet wifi network offline router connection"),
G("boot","Operating System Fails to Boot","Operating Systems","Advanced","The computer started but never reached the desktop. Some fixes risk your data, so be careful.",
"Error message at startup|Restart loop|Black screen after logo","Interrupted update|Corrupted system files|Storage problem|Wrong boot order","Phone to photograph errors",
"Write down the exact message.|Remove USB drives and discs.|Restart and see if recovery options appear.|Try Startup Repair if available and approved by your teacher.|Try Safe Mode if offered.|Do not reinstall or reset until your teacher confirms files are backed up.",
"Resetting or reinstalling can erase data. Get approval first.","The computer reaches the sign-in screen and desktop.","Stop if recovery fails or you see storage errors. Advanced repair needs supervision.","boot startup windows loop recovery"),
G("disk","Storage Drive or Disk-Space Problems","Maintenance","Beginner","Low space or drive errors cause slowness and failed saves.",
"Low disk space warning|Cannot save files|Clicking noises","Large files|Temporary files|Full recycle bin|Failing drive (possible)","None required",
"Open storage settings and see what uses space.|Empty the Recycle Bin.|Delete your own unneeded downloads.|Uninstall programs you do not use if allowed.|Move files to an approved backup.",
"Never delete system or unknown files.","Free space increases and saving works.","Stop if you hear clicking or see disk errors. Back up and ask a technician.","disk storage space drive full hard drive ssd"),
G("malware","Malware Warning Signs","Software","Intermediate","Malware is software meant to harm or spy. Signs can also have other causes.",
"Unwanted pop-ups|Browser settings changed|Unknown programs","Unsafe downloads|Phishing links|Outdated software","Approved antivirus",
"Disconnect from the internet if you suspect infection.|Do not click pop-ups or call numbers shown.|Run your approved antivirus scan.|Uninstall recently added programs you do not recognize.|Update the system and browser.|Change passwords only from a clean device.",
"Do not disable antivirus or run unknown commands.","Pop-ups stop and scan results are clean.","Stop and tell your teacher if scans find threats or accounts were affected.","virus malware popup spyware ransomware phishing"),
G("printer","Printer Connection Problems","Networking","Beginner","Printer problems often come from connection, queue or paper issues.",
"Printer offline|Job stuck|Printer not found","Cable or Wi-Fi issue|Stuck print queue|Wrong default printer|Paper or ink error","Printer manual",
"Check the printer is on with no error lights.|Check USB or Wi-Fi connection.|Confirm the right printer is selected.|Cancel stuck jobs from the queue.|Restart the printer and computer.",
"Do not pull jammed paper hard. Follow the manual.","A test page prints.","Stop if the printer shows hardware errors.","printer print offline queue paper"),
G("freeze","Computer Freezes or Stops Responding","Operating Systems","Beginner","The screen stopped reacting to the mouse and keyboard. It may be one stuck program or the whole system.",
"Cursor does not move|Clock or animations stop|Only one window is stuck","Program stuck|Too little free memory|Overheating|Failing drive (possible)","Notebook to record what you were doing",
"Wait one to two minutes. Heavy work can look like a freeze.|Try Ctrl+Shift+Esc to open Task Manager and end only the stuck program.|If nothing responds, hold the power button until it turns off, then restart.|After restart, note what you were running and check for updates.|Close extra programs and check free storage and heat.",
"Unsaved work is lost when you force a shutdown. Do this only when nothing else works.","The computer runs your normal tasks for a full session without freezing.","Stop if it freezes repeatedly or soon after starting. Tell your teacher.","freeze hang stuck not responding frozen"),
G("appcrash","Apps Crash or Will Not Open","Software","Beginner","A program closed by itself, showed an error, or did nothing when opened.",
"Window closes suddenly|Error message appears|Nothing happens on click","Outdated app or system|Corrupted app files|Not enough memory|Conflict with another program","None required",
"Restart the app, then restart the computer.|Check whether the app has an update from its official source.|Close other programs to free memory.|Test whether other apps open, to see if the problem is only this app.|If allowed, use Settings to repair or reinstall the app from its official source.",
"Reinstalling can remove app data. Ask your teacher before doing it.","The app opens and stays open during normal use.","Stop if many apps crash, or the app belongs to school software. Ask your teacher.","app crash program won't open error closes"),
G("winupdate","Windows Update Errors","Operating Systems","Intermediate","Updates failed, got stuck, or kept trying again. Write down the error code first.",
"Update stuck at a percentage|Error code shown|Update keeps failing","Low storage|Internet interruption|Interrupted earlier update|Pending restart","Phone to photograph the error code",
"Write down the exact error code and message.|Check free storage and the internet connection.|Restart the computer and try the update again.|Run the Update troubleshooter in Settings if available.|Wait patiently and keep the charger connected during updates.",
"Do not turn the computer off during an update unless your teacher says it is stuck for a very long time.","Settings shows the computer is up to date.","Stop if the computer will not start after an update. Share the error code with your teacher.","windows update error stuck failed install"),
G("audio","No Sound or Audio Output","Hardware","Beginner","The computer played no sound through speakers or headphones.",
"No sound from speakers|Headphones not detected|Volume bar moves but silent","Muted or low volume|Wrong output device|Loose cable|Audio driver problem","Headphones or other speakers for testing",
"Check the volume and mute, on the computer and on the speakers.|Choose the correct output device in sound settings.|Check cables, the audio jack, or Bluetooth pairing.|Test the speakers or headphones on another device.|Restart the computer and run the audio troubleshooter if available.",
"Turn the volume down before testing headphones.","A test sound plays from the chosen device.","Stop if no device works and Device Manager shows audio warnings. Ask your teacher.","sound audio speaker headphones volume mute"),
G("mic","Microphone Not Detected","Hardware","Beginner","Apps could not hear you, or the microphone was missing from the list.",
"Input meter does not move|Microphone not listed|Others cannot hear you","Muted or privacy setting blocked|Wrong input device|Loose plug|Driver problem","Another microphone or headset",
"Check any mute switch on the headset or laptop.|In Settings, check microphone privacy permission for the app.|Choose the correct input device in sound settings.|Reconnect the plug or try another port.|Test with another microphone to see which part is at fault.",
"Only allow microphone access to apps you trust.","The input meter moves when you speak.","Stop if no microphone is listed at all. Ask your teacher.","microphone mic input voice record headset"),
G("webcam","Webcam Not Working","Hardware","Beginner","The camera showed a black image, an error, or was missing from the app.",
"Black or no image|App says no camera|Camera light stays off","Camera blocked in privacy settings|Another app using it|Physical cover or switch|Driver problem","None required",
"Remove any physical cover and check for a camera switch.|In Settings, check camera permission for the app.|Close other apps that may use the camera.|For USB cameras, try another port.|Restart the computer and test again.",
"Only allow camera access to apps you trust.","The camera preview shows a clear image.","Stop if the camera is missing in Device Manager. Ask your teacher.","webcam camera video black image"),
G("battery","Laptop Battery Not Charging","Hardware","Intermediate","The battery level did not rise while plugged in, or showed plugged in, not charging.",
"Not charging message|Charger light off|Battery drains while plugged in","Loose charger|Wrong or damaged charger|Dirty or damaged port|Battery wear (possible)","Known-working charger of the same model",
"Check both ends of the charger and the wall outlet.|Look at the cable for cuts or bends.|Try a matching charger from your teacher.|Restart the laptop and check battery status in Settings.|Let it cool if it feels hot.",
"Never use a damaged or swollen battery or charger. Do not open the laptop.","The battery percentage rises while plugged in.","Stop at once if the battery looks swollen or smells. Tell your teacher.","battery charging laptop charger plugged in"),
G("touchpad","Laptop Touchpad Not Working","Hardware","Beginner","The cursor did not move or the touchpad buttons did not respond.",
"Cursor frozen|Gestures do nothing|Touchpad light is on","Touchpad turned off by a key or setting|Dirty surface|Driver issue","External mouse",
"Look for a touchpad key (often a function key) and press it.|Check touchpad settings in Settings.|Clean the surface gently with a dry cloth.|Connect an external mouse to continue working.|Restart the laptop.",
"Do not press hard on the touchpad.","The cursor moves and clicks work.","Stop if the touchpad is physically damaged or swollen. Tell your teacher.","touchpad trackpad cursor laptop mouse"),
G("usb","USB Device Not Recognized","Hardware","Beginner","A flash drive or device was plugged in but did not appear.",
"No sound or pop-up when plugged in|Device not listed|Unrecognized message","Faulty port or cable|Device issue|Driver problem|Drive needs a letter","Another USB port and computer",
"Unplug and plug the device into another port.|Try a different cable if it has one.|Test the device on another computer.|Open Device Manager and check for warnings.|Restart the computer.",
"Do not format a drive if asked unless you have backed up its files.","The device appears and its files can be opened.","Stop if the device is not recognized anywhere. Data may be at risk, so ask your teacher.","usb flash drive not recognized port device"),
G("bluetooth","Bluetooth Connection Problems","Networking","Beginner","A Bluetooth device would not pair or kept dropping.",
"Device not found|Pairs then disconnects|Audio stutters","Bluetooth off|Low battery|Too far away|Old pairing|Driver problem","The Bluetooth device and its manual",
"Turn Bluetooth on and charge the device.|Put the device in pairing mode following its manual.|Remove the old pairing and pair again.|Move closer and away from other wireless devices.|Restart both devices.",
"Pair only with devices you recognize.","The device connects and stays connected.","Stop if Bluetooth is missing from Settings. Ask your teacher.","bluetooth pair wireless headphones speaker"),
G("ethernet","Ethernet (Wired) Connection Problems","Networking","Beginner","The cable was plugged in but there was no network.",
"No link light|Cable unplugged icon|Limited connection","Loose or damaged cable|Bad port|Router or switch problem","Known-good Ethernet cable",
"Reseat the cable at both ends until it clicks.|Look at the link lights near the port.|Try another cable and another port on the router or switch.|Test another device on the same cable.|Restart the computer.",
"Do not bend or pull cables hard.","The link light turns on and websites load.","Stop if no cable works. Ask your network owner or teacher.","ethernet cable lan wired network port"),
G("wifiweak","Weak Wi-Fi Signal or Frequent Disconnects","Networking","Intermediate","Wi-Fi connected but was slow or dropped often.",
"Few signal bars|Drops every few minutes|Fast near the router only","Distance or walls|Interference|Crowded network|Outdated adapter driver","Phone to compare",
"Move closer to the router and see if it improves.|Check whether other devices also drop.|Forget the network and reconnect.|Restart the router only if you own it.|Check for official driver updates.",
"Do not change router settings you do not manage.","The signal stays steady for a full session.","Stop if all devices drop. Contact the network owner.","wifi weak signal disconnect slow wireless"),
G("dns","Website or DNS Connection Errors","Networking","Intermediate","Some websites did not open though the connection seemed fine.",
"Site cannot be reached|Other apps work|Only one site fails","DNS problem|Browser cache|Website outage|Blocked by network rules","Phone with mobile data",
"Check whether the site opens on another device.|Try another website.|Restart the browser and computer.|Clear the browser cache if your teacher agrees.|If you own the router, restart it.",
"Do not change DNS settings on school equipment.","The site opens normally.","Stop if many sites fail. Contact the network owner.","dns website cannot be reached browser error"),
G("share","Shared Folders and Permission Problems","Networking","Advanced","A shared folder could not be opened or edited. Permissions decide who can read or change files.",
"Access denied|Folder not found|Can read but not edit","Wrong permissions|Computer not on same network|Wrong name or path|Sharing turned off","Folder owner or teacher",
"Confirm you are on the same network.|Check the folder name or path with the owner.|Ask the owner to check your permission level.|Sign in with the account you were given.|Try again after a restart.",
"Never bypass permissions or use accounts that are not yours.","You can open the folder at the agreed permission level.","Stop and ask the teacher or administrator if access is denied. Do not look for workarounds.","shared folder permission access denied network file sharing"),
G("driver","Driver Installation Problems","Operating Systems","Intermediate","A driver failed to install or a device stayed unrecognized.",
"Installer error|Yellow warning in Device Manager|Device works badly","Wrong driver|Corrupt download|Needs a restart|Old system","Maker's website, phone for notes",
"Note the device name and exact model.|Download only from the official maker's site.|Restart before installing.|Install and restart again.|If it fails, use Roll Back Driver or System Restore with approval.",
"Never install drivers from unknown sites.","Device Manager shows no warning and the device works.","Stop if installation keeps failing. Ask your teacher.","driver install device manager yellow warning"),
G("display","Display Resolution or External Monitor Problems","Hardware","Beginner","The picture looked stretched or blurry, or the second screen was not found.",
"Blurry text|No second display|Wrong size","Wrong resolution|Loose cable|Wrong input|Display mode setting","Known-good cable",
"Check the cable and monitor input.|Press the Windows key and P to choose a display mode.|Open display settings and set the recommended resolution.|Try detecting displays in settings.|Update the graphics driver from the official source.",
"Turn off devices before changing cables.","The picture is sharp and the second monitor is found.","Stop if the screen flickers or cracks. Ask a technician.","display resolution monitor second screen projector hdmi"),
G("pin","Forgotten Windows PIN: Official Recovery","Operating Systems","Beginner","You could not sign in because you forgot your PIN. Use only official recovery.",
"PIN rejected|Sign-in screen asks to retry","Mistyped PIN|Changed PIN|Account issue","Phone for account recovery",
"Check Caps Lock and the keyboard layout.|Choose I forgot my PIN on the sign-in screen.|Follow the prompts using your own account recovery method.|Ask the school administrator if it is a school account.|Do not try to bypass the sign-in.",
"Never attempt to bypass passwords or sign in to accounts that are not yours.","You sign in with a new PIN.","Stop and ask your teacher or administrator if recovery does not work.","pin password sign in forgot windows login"),
G("backup","File Backup and Restore Problems","Maintenance","Intermediate","Backups failed, or restoring files did not work.",
"Backup error|Files missing after restore|Drive not found","Backup drive full|Drive disconnected|Wrong location|Permissions","External drive or approved storage",
"Check the backup drive is connected and has free space.|Confirm the backup location.|Run the backup again and read the message.|Test restoring one small file first.|Keep a second copy of important files.",
"Do not overwrite files before checking your backup works.","A test file restores correctly.","Stop if the backup drive is not recognized. Ask your teacher.","backup restore files copy recovery"),
G("beeps","Computer Produces Beeping Sounds at Startup","Hardware","Intermediate","The computer beeped at startup and did not finish starting. Beep patterns differ by maker, so the manual is the best guide.",
"Repeated beeps|No picture|Computer will not finish starting","Loose RAM or card|Faulty RAM|Keyboard or device fault|Maker-specific error (possible)","Device manual",
"Count the beeps and note which are long and which are short.|Look up the pattern in the manual or the maker's support page.|Unplug extra USB devices and restart.|If your teacher approves, shut down and unplug, then check that the RAM is seated.|Restart and listen again.",
"Unplug the computer and wait before touching any internal part. Never open the power supply.","The computer starts normally with no beeps.","Stop if the beeps continue after the simple checks. Tell your teacher the beep pattern.","beep beeping startup post sound"),
G("ram_detect","RAM Is Not Detected Properly","Hardware","Intermediate","The computer reported less memory than was installed, or did not start after RAM was added.",
"Less RAM shown than installed|Beeps|Random crashes","Loose module|Incompatible or faulty RAM|Slot problem","Anti-static wrist strap, if available",
"Check how much memory the system reports in Settings, System, About.|Shut down, unplug, and wait before touching any part. Ask your teacher to supervise.|Reseat each RAM module until both clips click.|Test one module at a time in the same slot.|Restart and check the reported memory again.",
"Ground yourself, unplug first, and hold RAM by the edges. Ask a teacher to supervise internal work.","The system shows the full installed memory.","Stop if the memory is still wrong after testing each module. A module or slot may be faulty.","ram memory not detected missing"),
G("drive_detect","Hard Drive or SSD Is Not Detected","Hardware","Intermediate","The BIOS or Windows did not show the hard drive or SSD.",
"No operating system found|Drive missing in BIOS|Drive missing in File Explorer","Loose data or power cable|Wrong BIOS setting|Failing drive (possible)","Spare cable, if allowed",
"Back up important files first if any part of the drive still works.|Restart and open the BIOS setup using the key shown at startup.|Check whether the drive is listed there.|With teacher supervision, power off, unplug, and check the drive cables.|Test the drive in another computer if allowed.",
"A failing drive can lose data. Stop heavy use and ask for help early. Unplug before checking cables.","The drive appears in the BIOS and in File Explorer.","Stop if the drive is not listed anywhere. Data may be at risk, so ask your teacher.","ssd hard drive not detected bios missing disk"),
G("flicker","Monitor Screen Flickers","Hardware","Beginner","The screen flickered or flashed while the computer was running.",
"Flashing picture|Lines or waves|Flicker only in some apps","Loose cable|Wrong refresh rate|Graphics driver problem|Failing monitor or cable (possible)","Spare video cable",
"Check whether the flicker also happens in the BIOS or startup screen.|Reseat the video cable at both ends.|Try another cable or another monitor.|Open display settings and choose the recommended refresh rate.|Update the graphics driver from the official maker.",
"Turn devices off before changing cables.","The picture stays steady for several minutes.","Stop if the flicker continues with a different cable and monitor. Ask a technician.","flicker flashing screen monitor refresh rate"),
G("fans","Computer Fans Make Unusual Noise","Hardware","Beginner","The computer fans were unusually loud, rattled, or squealed.",
"Loud fan|Rattling or grinding|Fan speed rises and falls","Dust|Heavy program use|Loose object or screw|Failing fan (possible)","Flashlight",
"Close heavy programs and listen for changes.|Move the computer to a hard, flat surface with clear vents.|Power off and unplug, then look at the vents with a flashlight for dust.|Gently brush dust from the vent openings.|Restart and listen again.",
"Do not put objects into a fan. Never open the power supply. Unplug before cleaning.","The fans are quiet under normal use.","Stop if you hear grinding or smell burning. Power off and ask your teacher.","fan noise loud grinding rattle"),
G("stuckload","Windows Stuck on the Loading Screen","Operating Systems","Intermediate","Windows stayed on the logo or the spinning dots and did not reach the sign-in screen.",
"Spinning dots for a long time|Restart loop|Black screen after logo","Interrupted update|Corrupted system files|Faulty drive|New hardware conflict","Windows recovery options",
"Wait at least 15 minutes. Updates can take a long time.|Disconnect USB devices that are not needed.|Restart the computer once.|Open the Windows recovery options when shown and choose Startup Repair.|If Startup Repair fails, ask your teacher before using Reset or Restore.",
"Resetting Windows can erase files. Back up first if you can, and ask your teacher before resetting.","Windows reaches the sign-in screen and the desktop.","Stop if recovery tools fail. Ask your teacher or a technician.","windows loading screen stuck spinning logo boot"),
G("startmenu","Windows Start Menu Is Not Responding","Operating Systems","Beginner","The Start menu did not open or did not respond to clicks.",
"Start button does nothing|Menu opens then closes|Search box fails","Temporary Windows glitch|Pending updates|Corrupted user profile (possible)","None required",
"Press the Windows key on the keyboard to see if the menu opens.|Open Task Manager with Ctrl+Shift+Esc, find Windows Explorer, and choose Restart.|Restart the computer.|Install pending Windows updates.|Sign out and sign in again.",
"Do not run commands from the internet. Ask your teacher before using system repair tools.","The Start menu opens and apps launch from it.","Stop if the problem returns after a restart. Ask your teacher.","start menu not responding windows button"),
G("install","Software Installation Failed","Software","Beginner","An installer showed an error or stopped before the program was installed.",
"Error message|Installer closes|Program missing after install","Not enough storage|Missing permission|Damaged download|Incompatible version","Approved installer",
"Read the error message and write it down.|Check free storage.|Confirm the program supports your version of Windows.|Download the installer again from the official site.|Ask your teacher for administrator permission if requested.",
"Install only software your teacher approves, from official sources. Do not disable security software.","The program opens after installation.","Stop if you are asked for an administrator password you were not given. Ask your teacher.","install installer setup failed error software"),
G("browserslow","Web Browser Runs Slowly","Software","Beginner","The web browser loaded pages slowly or lagged while scrolling.",
"Slow page loading|Browser freezes|Many tabs open","Too many tabs|Heavy extensions|Full cache|Slow internet","None required",
"Test another site, and another browser if you have one.|Close tabs you do not need.|Disable extensions you do not recognize.|Update the browser from its official menu.|Clear the browser cache if your teacher agrees.",
"Clearing browsing data may remove saved sign-ins.","Pages load at a normal speed.","Stop if all programs and websites are slow. Use the network guides or ask your teacher.","browser slow chrome edge firefox tabs"),
G("redirect","Browser Redirects to Unknown Websites","Software","Intermediate","The browser sent the user to unknown websites or showed unwanted pop-ups.",
"Unexpected sites open|Changed home page|Pop-ups","Unwanted extension|Malicious link|Changed browser settings","Approved antivirus",
"Close the unknown pages. Do not enter any information.|Check the browser extensions and remove ones you do not recognize.|Check the home page and search engine settings.|Run your approved antivirus scan.|Update the browser and system.",
"Do not click pop-ups, enter passwords, or call numbers shown on them.","The browser opens only the sites you choose.","Stop if the redirects continue. Tell your teacher and change passwords from a clean device.","redirect browser popup unwanted sites malware"),
G("highcpu","Computer Uses Too Much CPU","Software","Intermediate","The CPU stayed at a high percentage, and the computer ran slowly or got hot.",
"Fan always loud|Slow response|High CPU in Task Manager","Heavy program|Background update|Malware (possible)|Too many startup programs","Task Manager",
"Open Task Manager with Ctrl+Shift+Esc and sort by CPU.|Note which program uses the most CPU.|Close that program normally if you do not need it.|Wait for updates to finish, then restart.|Run your approved antivirus scan if the program is unfamiliar.",
"Do not end programs you do not recognize without asking your teacher.","CPU use drops to a normal level when idle.","Stop if an unknown program keeps returning. Ask your teacher.","cpu high usage task manager slow hot"),
G("highmem","Computer Uses Too Much Memory","Software","Intermediate","Memory use stayed high, and programs slowed down or closed.",
"Out of memory messages|Slow switching between apps|High memory in Task Manager","Too many programs|Memory leak in one app|Not enough RAM","Task Manager",
"Open Task Manager and check the Memory column.|Save your work and close programs you do not need.|Close extra browser tabs.|Restart the computer.|If it happens often, tell your teacher that more RAM may be needed.",
"Save your work before closing programs.","Memory use drops and apps respond normally.","Stop if memory is high with few programs open. Ask your teacher.","memory ram high usage out of memory slow"),
G("sleep","Laptop Does Not Wake From Sleep","Hardware","Beginner","The laptop stayed black or did not respond after it went to sleep.",
"Screen stays black|Lights on but no picture|Keys do nothing","Sleep or power setting|Low battery|Driver problem|Frozen system","Charger",
"Connect the charger and wait one minute.|Press a key and move the touchpad or mouse.|Press the power button once, briefly.|If nothing happens, hold the power button until the laptop turns off, then start it again.|After it starts, check the power and sleep settings and install updates.",
"Forcing a shutdown can lose unsaved work. Do it only after the other steps fail.","The laptop wakes normally from sleep.","Stop if it fails to wake repeatedly. Ask your teacher.","laptop sleep wake black screen"),
G("extdrive","External Hard Drive Is Not Recognized","Hardware","Beginner","An external hard drive was plugged in but did not appear in File Explorer.",
"No drive letter|Drive light off|Drive keeps disconnecting","Loose or damaged cable|Weak USB power|Drive needs a letter|Failing drive (possible)","Spare USB cable",
"Check that the drive light is on and the cable is firm at both ends.|Try another USB port directly on the computer, not a hub.|Try another cable.|Open Disk Management and check whether the drive is listed. Do not format it.|Test the drive on another computer if allowed.",
"Never format a drive you want to keep. Formatting erases its files.","The drive appears and its files open.","Stop if the drive is listed as RAW or makes clicking sounds. Data may be at risk, so ask your teacher.","external hard drive not recognized usb disk"),
G("taskbar","Windows Taskbar Is Not Working","Operating Systems","Beginner","The taskbar did not respond, disappeared, or showed no icons.",
"Taskbar frozen|Icons missing|Clock does not update","Windows Explorer glitch|Pending updates|Profile problem (possible)","None required",
"Press Ctrl+Shift+Esc to open Task Manager.|Find Windows Explorer in the list and choose Restart.|Restart the computer.|Install pending Windows updates.|Sign out and sign in again.",
"Do not run commands from the internet. Ask your teacher before using repair tools.","The taskbar responds and shows its icons.","Stop if it fails again after a restart. Ask your teacher.","taskbar frozen not working windows icons"),
G("search","Windows Search Is Not Working","Operating Systems","Beginner","The Windows search box returned no results or did not open.",
"No results|Search box blank|Search is very slow","Search index problem|Pending updates|Temporary glitch","None required",
"Restart the computer.|Open Task Manager and restart Windows Explorer.|Check for Windows updates.|Open Settings, Troubleshoot, and run the Search and Indexing troubleshooter if it is listed.|Try searching again after the troubleshooter finishes.",
"Rebuilding the search index can take a long time. Ask your teacher before doing it.","Searching for a known file shows results.","Stop if search still fails after the troubleshooter. Ask your teacher.","windows search not working results index"),
G("tempprofile","Windows Shows a Temporary User Profile","Operating Systems","Intermediate","Windows signed in with a temporary profile, and the usual desktop and files were missing.",
"Message about a temporary profile|Desktop looks new|Files missing","Profile loading error|Interrupted sign-out|Disk problem (possible)","Administrator contact",
"Do not save any new files while using the temporary profile.|Sign out, restart the computer, and sign in again.|Check whether your files are back.|Tell your teacher or administrator if the message returns.|Let the administrator repair the profile.",
"Files saved in a temporary profile are usually deleted at sign-out. Copy needed files to approved storage first.","You sign in to your normal profile with your files.","Stop and ask the administrator. Do not edit system settings yourself.","temporary profile user profile sign in files missing"),
G("datetime","Computer Date and Time Are Incorrect","Operating Systems","Beginner","The computer showed the wrong date or time, or reset it after shutdown.",
"Wrong clock|Time resets after restart|Certificate or website errors","Wrong time zone|Automatic time turned off|Weak clock battery (possible)","None required",
"Open Settings, then Time and language, then Date and time.|Turn on Set time automatically and Set time zone automatically.|Choose Sync now.|Select the correct time zone.|Restart and check the clock again.",
"Do not open the computer to look for the clock battery. Ask your teacher.","The correct date and time stay after a restart.","Stop if the time resets after every shutdown. Ask your teacher.","date time wrong clock time zone"),
G("bootdevice","Windows Cannot Find the Boot Device","Operating Systems","Advanced","The computer showed a message that no boot device was found.",
"No boot device message|Black screen with text|Restart loop","Wrong boot order|Drive not detected|Loose cable|Damaged boot files (possible)","Device manual",
"Remove USB drives, discs, and other external devices.|Restart and open the BIOS setup using the key shown at startup.|Check whether the main drive is listed and set first in the boot order.|If the drive is missing, stop and ask your teacher to check the cables.|Try Startup Repair from recovery options if it is available.",
"Do not reset or reinstall Windows without a backup and your teacher's approval.","Windows starts from the main drive.","Stop if the drive is not listed in the BIOS. Ask your teacher or technician.","boot device not found boot order bios no bootable"),
G("opendl","Downloaded Files Cannot Be Opened","Software","Beginner","A downloaded file did not open or showed an error.",
"Error when opening|Wrong program opens|File size looks wrong","Incomplete download|Missing program|Wrong file type|Unsafe file (possible)","None required",
"Check the file name ending, such as .pdf or .zip.|Check that the download finished and the size looks right.|Open it with a program made for that file type.|Download it again from the original official source.|Run your approved antivirus scan if the file is unexpected.",
"Never open .exe or unknown files from untrusted sources.","The file opens with the correct program.","Stop if the file asks you to enable macros or run it as administrator. Ask your teacher.","downloaded file cannot open zip pdf error"),
G("corrupt","Files Become Corrupted or Cannot Be Accessed","Maintenance","Intermediate","A file would not open, showed an error, or seemed damaged.",
"Error opening a file|Unreadable content|File shows size zero","Interrupted save|Failing drive (possible)|Virus|Unsafe removal of a drive","Backup copy",
"Stop saving new files to that drive.|Copy the file to another approved location and try opening the copy.|Try opening it with another program.|Restore a copy from your backup.|Ask your teacher about a disk check.",
"Writing to a failing drive can make damage worse. Stop using it for important files.","The file opens normally.","Stop if many files are affected. Ask your teacher before attempting recovery.","file corrupted cannot access damaged error"),
G("ipconflict","IP Address Conflict or Incorrect IP Settings","Networking","Advanced","The computer showed an IP address conflict or got an unusual address and could not connect.",
"IP conflict message|Limited connection|Cannot reach other devices","Two devices with one address|Wrong static address|DHCP problem","Network administrator contact",
"Disconnect from the network and connect again.|Restart the computer.|Open the network adapter properties and check that Obtain an IP address automatically is selected, unless your teacher gave a fixed address.|Ask the network owner to restart the router or DHCP service.|Test the connection again.",
"Do not change addresses on school or shared networks without permission.","The computer connects and websites open.","Stop if a fixed address is required. Ask the network administrator.","ip address conflict dhcp ip settings"),
G("lan","Computer Cannot Access the Local Network","Networking","Intermediate","The computer reached the internet but could not see other devices on the local network.",
"Other computers not visible|Shared items missing|Only the internet works","Different network|Network profile setting|Cable or switch problem","Network details from your teacher",
"Confirm you are on the same network as the other devices.|Check the cable or Wi-Fi name with your teacher.|Restart the computer.|Check that other devices are on and connected.|Ask your teacher whether a firewall or network rule blocks access.",
"Do not turn off security software to test.","The computer can see and reach local devices.","Stop if the network belongs to the school. Ask your teacher or network administrator.","local network cannot access lan other computers"),
G("netdisc","Network Discovery Is Not Working","Networking","Intermediate","Other computers and devices did not appear in the Network list.",
"Network list empty|Prompt about discovery|Devices missing","Network set as Public|Discovery turned off|Different network","Teacher permission",
"Confirm all devices are on the same network.|Open network settings and check whether the connection is set to Private, if your teacher agrees.|Open Advanced sharing settings and check Network discovery.|Restart the computer.|Refresh the Network window.",
"Turn on discovery only on trusted networks, and only with permission.","Other devices appear in the Network list.","Stop if the settings are locked. Ask your teacher.","network discovery sharing private public devices"),
G("netprinter","Shared Network Printer Is Not Accessible","Networking","Intermediate","A shared network printer was listed but would not print or could not be reached.",
"Printer shows offline|Access denied|Printer not found","Printer off|Wrong printer name|Permission problem|Network change","Printer name from your teacher",
"Check the printer is on, has paper, and shows no error.|Confirm the computer is on the correct network.|Remove the printer and add it again using the name your teacher gave.|Print a test page.|Ask your teacher to check permissions.",
"Do not bypass printer permissions or use another person's account.","The test page prints.","Stop if access is denied. Ask your teacher or administrator.","network printer shared offline access denied"),
G("recycle","Recycle Bin Cannot Be Emptied","Maintenance","Beginner","The Recycle Bin would not empty or showed an error.",
"Error when emptying|Files remain|Bin looks full","File still in use|Permission problem|Temporary glitch","None required",
"Close programs that may use the files.|Restart the computer.|Try emptying the Recycle Bin again.|Delete a few files at a time to find the one causing the error.|Ask your teacher if permission is needed.",
"Emptying the Recycle Bin removes files permanently. Check them first.","The Recycle Bin is empty.","Stop if one file cannot be removed. Ask your teacher.","recycle bin cannot empty delete error"),
G("tempfiles","Temporary Files Cannot Be Removed","Maintenance","Beginner","The cleanup tool could not remove all temporary files.",
"Some files remain|Cleanup error|Storage still full","Files in use|Needs restart|Permission problem","None required",
"Open Settings, System, Storage, and choose Temporary files.|Select only items you understand, such as temporary files, and keep Downloads unchecked unless you have checked it.|Close open programs and restart.|Run the cleanup again.|Check the free space.",
"Do not delete files you do not recognize. Downloads and Documents may hold your work.","Free space increases.","Stop if space stays low. Ask your teacher about storage use.","temporary files cleanup storage cannot delete"),
G("phishing","Suspicious Email or Phishing Message Received","Maintenance","Beginner","An email or message asked the user to click a link or share personal information.",
"Urgent or threatening message|Unknown sender|Link or attachment request","Phishing attempt|Spoofed sender|Compromised account (possible)","None required",
"Do not click links or open attachments.|Check the sender address and any spelling errors.|Do not reply or share passwords or personal information.|Report the message to your teacher or email provider.|Delete it after reporting.",
"If you already clicked or entered a password, tell your teacher and change the password from a clean device.","No links were opened and the message was reported.","Stop and tell your teacher at once if you shared any information.","phishing suspicious email spam scam link"),
G("icons","Desktop Icons Are Missing","Operating Systems","Beginner","The desktop icons disappeared or were not shown.",
"Empty desktop|Only wallpaper|Icons missing after update","Show desktop icons turned off|Explorer glitch|Different profile","None required",
"Right-click an empty part of the desktop.|Choose View and make sure Show desktop icons is ticked.|Restart Windows Explorer from Task Manager.|Check the Desktop folder in File Explorer.|Sign out and sign in again.",
"Do not delete files to fix this. Your files are likely still saved.","The desktop icons are shown.","Stop if the files are missing from the Desktop folder. Ask your teacher.","desktop icons missing disappeared windows"),
G("explorer","File Explorer Is Not Responding","Operating Systems","Beginner","File Explorer froze or closed when folders were opened.",
"Window frozen|Closes by itself|Slow folder opening","Unavailable network drive|Large folder|Windows glitch","None required",
"Wait a minute for large folders.|Open Task Manager and restart Windows Explorer.|Disconnect network drives or external drives that are not needed.|Restart the computer.|Install pending Windows updates.",
"Unsaved work in other programs can be lost if you force a restart.","File Explorer opens folders normally.","Stop if it keeps freezing. Ask your teacher.","file explorer not responding frozen folders crashes"),
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
  screen: ["What is the problem?", [["Battery not charging",["battery","power"]],["Display or second monitor",["display","nodisplay"]],["Device warning or driver error",["driver"]]]],
  hw: ["Which sign?", [["Beeps at startup or missing memory",["beeps","ram_detect"]],["Drive not detected",["drive_detect"]],["Screen flicker or loud fans",["flicker","fans"]]]],
  sw: ["Which issue?", [["Windows stuck or Start menu fails",["stuckload","startmenu"]],["Install failed or browser problem",["install","browserslow","redirect"]],["High CPU or memory use",["highcpu","highmem"]]]],
  win2: ["Which problem?", [["Taskbar, search or desktop icons",["taskbar","search","icons"]],["File Explorer or temporary profile",["explorer","tempprofile"]],["Wrong date or time",["datetime"]],["No boot device found",["bootdevice"]]]],
  net2: ["Which problem?", [["IP conflict or cannot reach the local network",["ipconflict","lan"]],["Network discovery or shared printer",["netdisc","netprinter"]],["Suspicious email or message",["phishing"]]]],
  file2: ["Which problem?", [["Downloaded or damaged file",["opendl","corrupt"]],["Recycle Bin or temporary files",["recycle","tempfiles"]],["Laptop sleep or external drive",["sleep","extdrive"]]]]
};
const PROBLEMS = [["power","Computer does not power on"],["nodisplay","Computer powers on but there is no display"],["slow","Computer is unusually slow"],["overheat","Computer overheats"],["bsod","Computer shows a blue screen"],["internet","Computer cannot connect to the internet"],["input","Keyboard or mouse does not work"],["boot","Computer cannot boot into the operating system"],["freeze","Computer freezes or an app crashes"],["audio","Sound, microphone or webcam problem"],["wifi","Wi-Fi, wired or website problem"],["usb","USB, Bluetooth or touchpad problem"],["files","Sharing, backup, update or sign-in problem"],["screen","Battery, display or driver problem"],["hw","Beeps, drive, flicker or fan noise"],["sw","Windows, install, browser or CPU/memory problem"],["win2","Taskbar, search, icons, Explorer, profile or clock problem"],["net2","IP, local network, discovery, shared printer or phishing"],["file2","Downloads, corrupted files, Recycle Bin, temp files, sleep or external drive"],["other","Other or unsure"]];

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
function routeCore() {
  const [, view = "", arg = ""] = (location.hash || "#/").slice(1).split("/");
  const name = ["library", "guide", "quiz", "about", "assistant"].includes(view) ? view : "home";
  document.title = "HEXADORA – Computer Troubleshooting for TVL-ICT";
  $$("[data-view]").forEach(s => s.hidden = s.dataset.view !== name);
  $$("#nav a").forEach(a => a.dataset.nav === (name === "guide" ? "library" : name) ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false");
  if (name === "library") { $("#cat").value = CATS.includes(dec(arg)) ? dec(arg) : "all"; favMode = arg === "fav"; renderList(); }
  if (name === "guide") renderGuide(arg);
  if (name === "quiz") quizReset();
  if (name === "home") renderHome();
  if (name === "assistant" && !$("#chatLog").children.length) chatReset();
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
/* ===== ONE-STEP-AT-A-TIME TROUBLESHOOTING ===== */
function stepReduce(s, a, n) {
  s = { ...s, done: [...s.done] };
  switch (a) {
    case "did": if (!s.done.includes(s.i)) s.done.push(s.i); s.stage = "result"; break;
    case "cant": s.stage = "cant"; break;
    case "unsure": s.stage = "unsure"; break;
    case "again": s.stage = "do"; break;
    case "fixed": s.solved = true; break;
    case "help": s.end = true; s.help = true; break;
    case "notfixed": case "skip": if (s.i >= n - 1) { s.end = true; s.help = false; } else { s.i++; s.stage = "do"; } break;
    case "prev": if (s.solved) { s.solved = false; s.stage = "result"; } else if (s.end) { s.end = false; s.help = false; s.stage = "do"; } else if (s.i > 0) { s.i--; s.stage = "do"; } break;
    case "restart": return { i: 0, stage: "do", done: [], solved: false, end: false, help: false };
  }
  return s;
}
function stepper(g, id) {
  const box = $("#stepper"), n = g.steps.length, B = (a, t, c = "") => `<button type="button" class="btn ${c}" data-a="${a}">${t}</button>`;
  const old = prog[id]; let s = old && !Array.isArray(old) ? { stage: "do", help: false, ...old } : { i: 0, stage: "do", done: [], solved: false, end: false, help: false };
  s.i = Math.min(Math.max(+s.i || 0, 0), n - 1);
  const draw = focus => {
    prog[id] = { i: s.i, done: s.done, solved: s.solved, end: s.end, help: s.help }; store.set("hx-prog", prog);
    let h = `<progress max="${n}" value="${s.done.length}" aria-label="Steps confirmed"></progress><p class="muted small">${s.done.length} of ${n} steps confirmed. Confirming a step means you did it yourself.</p>`;
    if (s.solved) h += `<div class="stepbox"><h3>Problem solved</h3><p>Good work. Summary: you confirmed ${s.done.length} of ${n} steps. Check one more time: ${g.ver}</p></div><div class="sbtns">${B("prev", "Back to last step", "alt")}${B("restart", "Restart guide", "alt")}</div>`;
    else if (s.end) h += `<div class="stepbox"><h3>${s.help ? "Stop and ask for help" : "All steps finished"}</h3><p>${s.help ? "" : "The problem is still there. "}Summary: you confirmed ${s.done.length} of ${n} steps. ${g.stop}</p></div><div class="sbtns">${B("prev", "Previous step", "alt")}${B("restart", "Restart guide", "alt")}</div>`;
    else {
      h += `<div class="stepbox"><p class="stepno">Step ${s.i + 1} of ${n}</p><p class="steptext">${g.steps[s.i]}</p>`;
      if (s.stage === "do") h += `<p><strong>Have you completed this step?</strong></p><div class="sbtns">${B("did", "I completed this step")}${B("cant", "I couldn't complete this step", "alt")}</div>`;
      else if (s.stage === "result") h += `<p><strong>Is the problem fixed now?</strong></p><div class="sbtns">${B("fixed", "Yes, problem solved")}${B("notfixed", s.i >= n - 1 ? "No, it is still there" : "No, continue troubleshooting", "alt")}${B("unsure", "I am not sure", "alt")}${B("again", "Back to this step", "alt")}</div>`;
      else if (s.stage === "unsure") h += `<p class="note">Compare your computer with the symptoms listed on this page. If you still see any of them, the problem is not solved yet. A teacher can also check with you.</p><div class="sbtns">${B("fixed", "Yes, problem solved")}${B("notfixed", "No, continue troubleshooting", "alt")}${B("help", "Ask a teacher or technician", "alt")}</div>`;
      else h += `<p class="note">That is okay. Some steps need permission or tools. Ask your teacher or a technician about this one. You may skip it, but the problem may remain.</p><div class="sbtns">${B("skip", s.i >= n - 1 ? "Skip and finish" : "Skip to next step")}${B("help", "Stop and get help", "alt")}${B("again", "Try this step again", "alt")}</div>`;
      h += `</div><div class="sbtns">${s.i > 0 ? B("prev", "Previous step", "alt") : ""}${s.stage === "cant" ? "" : B("help", "Ask teacher or technician", "alt")}${B("restart", "Restart guide", "alt")}</div>`;
    }
    box.innerHTML = h; if (focus) { const b = box.querySelector(".stepbox [data-a]"); if (b) b.focus({ preventScroll: true }); }
  };
  box.onclick = e => { const b = e.target.closest("[data-a]"); if (!b) return; s = stepReduce(s, b.dataset.a, n); draw(true); if (b.dataset.a === "restart") toast("Guide restarted"); };
  draw(false);
}
function renderGuide(id) {
  const g = byId(id), box = $("#guide");
  if (!g) { box.innerHTML = `<div class="empty"><p class="bad">Guide not found.</p><a class="btn" href="#/library">Back to library</a></div>`; return; }
  document.title = g.title + " – HEXADORA";
  const done = prog[id] || [], fav = favs.includes(id), li = a => a.map(x => `<li>${x}</li>`).join("");
  box.innerHTML = `<p class="no-print"><a href="#/library">← Back to library</a> · <a href="#/">Home</a></p>
  <span class="tag">${g.cat}</span><h1>${g.title}</h1><p class="lead">${g.ov}</p>
  <p><strong>Difficulty:</strong> ${g.diff}. <strong>Tools:</strong> ${g.tools}.</p>
  <div class="row no-print"><button class="btn alt" id="favBtn" aria-pressed="${fav}">${fav ? "★ Remove from favorites" : "☆ Add to favorites"}</button><button class="btn alt" id="printBtn">Print guide</button></div>
  <div class="warn" role="note"><span class="wi" aria-hidden="true">⚠</span><span><strong>Warning:</strong> ${g.warn}</span></div>
  <div class="gcols"><aside class="gside card"><h2>Symptoms you may observe</h2><ul>${li(g.sy)}</ul>
  <h2>Possible causes</h2><p class="muted">These are possibilities, not confirmed diagnoses.</p><ul>${li(g.ca)}</ul></aside><div class="gmain">
  <h2>Troubleshooting steps</h2><div id="stepper" aria-live="polite"></div><ol class="print-only">${g.steps.map(x => `<li>${x}</li>`).join("")}</ol>
  <h2>How to verify it is fixed</h2><p class="good">${g.ver}</p>
  <h2>When to stop and ask for help</h2><p class="note">${g.stop}</p></div></div>`;
  stepper(g, id);
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

/* ===== TRANSITIONS & SCROLL MEMORY ===== */
let cur = null, linkNav = false; const pos = {};
function route() {
  cur = null; routeCore();
  const sec = $$("[data-view]").find(x => !x.hidden);
  if (sec) { sec.classList.remove("enter"); void sec.offsetWidth; sec.classList.add("enter"); clearTimeout(route.t); route.t = setTimeout(() => sec.classList.remove("enter"), 1100); }
  const h = location.hash || "#/"; scrollTo(0, linkNav ? 0 : (pos[h] || 0)); linkNav = false; cur = h;
}

/* ===== AI ASSISTANT (needs the backend in /worker; see README) ===== */
const AI_ENDPOINT = ""; // paste your deployed Worker URL here (not a secret)
let chat = [], chatBusy = false;
function addMsg(role, text) { const d = document.createElement("div"); d.className = "msg " + role; d.textContent = text; $("#chatLog").appendChild(d); d.scrollIntoView({ block: "nearest" }); }
function chatReset() {
  chat = []; chatBusy = false; $("#chatLog").innerHTML = ""; $("#chatStatus").textContent = "";
  addMsg("bot", AI_ENDPOINT ? "Hi, I am the HEXADORA Assistant. Tell me what your computer is doing. I will ask a few questions first, then suggest safe steps." : "The assistant is not set up yet. The site owner must deploy the backend and set AI_ENDPOINT in script.js (see README). You can still use the guides and the quiz.");
  $("#chatSend").disabled = !AI_ENDPOINT;
}
function chatContext() {
  const words = chat.filter(m => m.role === "user").map(m => m.content).join(" ").toLowerCase().split(/\W+/).filter(w => w.length > 2);
  return GUIDES.map(g => { const hay = [g.title, g.kw, ...g.sy, ...g.ca].join(" ").toLowerCase(); return [g, words.filter(w => hay.includes(w)).length]; })
    .filter(x => x[1] > 0).sort((a, b) => b[1] - a[1]).slice(0, 3)
    .map(([g]) => `GUIDE ${g.title}\nCauses (possible): ${g.ca.join("; ")}\nSteps: ${g.steps.join(" | ")}\nWarning: ${g.warn}\nStop when: ${g.stop}`).join("\n\n");
}
async function chatSend() {
  const box = $("#chatText"), t = box.value.trim(); if (!t || !AI_ENDPOINT || chatBusy) return;
  chat.push({ role: "user", content: t }); addMsg("user", t); box.value = ""; chatBusy = true; $("#chatSend").disabled = true; $("#chatStatus").textContent = "HEXADORA Assistant is thinking…";
  const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 30000);
  try {
    const r = await fetch(AI_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, signal: ctl.signal, body: JSON.stringify({ messages: chat.slice(-10), context: chatContext() }) });
    if (r.status === 429) throw new Error("Too many questions in a short time. Please wait a few minutes and try again.");
    if (!r.ok) throw new Error("The assistant is unavailable right now. You can use the guides or the quiz instead.");
    const d = await r.json(); if (!d.reply) throw new Error("The assistant sent an empty answer. Please try again.");
    chat.push({ role: "assistant", content: d.reply }); addMsg("bot", d.reply);
  } catch (e) { chat.pop(); addMsg("bot", e.name === "AbortError" ? "The assistant took too long to answer. Please try again." : (e.message.startsWith("The") || e.message.startsWith("Too") ? e.message : "Could not reach the assistant. Check your connection and try again.")); }
  finally { clearTimeout(to); chatBusy = false; $("#chatSend").disabled = false; $("#chatStatus").textContent = ""; box.focus(); }
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
  history.scrollRestoration = "manual";
  addEventListener("scroll", () => { if (cur) pos[cur] = scrollY; }, { passive: true });
  document.addEventListener("click", e => { if (e.target.closest('a[href^="#/"]')) linkNav = true; }, true);
  $("#chatSend").onclick = chatSend; $("#chatNew").onclick = chatReset;
  $("#chatText").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); chatSend(); } });
  document.documentElement.classList.add("js");
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 }) : null;
  $$("[data-view=home] h2, .how li, .faq details").forEach(el => { el.classList.add("reveal"); io ? io.observe(el) : el.classList.add("in"); });
  window.addEventListener("hashchange", route);
  route(); initIntro();
});
