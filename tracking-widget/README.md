# Tracking widget integration example

## System requirements

* node
* npm

## Instructions

Go to this directory: `cd tracking-widget` 

Enter your site id and base64-encoded private key to `config.js` file:

```js
module.exports = {
  SITE_ID: "your-site-id",
  PRIVATE_KEY_BASE64: "base64-encoded-private-key",
}
```

Enter your site id to `static/config.js` file and decide if you are going to use external id or tracking number:

```js
window.config = {
  SITE_ID: "your-site-id",
  USE_EXTERNAL_ID: false // default behaviour uses tracking number
}
```

Run `npm install`

Run `npm start`

Visit `localhost:3000`
