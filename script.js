console.log("Hi there")

// Code Academy project code goes below here

function predictTheWeather(){
    let weather = ['Ok','Good','Great','Amazing','Perfect'];

    let weatherRef = Math.floor(Math.random()*5)
    console.log("Today the weather will be: " + weather[weatherRef]);
}

predictTheWeather()