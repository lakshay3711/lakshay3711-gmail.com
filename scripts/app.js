const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const updateui = (data) => {
    const citydets = data.citydets;
    const weather = data.weather;
    details.innerHTML = ` <h5 class="my-3">${citydets.EnglishName}</h5>
              <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;</span> </div>`
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
        
    }
    
    
};
const updatecity = async (city) => {
    const citydets = await getcity(city);
    const weather = await getweather(citydets.Key);
    return {
        citydets,
        weather
    };

}
cityform.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityform.city.value.trim();
    cityform.reset();

    updatecity(city)

        .then(data => {console.log(data);
        updateui(data);
                      })
        .catch(err => console.log(err));

});
