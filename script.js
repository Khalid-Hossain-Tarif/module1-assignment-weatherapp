function getWeatherData() {
    const searchInput = document.querySelector('#search-input').value;
    
    const errorMsg = function() {
        const errorMsg = document.querySelector('.error-msg');
        errorMsg.innerHTML = "Type correct city name or zip code!";
    }
    
    const apiKey = "93e8432cdcd77669c24fb8bd197a5972";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey;
    const config = {method: "GET"};

    fetch(url, config)
    .then(response => response.json())
    .then(info => {
        const cityname = info.name;
        const temp = info.main.temp;
        const temperature = temp - 273.15;
        const description = info.weather[0].description;
        const humidity = info.main.humidity;

        document.querySelector('.cityname').innerHTML = cityname;
        document.querySelector('.temperature').innerHTML = temperature.toFixed(2);
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = humidity;
    })
    .catch(err => errorMsg())
}



// const searchButton = document.querySelector('#search-button');

// searchButton.addEventListener('click', function () {
//     const searchInput = document.querySelector('#search-input').value;
    
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchInput+'&appid=93e8432cdcd77669c24fb8bd197a5972')
//     .then(response => response.json())
//     .then(info => {
//         const cityname = info.name;
//         const temp = info.main.temp;
//         const temperature = temp - 273.15;
//         const description = info.weather[0].description;
//         const humidity = info.main.humidity;

//         document.querySelector('.cityname').innerHTML = cityname;
//         document.querySelector('.temperature').innerHTML = temperature.toFixed(2);
//         document.querySelector('.description').innerHTML = description;
//         document.querySelector('.humidity').innerHTML = humidity;
//     })
//     .catch(err => alert('Type City or zip code correctly!'))
// })