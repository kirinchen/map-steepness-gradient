

let jssrc = '<script defer id="gmapjs" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>';
var key = localStorage.getItem('gmap-api-key');


jssrc = jssrc.replace('YOUR_API_KEY', key);



document.write(jssrc);
