import React from "react";

export default function SearchBar() {
  return (
    <div className=" flex items-center justify-center shadow-[5px_10px_3px_-4px_rgba(0,_0,_0,_0.15)] py-2 px-4 w-1/2">
      <input className="w-full" type="text" placeholder="Encontre vagas..." />
      <button>Clear</button>
    </div>
  );
}
