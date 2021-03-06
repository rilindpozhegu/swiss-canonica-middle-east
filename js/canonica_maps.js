            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(25.1092368, 55.3599392), // Dubai

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                     styles: [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":-30}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#353535"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#656565"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#505050"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#808080"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#454545"}]},{"featureType":"transit","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":100},{"lightness":-40},{"invert_lightness":true},{"gamma":1.5}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);



                //  Dubai Airport terminal 1

                var contentStringthone = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Dubai Airport terminal 1</h1>'+
                    // '<div id="bodyContent">'+
                    // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                    // 'sandstone rock formation in the southern part of the '+
                    // 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                    // 'south west of the nearest large town, Alice Springs; 450&#160;km '+
                    // '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                    // 'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                    // 'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                    // 'Aboriginal people of the area. It has many springs, waterholes, '+
                    // 'rock caves and ancient paintings. Uluru is listed as a World '+
                    // 'Heritage Site.</p>'+
                    // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                    // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                    // '(last visited June 22, 2009).</p>'+
                    '</div>'+
                    '</div>';

                var infowindowone = new google.maps.InfoWindow({
                  content: contentStringthone
                });

                var markero = new google.maps.Marker({
                  position: new google.maps.LatLng(25.2513326, 55.342524,14),
                  map: map,
                  title: 'Click For More Informations'
                });
                markero.addListener('click', function() {
                  infowindowone.open(map, markero);
                });



                // Dubai Airport, Flower center
                var contentStringthtwo = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Dubai Airport, Flower center</h1>'+
                    '</div>'+
                    '</div>';

                var infowindowo = new google.maps.InfoWindow({
                  content: contentStringthtwo
                });

                var markert = new google.maps.Marker({
                  position: new google.maps.LatLng(25.2630312, 55.3357851,17),
                  map: map,
                  title: 'Click For More Informations'
                });
                markert.addListener('click', function() {
                  infowindowo.open(map, markert);
                });




            
               // Dubai Airport, Cargo village
                var contentStringthth = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Dubai Airport, Cargo village</h1>'+
                    '</div>'+
                    '</div>';

                var infowindowth = new google.maps.InfoWindow({
                  content: contentStringthth
                });

                var markerth = new google.maps.Marker({
                  position: new google.maps.LatLng(25.2557661, 55.3395124,16),
                  map: map,
                  title: 'Click For More Informations'
                });
                markerth.addListener('click', function() {
                  infowindowth.open(map, markerth);
                });





               // Al Maktoum Airport
               var contentStringforth = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Al Maktoum Airport</h1>'+
                    '</div>'+
                    '</div>';

                var infowindowforth = new google.maps.InfoWindow({
                  content: contentStringforth
                });

                var markerforth = new google.maps.Marker({
                    position: new google.maps.LatLng(24.9414375,55.1538295,11.75),
                  map: map,
                  title: 'Click For More Informations'
                });
                markerforth.addListener('click', function() {
                  infowindowforth.open(map, markerforth);
                });



            }
            