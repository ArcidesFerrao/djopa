"use client";

import React, { useState } from "react";

export default function SearchBar() {
  const [info, setInfo] = useState("");

  return (
    <div className=" flex items-center justify-center shadow-[4px_4px_5px_0px_rgba(0,_0,_0,_0.15)] py-2 px-2 w-1/2 rounded-sm">
      <input
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        className="w-full"
        type="text"
        placeholder="Encontre vagas..."
      />
      <button
        onClick={() => setInfo("")}
        className="flex items-center justify-center border-l-2 px-2"
      >
        <span className="line-md--close-circle-filled"></span>
      </button>
    </div>
  );
}
