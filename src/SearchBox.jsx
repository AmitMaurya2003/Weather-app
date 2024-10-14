import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f8e0992355160300e3a6518c8e9164f7";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let josnResponse = await response.json(); 
        let result = {
            city: city,
            temp: josnResponse.main.temp,
            tempMin: josnResponse.main.temp_min,
            tempMax: josnResponse.main.temp_max,
            humidity: josnResponse.main.humidity,
            feelsLike: josnResponse.main.feels_like,
            weather: josnResponse.weather[0].description,
        };
        console.log(result);
        console.log(josnResponse);
        return result;
        } 
        catch (err){
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch (err) {
            setError(true);
        }
    };

    return (
        <div className='searchBox'> 
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /> <br />
            <Button variant="contained" type="submit"> Search</Button>
            {error && <p style={{color: "red"}}>No such place exist in API!</p>}
            </form>
        </div>
    )
}