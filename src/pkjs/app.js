var myAPIKey = '082b7856ae0c6f892326bcaf231ba539';

function iconFromWeatherId(weatherId) {
  if (weatherId < 600) {
    return 2;
  } else if (weatherId < 700) {
    return 3;
  } else if (weatherId > 800) {
    return 1;
  } else {
    return 0;
  }
}

function fetchWeather(latitude, longitude) {
  var req = new XMLHttpRequest();
  console.log("about to call of weather");
  req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?appid=' + myAPIKey + '&lat=' + latitude + '&lon=' + longitude, true);
  console.log("http request completed");
  req.onload = function () {
    console.log("ready state %d", req.readyState);
    if (req.readyState === 4) {
      console.log("ready status %d", req.status);
      if (req.status === 200) {
        console.log(req.responseText);
        
        var response = JSON.parse(req.responseText);
        //var response = JSON.parse('{"city":{"id":3085041,"name":"Śródmieście","coord":{"lon":19.939581,"lat":50.061779},"country":"PL","population":0,"sys":{"population":0}},"cod":"200","message":0.0085,"cnt":37,"list":[{"dt":1474880400,"main":{"temp":292.12,"temp_min":286.743,"temp_max":292.12,"pressure":997.86,"sea_level":1038.25,"grnd_level":997.86,"humidity":88,"temp_kf":5.37},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":3.16,"deg":104.005},"rain":{"3h": 0.153},"sys":{"pod":"d"},"dt_txt":"2016-09-26 09:00:00"},{"dt":1474891200,"main":{"temp":291.65,"temp_min":287.622,"temp_max":291.65,"pressure":997.42,"sea_level":1037.68,"grnd_level":997.42,"humidity":76,"temp_kf":4.03},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":48},"wind":{"speed":3.67,"deg":112.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-09-26 12:00:00"},{"dt":1474902000,"main":{"temp":290.05,"temp_min":287.368,"temp_max":290.05,"pressure":997.11,"sea_level":1037.45,"grnd_level":997.11,"humidity":71,"temp_kf":2.69},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.41,"deg":104.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-09-26 15:00:00"},{"dt":1474912800,"main":{"temp":283.37,"temp_min":282.022,"temp_max":283.37,"pressure":997.74,"sea_level":1038.41,"grnd_level":997.74,"humidity":91,"temp_kf":1.34},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.91,"deg":92.0069},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-09-26 18:00:00"},{"dt":1474923600,"main":{"temp":279.356,"temp_min":279.356,"temp_max":279.356,"pressure":997.94,"sea_level":1039.11,"grnd_level":997.94,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.82,"deg":101.008},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-09-26 21:00:00"},{"dt":1474934400,"main":{"temp":277.588,"temp_min":277.588,"temp_max":277.588,"pressure":997.83,"sea_level":1039.09,"grnd_level":997.83,"humidity":87,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.6,"deg":90.0006},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-09-27 00:00:00"},{"dt":1474945200,"main":{"temp":277.068,"temp_min":277.068,"temp_max":277.068,"pressure":997.58,"sea_level":1039.08,"grnd_level":997.58,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.61,"deg":92.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-09-27 03:00:00"},{"dt":1474956000,"main":{"temp":277.959,"temp_min":277.959,"temp_max":277.959,"pressure":997.98,"sea_level":1039.35,"grnd_level":997.98,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.91,"deg":91.0036},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-09-27 06:00:00"},{"dt":1474966800,"main":{"temp":286.114,"temp_min":286.114,"temp_max":286.114,"pressure":998.17,"sea_level":1038.68,"grnd_level":998.17,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.88,"deg":117.504},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-09-27 09:00:00"},{"dt":1474977600,"main":{"temp":289.187,"temp_min":289.187,"temp_max":289.187,"pressure":997.66,"sea_level":1037.86,"grnd_level":997.66,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.26,"deg":148.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-09-27 12:00:00"},{"dt":1474988400,"main":{"temp":289.302,"temp_min":289.302,"temp_max":289.302,"pressure":997.17,"sea_level":1037.47,"grnd_level":997.17,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.31,"deg":175.5},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-09-27 15:00:00"},{"dt":1474999200,"main":{"temp":282.927,"temp_min":282.927,"temp_max":282.927,"pressure":997.41,"sea_level":1038.01,"grnd_level":997.41,"humidity":88,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":1.66,"deg":115.501},"sys":{"pod":"n"},"dt_txt":"2016-09-27 18:00:00"},{"dt":1475010000,"main":{"temp":281.813,"temp_min":281.813,"temp_max":281.813,"pressure":997.23,"sea_level":1038.16,"grnd_level":997.23,"humidity":86,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":56},"wind":{"speed":2.12,"deg":146.501},"sys":{"pod":"n"},"dt_txt":"2016-09-27 21:00:00"},{"dt":1475020800,"main":{"temp":281.551,"temp_min":281.551,"temp_max":281.551,"pressure":996.85,"sea_level":1038.06,"grnd_level":996.85,"humidity":85,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":1.75,"deg":185.5},"sys":{"pod":"n"},"dt_txt":"2016-09-28 00:00:00"},{"dt":1475031600,"main":{"temp":280.944,"temp_min":280.944,"temp_max":280.944,"pressure":995.9,"sea_level":1037.12,"grnd_level":995.9,"humidity":83,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":68},"wind":{"speed":2.23,"deg":191.006},"sys":{"pod":"n"},"dt_txt":"2016-09-28 03:00:00"},{"dt":1475042400,"main":{"temp":283.81,"temp_min":283.81,"temp_max":283.81,"pressure":994.97,"sea_level":1035.91,"grnd_level":994.97,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.13,"deg":214.006},"sys":{"pod":"d"},"dt_txt":"2016-09-28 06:00:00"},{"dt":1475053200,"main":{"temp":289.71,"temp_min":289.71,"temp_max":289.71,"pressure":994.18,"sea_level":1034.27,"grnd_level":994.18,"humidity":69,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":5.86,"deg":228.006},"sys":{"pod":"d"},"dt_txt":"2016-09-28 09:00:00"},{"dt":1475064000,"main":{"temp":291.869,"temp_min":291.869,"temp_max":291.869,"pressure":992.81,"sea_level":1032.7,"grnd_level":992.81,"humidity":67,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":6.81,"deg":240.504},"sys":{"pod":"d"},"dt_txt":"2016-09-28 12:00:00"},{"dt":1475074800,"main":{"temp":290.782,"temp_min":290.782,"temp_max":290.782,"pressure":991.24,"sea_level":1031.16,"grnd_level":991.24,"humidity":65,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":6.81,"deg":237.003},"sys":{"pod":"d"},"dt_txt":"2016-09-28 15:00:00"},{"dt":1475085600,"main":{"temp":288.719,"temp_min":288.719,"temp_max":288.719,"pressure":991.17,"sea_level":1031.3,"grnd_level":991.17,"humidity":74,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":48},"wind":{"speed":6.45,"deg":242.501},"rain":{"3h":0.11},"sys":{"pod":"n"},"dt_txt":"2016-09-28 18:00:00"},{"dt":1475096400,"main":{"temp":287.526,"temp_min":287.526,"temp_max":287.526,"pressure":990.88,"sea_level":1031.02,"grnd_level":990.88,"humidity":83,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":80},"wind":{"speed":6.32,"deg":258.004},"rain":{"3h":0.29},"sys":{"pod":"n"},"dt_txt":"2016-09-28 21:00:00"},{"dt":1475107200,"main":{"temp":286.09,"temp_min":286.09,"temp_max":286.09,"pressure":991.55,"sea_level":1031.88,"grnd_level":991.55,"humidity":93,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":76},"wind":{"speed":5.26,"deg":287.5},"rain":{"3h":0.28},"sys":{"pod":"n"},"dt_txt":"2016-09-29 00:00:00"},{"dt":1475118000,"main":{"temp":285.058,"temp_min":285.058,"temp_max":285.058,"pressure":991.87,"sea_level":1032.23,"grnd_level":991.87,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":5.22,"deg":284.503},"rain":{"3h":0.26},"sys":{"pod":"n"},"dt_txt":"2016-09-29 03:00:00"},{"dt":1475128800,"main":{"temp":284.827,"temp_min":284.827,"temp_max":284.827,"pressure":991.88,"sea_level":1032.29,"grnd_level":991.88,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":5.77,"deg":276.5},"rain":{"3h":0.51},"sys":{"pod":"d"},"dt_txt":"2016-09-29 06:00:00"},{"dt":1475139600,"main":{"temp":285.479,"temp_min":285.479,"temp_max":285.479,"pressure":992.64,"sea_level":1032.97,"grnd_level":992.64,"humidity":97,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":6.22,"deg":285.505},"rain":{"3h":0.68},"sys":{"pod":"d"},"dt_txt":"2016-09-29 09:00:00"},{"dt":1475150400,"main":{"temp":286.468,"temp_min":286.468,"temp_max":286.468,"pressure":992.68,"sea_level":1032.91,"grnd_level":992.68,"humidity":91,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":76},"wind":{"speed":6.66,"deg":276.002},"rain":{"3h":0.1},"sys":{"pod":"d"},"dt_txt":"2016-09-29 12:00:00"},{"dt":1475161200,"main":{"temp":286.112,"temp_min":286.112,"temp_max":286.112,"pressure":992.33,"sea_level":1032.5,"grnd_level":992.33,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":5.92,"deg":265.001},"rain":{"3h":0.6},"sys":{"pod":"d"},"dt_txt":"2016-09-29 15:00:00"},{"dt":1475172000,"main":{"temp":286.147,"temp_min":286.147,"temp_max":286.147,"pressure":992.63,"sea_level":1032.84,"grnd_level":992.63,"humidity":97,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":5.52,"deg":270.503},"rain":{"3h":1.3},"sys":{"pod":"n"},"dt_txt":"2016-09-29 18:00:00"},{"dt":1475182800,"main":{"temp":286.435,"temp_min":286.435,"temp_max":286.435,"pressure":993.45,"sea_level":1033.69,"grnd_level":993.45,"humidity":98,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":5.67,"deg":276.001},"rain":{"3h":1.26},"sys":{"pod":"n"},"dt_txt":"2016-09-29 21:00:00"},{"dt":1475193600,"main":{"temp":286.631,"temp_min":286.631,"temp_max":286.631,"pressure":993.74,"sea_level":1034.03,"grnd_level":993.74,"humidity":97,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":5.91,"deg":276.004},"rain":{"3h":0.8},"sys":{"pod":"n"},"dt_txt":"2016-09-30 00:00:00"},{"dt":1475204400,"main":{"temp":286.507,"temp_min":286.507,"temp_max":286.507,"pressure":993.23,"sea_level":1033.52,"grnd_level":993.23,"humidity":96,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":4.71,"deg":257.001},"rain":{"3h":0.13},"sys":{"pod":"n"},"dt_txt":"2016-09-30 03:00:00"},{"dt":1475215200,"main":{"temp":286.65,"temp_min":286.65,"temp_max":286.65,"pressure":992.1,"sea_level":1032.27,"grnd_level":992.1,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":32},"wind":{"speed":5.98,"deg":237.005},"rain":{"3h":0.03},"sys":{"pod":"d"},"dt_txt":"2016-09-30 06:00:00"},{"dt":1475226000,"main":{"temp":290.23,"temp_min":290.23,"temp_max":290.23,"pressure":991.06,"sea_level":1030.87,"grnd_level":991.06,"humidity":88,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":20},"wind":{"speed":8.41,"deg":242.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-09-30 09:00:00"},{"dt":1475236800,"main":{"temp":292.557,"temp_min":292.557,"temp_max":292.557,"pressure":989.15,"sea_level":1028.71,"grnd_level":989.15,"humidity":76,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":0},"wind":{"speed":9.16,"deg":246.5},"rain":{"3h":0.0025},"sys":{"pod":"d"},"dt_txt":"2016-09-30 12:00:00"},{"dt":1475247600,"main":{"temp":293.46,"temp_min":293.46,"temp_max":293.46,"pressure":987.2,"sea_level":1026.65,"grnd_level":987.2,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":9.44,"deg":247.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-09-30 15:00:00"},{"dt":1475258400,"main":{"temp":293.246,"temp_min":293.246,"temp_max":293.246,"pressure":986.01,"sea_level":1025.45,"grnd_level":986.01,"humidity":62,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":9.11,"deg":248},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-09-30 18:00:00"},{"dt":1475269200,"main":{"temp":292.338,"temp_min":292.338,"temp_max":292.338,"pressure":985.1,"sea_level":1024.61,"grnd_level":985.1,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":8.9,"deg":253.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-09-30 21:00:00"}]}');
        if(response !== undefined){
          var temperature = Math.round(response.list[0].main.temp - 273.15);
          
          var dateFrom = new Date(response.list[0].dt * 1000);
          //dateFrom.setSeconds(dateFrom.getSeconds() + response.list[0].dt);
          console.log(response.list[0].dt);
          console.log(dateFrom);
          
          var rainObject = response.list[0].rain;
          var rain = 0;

          if(rainObject !== undefined){
            if(rainObject["3h"] !== undefined){
              console.log('rain 3h:' + rainObject["3h"]);
              rain = rainObject["3h"];
            }
            if(rainObject["0h"] !== undefined){
              console.log('rain 0h:' + rainObject["0h"]);
              rain = rainObject["0h"];
            }
          }
          
          rain = '' + Math.round(rain) + '.' + Math.round(rain * 10);
          
          var icon = iconFromWeatherId(response.list[0].weather[0].id);
          var city = response.city.name + ',' + response.city.country;
          
          console.log('temp: ' + temperature);
          console.log('icon: ' + icon);
          console.log('rain: ' + rain);
          console.log('city: ' + city);
                
          Pebble.sendAppMessage({
            'WEATHER_ICON_KEY': icon,
            'WEATHER_TEMPERATURE_KEY': temperature + '\xB0C' + ', ' + rain + 'mm',
            'WEATHER_CITY_KEY': city
          });
        }
      } else {
        console.log('Error');
      }
    }
  };
  req.send(null);
}

