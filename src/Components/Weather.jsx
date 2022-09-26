import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import Sun from "./Sun";
import Cold from "./Cold";

function Weather() {
    const [weather, setweather] = useState();
    const watch = true;
    const { latitude, longitude } = usePosition(watch);

    const getWeatherData = async (lat, lon) => {
        const key = process.env.REACT_APP_WEATHER_API_KEY;
        try {
            const { data } = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
            );
            setweather(data);
        } catch {
            alert("Veri alınırken bir hata oluştu");
        }
    };

    useEffect(() => {
        latitude && longitude && getWeatherData(latitude, longitude);
    }, [latitude, longitude]);

    return (
        <div>
            {weather ? (
                <div className="card mt-5">
                    <div className="card-img-top d-flex justify-content-center ms-4">
                        {weather.main.temp > 20 ? <Sun /> : <Cold />}
                    </div>

                    <div className="card-body">
                        <h4 className="card-title text-center fw-bolder ms-5">
                            Temperature
                        </h4>
                        <h5 className="card-text fw-bolder text-center ms-5">
                            {weather.main.temp} °C
                        </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h4 className=" fw-bolder d-flex float-start">
                                CITY:
                            </h4>
                            <h4 className="text-center d-flex justify-content-center ms-5">
                                {weather.name}
                            </h4>
                            <h4 className=" fw-bolder d-flex float-start">
                                DATE:
                            </h4>
                            <h4 className="text-center d-flex justify-content-center">
                                {new Date(
                                    weather.dt * 1000
                                ).toLocaleDateString()}
                            </h4>
                        </li>
                        <li className="list-group-item">
                            <h5 className=" fw-bolder d-flex float-start ">
                                HUMANDITY:
                            </h5>
                            <h5 className="text-center d-flex justify-content-center mx-5 ">
                                %{weather.main.humidity}
                            </h5>
                            <h5 className=" fw-bolder d-flex float-start">
                                WIND SPEED:
                            </h5>
                            <h5 className="text-center d-flex justify-content-center mx-5">
                                {weather.wind.speed} KM/H
                            </h5>
                        </li>
                    </ul>
                </div>
            ) : (
                <div>
                    <h2 className="text-center d-flex justify-content-center mx-5 mt-3s">
                        Loading...
                    </h2>
                </div>
            )}
        </div>
    );
}

export default Weather;
