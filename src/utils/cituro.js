// Cituro booking widget utility
export const openCituroBooking = () => {
  // Check if the Cituro widget is loaded
  if (window.cituroWidget) {
    window.cituroWidget.show();
  } else {
    // Fallback: try to load the widget if it's not available
    console.log('Cituro widget not loaded, attempting to load...');
    const script = document.createElement('script');
    script.id = 'cituro-widget-loader';
    script.src = 'https://app.cituro.com/booking-widget';
    script.setAttribute('data-account-number', '4662203');
    script.defer = true;
    document.head.appendChild(script);
    
    // Wait for the widget to load and then show it
    script.onload = () => {
      if (window.cituroWidget) {
        window.cituroWidget.show();
      }
    };
  }
}; 