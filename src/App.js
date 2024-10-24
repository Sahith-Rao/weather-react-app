
const api = {
  key: "f994796f41440db5d20783df7f6b688e",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type = "text"
            className="search-bar"
            placeholder="Search your location"
          />

        </div>
        <div className="location-box">
          <div className="location"> New York</div>
          <div className="date"></div>
        </div>
        <div className="weather-box">
          <div className="temp"></div>
          <div className="weather"></div>       
        </div>
      </main>
      
    </div>
  );
}

export default App;
