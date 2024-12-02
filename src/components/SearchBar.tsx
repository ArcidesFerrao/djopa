"use client";

import React, { useState } from "react";

export default function SearchBar() {
  const [info, setInfo] = useState("");

  return (
    <div className=" flex items-center justify-center shadow-[5px_10px_3px_-4px_rgba(0,_0,_0,_0.15)] py-2 px-4 w-1/2">
      <input
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        className="w-full"
        type="text"
        placeholder="Encontre vagas..."
      />
      <button onClick={() => setInfo("")}>Clear</button>
    </div>
  );
}
