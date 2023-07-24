import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Natalia Barrionuevo and is{" "}
          <a
            href="https://github.com/NaliNat/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}
