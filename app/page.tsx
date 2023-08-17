import Image from 'next/image'
"use client";
import React, { useState } from 'react';
import CheckboxButton from './checkButton';


export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const selectedItemCount = selectedItems.length;


  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // const handleSubmit = () => {

  // };
  

  return (
    <main className="flex flex-col justify-between bg-white font-mono">
      <div className="relative w-full flex justify-center mb-4">
          <h2 className="text-xl font-semibold mt-10 flex items-center justify-center">
            Pomona Computer Science Major Tracker
          </h2>
      </div>

      <div className="flex flex-row space-x-4 mb-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="ml-4 mr-4 p-2 bg-transparent my-4 border border-black h-full w-[700px] flex items-center justify-center">
            {/* column 1 */}
            <div className="flex flex-col space-y-2">
              <h2 className='font-bold'>Pomona Computer Science Major Requirements</h2>

              {/* Section 1: 2-3 intro courses */}
              <div>
                <h3 className="font-semibold">Intro Courses</h3>
                <ul className="pl-6">
                  <CheckboxButton label="CSCI51: Intro to CS" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI54: Discrete Math and Functional Programming" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI62: Data Structures and Advanced Programming" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                </ul>
              </div>



              {/* Section 2: 1 math course */}
              <div>
                <h3 className="font-semibold">Math Course</h3>
                <ul className="list-none pl-6">
                  <CheckboxButton label="MATH58: Intro to Statistics" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="MATH60: Linear Algebra" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>

                </ul>
              </div>

              {/* Section 3: 3 core courses */}
              <div>
                <h3 className="font-semibold">Core Courses</h3>
                <ul className="list-none pl-6">
                  <CheckboxButton label="CSCI101: Intro to Languages and Theory of Computation" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems} />
                  <CheckboxButton label="CSCI105: Computer Systems" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI140: Algorithms" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>

                </ul>
              </div>

              {/* Section 4: 3 elective courses */}
              <div>
                <h3 className="font-semibold">3 Elective Courses</h3>
                <ul className="list-none pl-6">
                  <CheckboxButton label="CSCI124: User Interfaces and User Experience" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI131: Programming Languages" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI133: Database Systems" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI134: Operating Systems Principles" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI143: Applied Algorithms" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI151: Artificial Intelligence" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/> 
                  <CheckboxButton label="CSCI152: Neural Networks" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI158: Machine Learning" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI159: Natural Language Processing" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI181G: Real-Time Graphics and Game Engine Programming" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI181N: Advanced Functional Programming" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI181OR: Computer Organization and Design" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI181Q: Graph Algorithm and Application" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>
                  <CheckboxButton label="CSCI181S: System Security" selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}/>

                </ul>
              </div>

              {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={handleSubmit}>
                Submit
              </button> */}

              {/* new section with progress */}
              <div className="mt-6">
                <h3 className="font-semibold">Selected Items</h3>
                <ul className="list-none pl-6">
                  {selectedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-2">Count: {selectedItemCount}</p>



            </div>
          </div>
        </div>





      </div>
      
    </main>
  )
}