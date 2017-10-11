function initMap() {
  var center = {
    lat: 55.866928,
    lng: 37.699105,
  };
  var reutov = {
    lat: 55.866928,
    lng: 37.699105,
  };
  var styles = [{
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{
      color: '#fafafa',
    }],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{
      color: '#4369aa',
    }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#ffffff',
    }],
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry.fill',
    'stylers': [{
      'color': '#4369aa',
    }],
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry.fill',
    'stylers': [{
      'color': '#d6d6d6',
    }],
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry.fill',
    'stylers': [{
      'color': '#ebebeb',
    }],
  },
  ];
  var map = new window.google.maps.Map(document.getElementById('google-map'), {
    zoom: 17,
    disableDefaultUI: true,
    center: center,
    scrollwheel: false,
  });
  map.setOptions({
    styles: styles,
  });
  var marker = new window.google.maps.Marker({
    position: {
      lat: 55.866928,
      lng: 37.699105,
    },

    map: map,
    icon: {
      url: 'assets/images/icons/map_marker.svg',
      scaledSize: new window.google.maps.Size(44, 54),
    },
  });
}

export {
  initMap,
};