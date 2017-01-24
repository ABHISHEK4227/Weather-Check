$(document).ready(function(){
  
  if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(function(position){
    
    var lat=position.coords.latitude;
    var long=position.coords.longitude;
    var url="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=ee3791d27a934107fac62d427d276027";
   
    $.getJSON(url, function(data) {
      
      var weatherType=data.weather[0].description;
      var city=data.name;
      var temp=data.main.temp;
      var windSpeed=data.wind.speed;
      var humidity=data.main.humidity;
      
      $('.city').html(city);
      $('.temp').html(temp-273);
      $('.wind').html(windSpeed);
      $('.humi').html(humidity);
      $('.weather').html(weatherType);

    });
   

    
    
  });
  }

});