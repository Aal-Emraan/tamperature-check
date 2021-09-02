const api_key = `2e3fa3a62d6ff1c4677ce14447e51f2a`;

const getCity = () => {
    const inputCity = document.getElementById('input');
    const input = inputCity.value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=metric`)
    .then(res => res.json())
    .then(data => showData(data))
}

const setInfo = (id, info) => {
    const element = document.getElementById(id);
    element.innerText = info;
}

const showData = (tem) => {
    setInfo('city', tem.name);
    setInfo('condition', tem.weather[0].description);
    setInfo('temperature', tem.main.temp);
    const image = `https://openweathermap.org/img/wn/${tem.weather[0].icon}@2x.png`;
    const icon = document.getElementById('icon');
    icon.setAttribute('src', image);
}