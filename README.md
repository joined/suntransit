# Welcome to SunTransit

An ESP32 project to monitor departures of the Berliner Verkehrsbetriebe (BVG) using Sunton development boards.

<figure markdown>
  ![Sunton 3248S035C board (front), configuration panel (back)](ui.png){ width="600", loading=lazy }
  <figcaption>Sunton 3248S035C board (front), configuration panel (back)</figcaption>
</figure>

## Features

-   Based on Sunton [3248S035C](https://www.openhasp.com/0.7.0/hardware/sunton/esp32-3248s035/) boards (3.5", 480x320px). You can get one [here](https://de.aliexpress.com/item/1005004632953455.html). In the future, support for other boards is planned.
-   WiFi provisioning via the "ESP SoftAP Provisioning" app ([Play Store](https://play.google.com/store/apps/details?id=com.espressif.provsoftap), [Apple Store](https://apps.apple.com/us/app/esp-softap-provisioning/id1474040630)).
-   Web based configuration
-   Selection of station to show departures from (BVG)
-   Selection of products to show departures of 🚌🚇🚉🚆

## Acknowledgments

The public transport data comes from the [https://v6.bvg.transport.rest/](https://v6.bvg.transport.rest/) API, show some love to [@derhuerst](https://github.com/derhuerst).
