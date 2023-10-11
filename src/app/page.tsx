"use client";

import TargetList from "@/components/list";
import { data } from "@/utils/data";
import { useState } from "react";

export default function Home() {
  const [listOne, setListOne] = useState(
    data.map((item) => ({ value: item, isChecked: false }))
  );
  const [listTwo, setListTwo] = useState(
    data.map((item) => ({ value: item + 5, isChecked: false }))
  );

  function handleChange(index: number, listNum: string) {
    if (listNum === "listOne") {
      setListOne((prev) => {
        return prev.map((val, i) =>
          i === index ? { ...val, isChecked: !val.isChecked } : val
        );
      });
    } else {
      setListTwo((prev) => {
        return prev.map((val, i) =>
          i === index ? { ...val, isChecked: !val.isChecked } : val
        );
      });
    }
  }

  function sendRight() {
    const checked = listOne.filter((item) => item.isChecked);
    if (!checked.length) return;

    const unchecked = listOne.filter((item) => !item.isChecked);
    setListOne(unchecked);

    setListTwo((prev) => [
      ...prev,
      ...checked.map((item) => ({ ...item, isChecked: false })),
    ]);
  }

  function sendLeft() {
    const checked = listTwo.filter((item) => item.isChecked);
    if (!checked.length) return;

    const unchecked = listTwo.filter((item) => !item.isChecked);
    setListTwo(unchecked);

    setListOne((prev) => [
      ...prev,
      ...checked.map((item) => ({ ...item, isChecked: false })),
    ]);
  }

  return (
    <div className="items-center flex m-5 gap-10 justify-center">
      <TargetList
        list={listOne}
        listNum="listOne"
        handleChange={handleChange}
      />
      <div className="flex flex-col">
        <button
          onClick={sendRight}
          className="h-12 w-12 border-2 border-none hover:bg-gray-400"
        >
          {">"}
        </button>
        <button
          onClick={sendLeft}
          className="h-12 w-12 border-2 border-none hover:bg-gray-400"
        >
          {"<"}
        </button>
      </div>
      <TargetList
        list={listTwo}
        listNum="listTwo"
        handleChange={handleChange}
      />
    </div>
  );
}
