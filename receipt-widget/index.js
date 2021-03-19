import axios from "axios";

async function generateToken() {
  const url = "https://api-development.ingrid.com/v1/receipt_widget/token";
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.PRIVATE_KEY}`,
      "x-site-id": process.env.SITE_ID,
    },
    params: {
      site_id: process.env.SITE_ID,
      session_id: process.env.SESSION_ID,
    },
  });
  return data.token;
}

function initWidget(token) {
  window.IngridReceiptWidgetApi.config({
    containerId: "widget",
    token,
    siteId: process.env.SITE_ID,
    sessionId: process.env.SESSION_ID,
    locale: "en-GB",
  });
}

async function setupWidget() {
  const token = await generateToken();
  initWidget(token);
}

window.addEventListener("load", () => {
  setupWidget();
});
