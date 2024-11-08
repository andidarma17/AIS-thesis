// src/App.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import useResponsive from "../UseResponsive";
import Header from "../components/Header";
import MapComponent from "../components/MapComponent";
import Welcome from "../components/Sidebar/Welcome";
import Basemap from "../components/Sidebar/Basemap";
import ItemMenu from "../components/Sidebar/ItemMenu";
import Informasi from "../components/Sidebar/Informasi";
import InputAlamat from "../components/InputAlamat";
import "../global.css";

export default function Home() {
  const [value, setValue] = useState("");
  const [dataInput, setDataInput] = useState(false);
  const [informasiPersil, setInformasiPersil] = useState(false);
  const [menuSelect, setMenuSelect] = useState({
    nama: "Home",
    lebarSidebar: 220,
  });
  const [basemapSelect, setBasemapSelect] = useState(
    "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );

  const { isTablet } = useResponsive();

  return (
    <div>
      <Header></Header>
      <div className="flex flex-col">
        <div className="flex flex-row h-[calc(100vh_-_80px)]">
          <div>
            {!isTablet && (
              <Sidebar
                setMenuSelect={setMenuSelect}
                menuSelect={menuSelect["nama"]}
              />
            )}
            {!isTablet && <Welcome menuSelect={menuSelect["nama"]} />}
            {!isTablet && (
              <Informasi
                menuSelect={menuSelect["nama"]}
                informasiPersil={informasiPersil}
              />
            )}
            {!isTablet && (
              <Basemap
                menuSelect={menuSelect["nama"]}
                basemapSelect={basemapSelect}
                setBasemapSelect={setBasemapSelect}
              />
            )}
            {!isTablet ? (
              <div
                className="mt-3 px-5 absolute z-10 duration-500"
                style={{
                  marginLeft: `calc(${menuSelect["lebarSidebar"]}px + 80px)`,
                }}
              >
                <InputAlamat
                  setValue={setValue}
                  setDataInput={setDataInput}
                  value={value}
                />
              </div>
            ) : (
              <div className="p-1 absolute z-10 duration-500">
                {/* <InputAlamat
                setValue={setValue}
                setDataInput={setDataInput}
                value={value}
              /> */}
              </div>
            )}
          </div>
          <MapComponent
            dataInput={dataInput}
            basemapUrl={basemapSelect}
            menuSelect={menuSelect}
            setMenuSelect={setMenuSelect}
            setDataInput={setDataInput}
            setValue={setValue}
            setInformasiPersil={setInformasiPersil}
          />
        </div>
      </div>
    </div>
  );
}

// function App() {
//   const initialPosition = [110.377832, -7.770439];
//   const initialZoom = 13;
//   const mapRef = useRef(null);

//   return (
//     <div className="App">
//       <Header />
//       <div className="flex flex-col">
//         <div className="flex flex-row h-[calc(100vh_-_80px)]">
//           <Sidebar
//             map={mapRef.current}
//             initialPosition={initialPosition}
//             initialZoom={initialZoom}
//           />
//           <div className="map-container">
//             <MapComponent mapRef={mapRef} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
