# Web Sync - Kiosk Sample Implementation

This project demonstrates how to build kiosk web apps using the [Web Sync](https://justshare.me/web-sync/) iOS or iPadOS app. It provides sample code for sending events from the main device display to an external display, showcasing Web Sync’s dual-display and remote event features.

## What is Web Sync?

Web Sync turns your iPhone or iPad into a dual-display web renderer with full remote control. You can show web pages on both your device and an external display (HDMI, AirPlay, or AV adapter), either mirrored or independently. It’s perfect for digital signage, IoT dashboards, and interactive kiosks, giving you complete control over what’s shown on each screen.

**App Store:**
[Download Web Sync](https://apps.apple.com/us/app/web-sync/id6751154388)

## Key Features

- Display separate web pages on your device and an external screen
- Switch between mirrored and independent display modes
- Control remotely via WebHooks or the Remote Control Portal
- Change URLs, refresh pages, and toggle auto-refresh
- Enable web inspector and debug your web pages and dashboards
- Adjust brightness, sound, and UI visibility
- Send speech messages and capture screenshots remotely
- Enable Kiosk Mode for locked-down interactive displays

## Use Cases

- **Digital Signage:** Show menus, announcements, or live dashboards on external monitors and update them remotely.
- **IoT Dashboards:** Display smart home or system metrics on a dedicated screen with auto-refresh intervals.
- **Interactive Kiosks:** Use your iPad as a control surface and show related content on an external display, for hotels, events, or information desks.

## About This Sample

This sample demonstrates a two-page kiosk setup:

- **device.html:** Shows four large, colored, numbered boxes (red, blue, green, yellow) on your device. Tapping a box sends an event to the external display.
- **display.html:** Receives events and displays the selected color and number full screen, along with event and payload details for debugging/demo purposes.

Both pages are fully responsive and touch-friendly, using only HTML, CSS, and JavaScript (no frameworks).

## How to Use

1. Switch your Web Sync app’s External Display Mode to “Independent.”
2. Set the URL for `device.html` as the Main URL in the Web Sync app.
3. Set the URL for `display.html` as the External Display URL in the Web Sync app.
4. Tap any box on the device screen. The external display will update to show the selected color and name.

For more information on enabling Kiosk Mode and remote events, see the [Web Sync documentation](https://justshare.me/web-sync/documentation#3-enabling-and-using-kiosk-mode).
