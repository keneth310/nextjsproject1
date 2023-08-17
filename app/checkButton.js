"use client";
import React, { useState, useEffect } from 'react';

export default function CheckboxButton({ label, selectedItems, setSelectedItems }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // When the selectedItems array changes, update the isChecked state accordingly
    setIsChecked(selectedItems.includes(label));
  }, [selectedItems, label]);

  const toggleCheckbox = () => {
    const newSelectedItems = [...selectedItems];
    // add it to the general array: 
    if (isChecked) {
      const index = newSelectedItems.indexOf(label);
      if (index !== -1) {
        newSelectedItems.splice(index, 1);
      }
    } else {
      newSelectedItems.push(label);
    }
    setSelectedItems(newSelectedItems);
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
