# map-ts

Created to demonstrate using TypeScript classes. It uses the [Google Maps API](https://console.developers.google.com/apis/library/maps-backend.googleapis.com?q=maps).

After cloning, cd into project directory and run
`$ npm install`

You can use [parcel-bundler](https://www.npmjs.com/package/parcel-bundler) to bundle and serve the project.

To install:
`$ npm install -g parcel-bundler`

To use:
`$ parcel index.html`

You will need to create your own `index.html` in the project root directory. Insert your api key from Google in the appropriate place.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Maps</title>
  </head>
  <body>
    <div id="map" style="height: 100vh"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=[YOUR-API-KEY]"></script>
    <script src="./src/index.ts"></script>
  </body>
</html>
```
