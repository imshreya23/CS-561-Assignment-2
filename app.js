const express = require('express')  //importing express framework
const app = express() //creating instance
const port = 3000 //port 3000 



app.get('/data/2.5/weather',get_weather)

function get_weather(request,response)
{
  console.log('Returning weather') //mock response
	response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50n"}],"base":"stations","main":{"temp":278.16,"feels_like":278.16,"temp_min":275.73,"temp_max":281,"pressure":1025,"humidity":78},"visibility":402,"wind":{"speed":0,"deg":0},"clouds":{"all":100},"dt":1642227125,"sys":{"type":2,"id":2012991,"country":"US","sunrise":1642175199,"sunset":1642208235},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}

app.listen(port, () => {
  console.log(`Shreya's Mock server connected at http://localhost:3000`) //This is to know if connected or not
})