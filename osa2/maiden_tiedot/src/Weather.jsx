import React, {useEffect, useState } from 'react';
import axios from 'axios';

const WEATHER_API = 'http://api.apixu.com/v1/current.json?key=dc4eba53cf7f4d07a1d85303191304&q=Helsinki'

const Weather = ({ city }) => {
    const [weather, setWeather] = useState({});

    const fetchWeater = async () => {
        const requestUrl = [
            WEATHER_API,
            `q=${city}`
        ].join('&');

        const response = await axios.get(requestUrl);
        const { data } = response;
        setWeather(data);
    }

    useEffect(() => {
        fetchWeater();
    }, []);

    const { current } = weather;

    // wind_kph wind_dir

    return (
        <div>
            <h2>{`Weather in ${city}`}</h2>
            {
                current &&
                <div>
                    <p><b>Temperature: </b>{`${current.temp_c}`}&#8451;</p>
                    <div>
                        <img src={current.condition.icon} alt='Weather condition icon.' />
                    </div>
                    <p><b>Wind </b>{`${current.wind_kph} kph direction ${current.wind_dir}`}</p>
                </div>
            }
        </div>
    );
};

export default Weather;