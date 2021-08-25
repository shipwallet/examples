const loadTrackingWidget = async () => {
  // get resource id from input
  const resourceId = document.getElementById("resource-input").value;

  // get auth token without exposing private key
  const response = await fetch(`/token?resource=${resourceId}`);
  const { token } = await response.json();

 // initializie widget 
  window.IngridTrackingWidget.config({
    elementId: "tracking-widget-container",
    trackingNumber: resourceId,
    siteId: window.config.SITE_ID,
    locale: "en-US",
    authToken: token,
  });
};

window.addEventListener("load", () => {
  document
    .getElementById("load-widget-button")
    .addEventListener("click", loadTrackingWidget);
});
