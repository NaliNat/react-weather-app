import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon
            code={props.info.icon}
            alt={props.info.description}
            className="float-left"
          />
          <span className="temperature">
            {Math.round(props.info.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
            <li>
              {Math.round(props.info.temp_max)}°{" "}
              {Math.round(props.info.temp_min)}°
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
