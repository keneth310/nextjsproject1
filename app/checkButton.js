"use client";
import React, { useState } from 'react';

export default function CheckboxButton({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="border border-black mb-2">
      <label
        className={`block cursor-pointer p-2 border border-black ${
          isChecked
            ? 'bg-[#5DF91482]'
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        <input
          className="hidden"
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />{' '}
        {label}
      </label>
    </li>
  );
}
