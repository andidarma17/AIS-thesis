import React from "react";

function Informasi({ menuSelect, informasiPersil }) {
  var ItemInformasi = ({
    judul = "Belum terdapat judul",
    isi = "Belum terdapat isi",
  }) => {
    return (
      <div className="p-2 bg-sky-800 rounded-sm text-sm text-white mt-2">
        <div className=" font-semibold">{judul}</div>
        <div className=" text-xs mt-1">{isi}</div>
      </div>
    );
  };
  console.log(informasiPersil);
  return (
    <div
      className=" ml-[80px] px-2 w-[230px] z-10 h-[calc(100vh_+_81px)] fixed bg-white overflow-y-scroll sidebar py-1 duration-500"
      style={
        menuSelect == "Informasi"
          ? { marginLeft: "80px" }
          : { marginLeft: "-400px" }
      }
    >
      {informasiPersil ? (
        <div>
          {informasiPersil["ALAMAT"] ? (
            <ItemInformasi judul="Alamat" isi={informasiPersil["ALAMAT"]} />
          ) : (
            <ItemInformasi judul="Alamat" isi={informasiPersil["Alamat"]} />
          )}
          <ItemInformasi judul="Kode Pos" isi={informasiPersil["KODE_POS"]} />
          <ItemInformasi judul="Kecamatan" isi={informasiPersil["KECAMATAN"]} />
          <ItemInformasi judul="Kelurahan" isi={informasiPersil["KELURAHAN"]} />
        </div>
      ) : (
        <div className="w-full h-full texl-sm flex justify-center items-center">
          Belum ada informasi
        </div>
      )}
    </div>
  );
}

export default Informasi;
