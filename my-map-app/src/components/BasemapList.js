const OpenStreetMap = "/images/Basemap/OpenStreetMap.jpg";
const EsriWorldImagery = "/images/Basemap/EsriWorldImagenery.jpg";
const EsriToPo = "/images/Basemap/EsriToPo.jpg";
const StadiaDark = "/images/Basemap/StadiaDark.jpg";
const GoogleMaps = "/images/Basemap/GoogleMaps.jpg";
const GoogleStreet = "/images/Basemap/GoogleStreet.jpg";
const CartoDb = "/images/Basemap/CartoDb.jpg";

const daftarBasemap = [
  {
    url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    nama: "Google Satelite",
    gambar: GoogleMaps,
  },
  {
    url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    nama: "Google Streets",
    gambar: GoogleStreet,
  },
  {
    url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    nama: "OpenStreetMap",
    gambar: OpenStreetMap,
  },
  {
    url: "https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png",
    nama: "Carto Dark",
    gambar: StadiaDark,
  },
  {
    url: "https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png",
    nama: "Carto Positron",
    gambar: CartoDb,
  },
  {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    nama: "Esri.WorldImagery",
    gambar: EsriWorldImagery,
  },
  {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    nama: "Esri.WorldTopoMap",
    gambar: EsriToPo,
  },
];

export default daftarBasemap;
