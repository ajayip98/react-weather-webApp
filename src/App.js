import React from "react";
const api = {
  key: "bc61560e6647630623ea02b487958737",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">New York,US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