function locationSuccess(pos) {
  var coordinates = pos.coords;
  fetchWeather(coordinates.latitude, coordinates.longitude);
}

function locationError(err) {
  //console.warn('location error (' + err.code + '): ' + err.message);
  console.warn('location error (' + err + '): ');
  Pebble.sendAppMessage({
    'WEATHER_CITY_KEY': 'Loc Unavailable',
    'WEATHER_TEMPERATURE_KEY': 'N/A'
  });
}

var locationOptions = {
  'timeout': 15000,
  'maximumAge': 60000
};

Pebble.addEventListener('ready', function (e) {
  console.log('connect begins! ' + e.ready);
  window.navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
  console.log(e.type);
  console.log('connect ends!');
});

Pebble.addEventListener('appmessage', function (e) {
    console.log('message begins ' + e.type);
  window.navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
  console.log(e.payload.temperature);
  console.log('message end!');
});

Pebble.addEventListener('webviewclosed', function (e) {
  console.log('webview closed');
  console.log(e.type);
  console.log(e.response);
});

// var MultiTimer = (function () {

//   var analytics = null;

//   function start() {
//     analytics = new Analytics(AppInfo.config.googleAnalytics.trackingId, AppInfo.shortName, AppInfo.versionLabel);
//     if (! AppInfo.debug) { analytics.trackEvent('app', 'start'); }
//   }

//   return {
//     start: start
//   };

// }());

// Pebble.addEventListener('ready', MultiTimer.start);
