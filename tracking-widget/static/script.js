const loadTrackingWidget = async () => {
  // get resource id from input
  const resourceId = document.getElementById("resource-input").value;

  // get auth token without exposing private key
  const response = await fetch(`/token?resource=${resourceId}`);
  const { token } = await response.json();

  // initializie widget
  const options = {
    elementId: "tracking-widget-container",
    siteId: window.config.SITE_ID,
    locale: "en-US",
    authToken: token,
    ...(window.config.USE_EXTERNAL_ID
      ? { externalId: resourceId }
      : { trackingNumber: resourceId }),
  };
  window.IngridTrackingWidget.config(options);
};

window.addEventListener("load", () => {
  document
    .getElementById("load-widget-button")
    .addEventListener("click", loadTrackingWidget);
});
