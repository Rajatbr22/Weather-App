import axios from 'axios'
import { useState } from 'react'
import Weather from './Components/Weather';


const App = () => {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = "a8946440e448618735d8e4ceeb4b4405";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event) =>{
    if(event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col items-center justify-start gap-4 py-20">
      <main className="text-center flex items-center justify-center">
        <input type="text" className="p-4 w-[500px] bg-gray-800 border rounded-2xl text-xl text-white sticky top-8focus:outline-none bg-white-600/100 shadow-md" placeholder="Enter Location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDownCapture={searchLocation}
        />
      </main>
      <Weather weatherData = {data}/>
    </div>
  )
}

export default App