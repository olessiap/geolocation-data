$(document).ready(function() {
    $.ajax ({
        url: "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139",
        request: "GET",
        data: {format: 'json'},
        success: function(data) {
            console.log(data);
            $('#info').html(data.weather[0].main);
        }
    });
});