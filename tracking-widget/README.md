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

Enter your site id to `static/config.js` file:

```js
window.config = {
  SITE_ID: "your-site-id",
}
```

Run `npm install`

Run `npm start`

Visit `localhost:3000`
