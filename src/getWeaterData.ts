async function getWeatherData(location:string):Promise<any> {
    const apiKey = '27dd178e570ffce0471de36a05f356d0';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

export default getWeatherData;