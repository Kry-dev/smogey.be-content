$(document).ready(function() {
   $('#allTabs .form-group a').click(function (e) {
       e.preventDefault();
       var href = $(this).attr('href');
       var activeLink = $(".nav-tabs > li.nav-item a[href='"+href+"'] ");
       $('.nav-tabs > li.nav-item.active').removeClass('active');
       $(activeLink).parent().addClass('active');
   });

    var markers = new Array();
    var iconSrc = {};
    iconSrc['Magasin-vrac'] = 'assets/img/map/map-pin-01.png';
    iconSrc['Producteurs-locaux'] = 'assets/img/map/map-pin-02.png';
    iconSrc['Potager collectif'] = 'assets/img/map/map-pin-03.png';
    iconSrc['Seconde main'] = 'assets/img/map/map-pin-04.png';
    iconSrc['GAC'] = 'assets/img/map/map-pin-05.png';

    //Further down, in new google.maps.Marker, the icon line becomes:
    // icon: iconSrc[locations[i][2]]

    var locations = [
        ['Boonton Town', '973-402-9410, ext. 631', 'Magasin-vrac', 40.902, -74.407, 1],
        ['Boonton Township', '973-331-3336', 'Magasin-vrac', 40.933, -74.425, 2],
        ['Butler Borough', '973-835-8885', 'Magasin-vrac', 40.999497, -74.346326, 3],
        ['Chatham Boro and Chatham Township', '973-635-4565', 'Magasin-vrac', 40.7372, -74.4253, 4],
        ['Chester Borough and Chester Township', '908-876-9496', 'Magasin-vrac', 40.785999, -74.692904, 5],
        ['Denville Township', '973-625-7799', 'Magasin-vrac', 40.892222, -74.4775, 6],
        ['Dover', '973-366-2200, ext. 126', 'Magasin-vrac', 40.885899, -74.558241, 7],
        ['East Hanover', '973-428-3029', 'Magasin-vrac', 40.82, -74.365, 8],
        ['Hanover Township', '973-428-2498', 'Magasin-vrac', 40.816, -74.425, 9],
        ['Jefferson Township', '973-208-6123', 'Magasin-vrac', 40.958, -74.591, 10],
        ['Kinnelon', '973-835-8885', 'Magasin-vrac', 40.984, -74.386, 11],
        ['Lincoln Park', '973-835-8885', 'Magasin-vrac', 40.924, -74.302, 12],
        ['Long Hill', '908-626-1101', 'Magasin-vrac', 40.691, -74.475, 13],
        ['Madison', '973-593-3094', 'Magasin-vrac', 40.759, -74.417, 14],
        ['Mendham Borough and Mendham Township', '973-543-2666', 'Magasin-vrac', 40.779400, -74.598099, 15],
        ['Mine Hill', '973-366-2491, ext. 62', 'Magasin-vrac', 40.8768878122, -74.602913445, 16],
        ['Montville', '973-331-3336', 'Magasin-vrac', 40.9054189580323, -74.3525718707342, 17],
        ['Morris Township and Morristown', '973-267-1116', 'Magasin-vrac', 40.8239279710449, -74.5057456930609, 18],

        ['Boonton Post', '210 Main St.<br>Boonton, NJ 07005', 'Producteurs-locaux', 40.902857, -74.407712, 32],
        ['John A. Dean Post', '15 Kiel Ave.<br>Butler, NJ 07403', 'Producteurs-locaux', 41.00276744260799, -74.35810804367065, 33],
        ['Chatham Post', 'Box 11<br>Chatham, NJ 07928', 'Producteurs-locaux', 40.73794, -74.38449, 34],
        ['Bernays Apgar Post', 'P.O. Box 342<br>Chester, NJ 07930', 'Producteurs-locaux', 40.78721, -74.68885, 35],
        ['Denville Memorial Post', 'Legion Place<br>Denville, NJ 07834', 'Producteurs-locaux', 40.894537669741894, -74.48481559753418, 36],
        ['William H. Baker Post', '2 Legion Place<br>Dover, NJ 07801', 'Producteurs-locaux', 40.88243629753742, -74.56002473831177, 37],
        ['James P. Collins Post', '96 Mt. Pleasant Ave.<br>East Hanover, NJ 07936', 'Producteurs-locaux', 40.8038371384793, -74.36926603317261, 38],
        ['Frank Patterson Post', '20 Ridgedale Ave.<br>Florham Park, NJ 07932', 'Producteurs-locaux', 40.77305062967737, -74.40246105194092, 39],
        ['Roxbury Memorial Post', '6 Johnson Ave.<br>Hopatcong, NJ 07843', 'Producteurs-locaux', 40.92226838897989, -74.65842962265015, 40],
        ['Parsippanong Post', 'P.O. Box 196<br>Lake Hiawatha, NJ 07034', 'Producteurs-locaux', 40.88249, -74.38228, 41],
        ['William H. Flatt, Jr., Post', 'Espanong Rd.<br>Lake Hopatcong, NJ 07849', 'Producteurs-locaux', 40.95903013727964, -74.61338996887207, 42],

        ['Boonton Post #242', '221 Main St.<br>Boonton, NJ 07005', 'Potager collectif', 40.903020287948806, -74.40771818161011, 53],
        ['Denville Post #2519', '71 Ford Rd.<br>Denville, NJ 07834', 'Potager collectif', 40.91534490699327, -74.48998689651489, 54],
        ['Hanover Post #5351', '750 State Route 10<br>Hanover Twp., NJ 07981', 'Potager collectif', 40.82603680244624, -74.42166566848755, 55],
        ['Kenvil Post #2833', '16 High St.<br>Kenvil, NJ 07847', 'Potager collectif', 40.87683907004174, -74.63418245315552, 56],
        ['Montville Post #5481', '132 Change Bridge Rd.<br>Montville, NJ 07045', 'Potager collectif', 40.88654063021766, -74.36521053314209, 57],
        ['Mt. Freedom Post #7333', 'Carrell Rd.<br>Mt. Freedom, NJ 07970', 'Potager collectif', 40.83861926691208, -74.58420753479004, 58],
        ['Mt. Tabor Post #3410', '45 Tabor Rd.<br>Mt. Tabor, NJ', 'Potager collectif', 40.86945, -74.47908, 59],
        ['Netcong Post #2347', 'No Street Address listed<br>Netcong, NJ 07857', 'Potager collectif', 40.89881, -74.70577, 60],
        ['Jewish War Veterans of Morris-Sussex Post #689', '41 Mountain Way<br>Parsippany NJ 07054', 'Potager collectif', 40.82446179682527, -74.48324918746948, 61],
        ['Parsippany Post #10184', '240 Troy Rd.<br>Parsippany, NJ 07054', 'Potager collectif', 40.85915196608244, -74.39651727676392, 63],
        ['Rockaway Post #9328', '23 Pawnee Ave.<br>Rockaway, NJ 07886', 'Potager collectif', 40.920517319192335, -74.51099395751953, 64],
        ['Butler Borough', 'Firehouse, Carey Avenue<br>(973) 838-4472; open Monday through Friday', 'Seconde main', 40.99879, -74.33522, 65],
        ['Chatham Borough', 'Church of Christ, 382 Fairmount Avenue<br>(973) 635-1508; open Tuesday and Thursday', 'Seconde main', 40.7227380172141, 74.40338373184204, 66],
        ['Chester Township', 'Community Presbyterian Church, 220 Main St.<br>(908) 879-6837; open Tuesday and Thursday', 'Seconde main', 40.7873490421004, -74.69098091125488, 67],
        ['Denville', 'Cooks Pond Senior Housing, 455 Diamond Spring Rd.<br>(973) 983-1142; open Monday, Wednesday, Friday', 'Seconde main', 40.9132855581483, -74.45492506027222, 68],
        ['Dover', 'St Johns Episcopal Church, 11 So. Bergen St.<br>(973) 361-9376; open Monday and Thursday', 'Seconde main', 40.88496706239981, -74.5555830001831, 69],
        ['Jefferson Township', 'Senior Citizens Services, 54 Schoolhouse Rd.<br>(973) 208-0788; open Monday, Tuesday, Thursday', 'Seconde main', 41.028607409403065, -74.52790260314941, 70],
        ['Long Hill Township', 'The Senior Citizens Club, 769 Valley Rd.<br>(908) 626-1606; open Monday and Friday', 'Seconde main', 40.67377066571321, -74.46979522705078, 71],
        ['Madison', 'Rexford S. Tucker Apts., 15 Chateau Thierry Ave.<br>(973) 822-3129; open Monday, Wednesday, Friday', 'Seconde main', 40.77118185975647, -74.4194769859314, 72],
        ['Montville', 'Montville Senior House, 356 Main Rd.<br>(973) 316-8560; open Tuesday and Thursday', 'Seconde main', 40.91600972245032, -74.36658382415771, 73],
        ['Morris Mews', 'Dean Gallo Congregate Housing, 99 Ketch Rd.<br>(973) 540-8063; open Monday through Friday', 'Seconde main', 40.83020957464309, -74.5130968093872, 74],
        ['Morristown', 'Wetmore Towers, 31 Early St.<br>(973) 644-0343; open Monday through Friday', 'Seconde main ', 40.80247276179082, -74.48412895202637, 75],
        ['Mt. Olive Township', 'Mt. Olive Senior Center, 204 Flanders-Drakestown Rd.<br>(973) 448-7474; open Monday, Wednesday, Friday', 'Seconde main', 40.896905775860006, -74.69329833984375, 76],
        ['Parsippany', 'Parsippany Community Center, 1130 Knoll Rd.<br>(973) 884-1868; open Monday through Friday', 'Seconde main', 40.87304242027383, -74.39115285873413, 77],
        ['Rockaway', 'Pleasant View Village, 221 Mt. Pleasant Ave.<br>(973) 361-9376; open Tuesday, Wednesday, Friday', 'Seconde main', 40.901593078403536, -74.52371835708618, 78],
        ['Roxbury Township', 'Roxbury Senior Center, 72 Eyland Avenue<br>(973) 361-5231; open Wednesday and Friday', 'Seconde main', 40.8563177, -74.637607, 79],

        ['Pequannock', '973-835-8885', 'GAC', 40.952, -74.299, 24],
        ['Randolph', '973-989-7084', 'GAC', 40.85, -74.566, 25],
        ['Riverdale', '973-835-8885', 'GAC', 40.9931, -74.3088, 26],
        ['Rockaway Borough', '973-627-2000', 'GAC', 40.901, -74.514, 27],
        ['Rockaway Township', '973-893-2839', 'GAC', 40.95, -74.466, 28],
        ['Roxbury Township', '973-448-2029', 'GAC', 40.858, -74.658, 29],
        ['Washington Township', '908-876-9496', 'GAC', 40.791, -74.8, 30],
        ['Wharton', '973-659-9111', 'GAC', 40.893, -74.582, 31]
    ];

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 11,
        center: new google.maps.LatLng(40.7967667, -74.4815438),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // var infowindow = new google.maps.InfoWindow();
    var prev_infowindow = false;
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][3], locations[i][4]),
            map: map,
            icon: iconSrc[locations[i][2]]
        });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {

                var contentString =
                    '<div class="map-tooltip">' +
                    '<div class="map-tooltip-header">' +
                    '<h4 id="map-tooltip-title" class="map-tooltip-title">Naturalia Tolbiac</h4>' +
                    '<button id="map-tooltip-close"><i class="fa fa-times" aria-hidden="true"></i></button>' +
                    '</div>' +
                    '<div class="map-tooltip-content">' +
                    '<div class="map-tooltip-content-left">' +
                    '<p>71, rue de Tolbiac,<br /> PARIS 75013,<br /> Magasin vrac </p>' +
                    '<button class="btn btn-warning" type="button" data-toggle="modal" data-target="#mapMarkerModal">' + 'More' +
                    ' information</button>' +
                    '</div>' +
                    '<div class="map-tooltip-content-right"><img src="assets/img/calendar/pin-01.png"></div>' +
                    '</div>' +
                    '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString,
                });

                var newImage = $('<img src="assets/img/map/close.png"/>');
                $(".gm-style-iw").next("div").html(newImage);
                // infowindow.setContent(contentString + locations[i][0] + "<br />" + locations[i][2] + "<br />" + locations[i][1]);

                if (prev_infowindow) {
                    prev_infowindow.close();
                }

                prev_infowindow = infowindow;
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    // == shows all markers of a particular category, and ensures the checkbox is checked ==
    function show(category) {
        for (var i = 0; i < locations.length; i++) {
            if (locations[i][2] == category) {
                markers[i].setVisible(true);
            }
        }
    }

    // == hides all markers of a particular category, and ensures the checkbox is cleared ==
    function hide(category) {
        for (var i = 0; i < locations.length; i++) {
            if (locations[i][2] == category) {
                markers[i].setVisible(false);
            }
        }
    }

    // == show or hide the categories initially ==

    hide("Magasin-vrac");
    hide("Producteurs-locaux");
    hide("Potager collectif");
    hide("Seconde main");
    hide("GAC");

    $(".checkbox").click(function () {
        var cat = $(this).attr("value");
        // If checked
        if ($(this).is(":checked")) {
            show(cat);
        } else {
            hide(cat);
        }
    });

    (function initMap() {
        var map = new google.maps.Map(document.getElementById('map_modal'), {
            center: {lat: -33.8688, lng: 151.2195},
            zoom: 13
        });
        var input = /** @type {!HTMLInputElement} */(
            document.getElementById('pac-input'));

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29)
        });
        autocomplete.addListener('place_changed', function () {
            infowindow.close();
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);  // Why 17? Because it looks good.
            }
            marker.setIcon(/** @type {google.maps.Icon} */({
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            }));
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }
            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
            infowindow.open(map, marker);
        });
    })();
});