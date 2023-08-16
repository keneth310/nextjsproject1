"use client";
import React, { useState } from 'react';

export default function CheckboxButton({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="rounded-lg border border-black">
      <label
        className={`block cursor-pointer p-2 rounded-lg ${
          isChecked
            ? 'bg-green-400 text-white'
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
