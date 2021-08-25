const express = require("express");
const axios = require("axios");

const config = require("./config");

const app = express();
const port = 3000;

const API_URL = "https://api.ingrid.com/v1/tokenauth/token.ensure";

app.use(express.static("static"));

/**
 * /token generates auth token and handles it to frontend without exposing your private key
 */
app.get("/token", async (req, res) => {
  const resourceId = req.query["resource"];

  const response = await axios({
    method: "POST",
    url: API_URL,
    data: {
      resource: resourceId,
      site_id: config.SITE_ID,
    },
    headers: {
      "x-site-id": config.SITE_ID,
      authorization: `Bearer ${config.PRIVATE_KEY_BASE64}`,
      accept: "application/json",
    },
  });

  const { token } = await response.data;

  res.json({
    token,
  });
});

app.listen(port, () => {
  console.log(
    `Tracking Widget Integration Example app listening at http://localhost:${port}`
  );
});
