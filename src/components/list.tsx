"use client";

import React from "react";

export default function TargetList({
  list,
  listNum,
  handleChange,
}: {
  list: { value: number; isChecked: boolean }[];
  listNum: string;
  handleChange: (index: number, listNum: string) => void;
}) {
  return (
    <div className="items-center flex flex-col justify-center gap-3 text-white h-[200px]">
      {list.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="checkbox"
            name={String(item.value)}
            value={item.value}
            checked={item.isChecked}
            className="text-white"
            onChange={() => handleChange(index, listNum)}
          />
          <label htmlFor={String(item.value)}>{item.value}</label>
        </div>
      ))}
    </div>
  );
}
