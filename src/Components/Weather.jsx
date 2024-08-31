    const Weather = ({ weatherData }) => {
        return (
        <div>
            {weatherData.weather ? (
            <div className="w-[500px] h-auto bg-gray-800 text-white shadow-lg rounded-xl m-auto p-6 border border-gray-700 relative text-xl top-8 focus:outline-none">
                <div className="flex justify-between items-start">
                
                <div className="flex flex-col justify-between">
                    <div className="mb-6">
                    <p className="text-xl font-semibold">
                        {weatherData.name}, {weatherData.sys.country}
                    </p>
                    <p className="text-lg capitalize">{weatherData.weather[0].description}</p>
                    </div>
    
                    <div className="mt-6">
                    <h1 className="text-6xl font-semibold">{weatherData.main.temp.toFixed()} °C</h1>
                    </div>
                </div>
    
                
                <div className="flex flex-col items-end">
                    <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    className="w-20 mb-4"
                    />
    
                    {weatherData.name && (
                    <div className="flex flex-col gap-y-2 text-xs">
                        <div className="flex justify-between w-full gap-x-4">
                        <p>Feels Like</p>
                        <p className="font-bold">{weatherData.main.feels_like.toFixed()}°C</p>
                        </div>
    
                        <div className="flex justify-between w-full gap-x-4">
                        <p>Humidity</p>
                        <p className="font-bold">{weatherData.main.humidity} %</p>
                        </div>
    
                        <div className="flex justify-between w-full gap-x-4">
                        <p>Wind Speed</p>
                        <p className="font-bold">{weatherData.wind.speed.toFixed()} KPH</p>
                        </div>
    
                        <div className="flex justify-between w-full gap-x-4">
                        <p>Pressure</p>
                        <p className="font-bold">{weatherData.main.pressure} hPa</p>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            </div>
            ) : null}
        </div>
        );
    };
    
    export default Weather;
    