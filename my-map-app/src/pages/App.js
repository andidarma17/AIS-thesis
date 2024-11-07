// src/App.js
import React, { useRef } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header";
import MapComponent from "../components/MapComponent";
import "../global.css";

function App() {
  const initialPosition = [110.377832, -7.770439];
  const initialZoom = 13;
  const mapRef = useRef(null);

  return (
    <div className="App">
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-row h-[calc(100vh_-_80px)]">
          <Sidebar
            map={mapRef.current}
            initialPosition={initialPosition}
            initialZoom={initialZoom}
          />
        </div>
        <div className="map-container">
          <MapComponent mapRef={mapRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
