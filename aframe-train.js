
AFRAME.registerComponent('weather-moscow', {
    init: function () {
      // Solution for Modifying Entities.
      var sceneEl = document.querySelector('a-scene'); 
      
      $.get(
	        "https://api.openweathermap.org/data/2.5/weather",
	        {
	            "id": "524894",
	            "appid": "16abef4dea8ce2b7f52fe6dd5556ee84"
	        },
	        function(data) {
	            console.log(data);
	            let out='';
	            out += Math.round(data.main.temp-273);
	            sceneEl.querySelector('#temp_val').setAttribute('value', out);
	            
	            console.log(sceneEl.querySelector('a-text').value);
	            // var temptext= $('#temperature');
	            // temptext.setAttribute('value', out);
	        }
	  );
	    
      
      //sceneEl.querySelector('a-cylinder').setAttribute('geometry', 'height', 0.5);
      //sceneEl.querySelector('a-sphere').setAttribute('material', {metalness: 1});
    }
});