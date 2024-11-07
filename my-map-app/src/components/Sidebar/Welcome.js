import React from "react";

function Welcome({ menuSelect }) {
  return (
    <div
      className="w-[230px] p-2 ml-[80px] z-10 h-[calc(100vh_-_81px)] mb-1 fixed bg-white overflow-y-scroll sidebar py-2 duration-500"
      style={
        menuSelect == "Home" ? { marginLeft: "80px" } : { marginLeft: "-400px" }
      }
    >
      <div className="font-semibold">Selamat Datang</div>
      <div className="text-xs mt-2 text-gray-600 text-justify">
        Penelitian tentang Penyusunan Standar Nasional dan Sistem Geocoding
        Alamat Wilayah Perkotaan dan Perdesaan Indonesia dilaksanakan oleh Tim
        Peneliti dari DIrektorat Penelitian UGM bekerja sama dengan Badan
        Informasi Geospasial dengan pendanaan oleh LPDP melalui skema Riset
        Inovatif-Produktif tahun 2019 – 2022.
      </div>
      <div className="text-xs mt-2 text-gray-600 text-justify">
        Salah satu hasil penelitian adalah SNI 9037:2021 tentang Pengalamatan di
        Perkotaan dan Perdesaan. Website ini menyajikan hasil uji implementasi
        alamat yang memiliki geocode sehingga memudahkan pencarian suatu lokasi.
      </div>
      <div className="text-xs mt-2 text-gray-600 text-justify">
        Uji Implementasi dilaksanakan di Jakarta, Semarang, Manado, Kulon Progo,
        dan Klungkung. Informasi lebih lanjut dapat diperoleh dari Ketua Tim
        Peneliti Heri Sutanta, Ph.D. melalui email herisutanta@ugm.ac.id.
      </div>
    </div>
  );
}

export default Welcome;
