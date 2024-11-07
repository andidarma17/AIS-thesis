import React from "react";

function ItemMenu({
  icon,
  nama = "belum dinamai",
  setMenuSelect,
  menuSelect,
  lebarSidebar,
}) {
  return (
    <div
      className="py-2 mx-1 mb-2 px-1 text-xs font-medium text-primary flex flex-col items-center border-2  hover:bg-sky-100 hover:border-2 rounded-lg hover:border-primary hover:cursor-pointer"
      onClick={() => {
        if (menuSelect === nama) {
          setMenuSelect({ nama: "reset", lebarSidebar: 0 });
        } else {
          setMenuSelect({ nama: nama, lebarSidebar: lebarSidebar });
        }
      }}
    >
      {icon}
      <div className="text-center text-xs mt-1">{nama}</div>
    </div>
  );
}

export default ItemMenu;
