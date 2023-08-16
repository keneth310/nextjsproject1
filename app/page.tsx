import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <div className="relative w-full flex justify-center mb-4">
          <h2 className="text-lg font-semibold mt-10">
            Welcome to the Computer Science Major Tracker!
          </h2>
      </div>

      <div className="flex flex-row space-x-4">
        <div className="flex-1">
          <div className="ml-4 p-2 bg-transparent my-4 rounded-lg border border-gray-100 h-full">
            {/* column 1 */}
            <div className="flex flex-col space-y-2">
              <h2 className='font-bold'>Pomona Computer Science Major Requirements</h2>

              {/* Section 1: 2-3 intro courses */}
              <div>
                <h3 className="font-semibold">Intro Courses</h3>
                <ul className="list-disc pl-6">
                  <li>CSCI 51 (optional)</li>
                  <li>CSCI 54</li>
                  <li>CSCI 62</li>
                </ul>
              </div>

              {/* Section 2: 3 core courses */}
              <div>
                <h3 className="font-semibold">3 Core Courses</h3>
                <ul className="list-disc pl-6">
                  <li>CSCI 101</li>
                  <li>CSCI 105</li>
                  <li>CSCI 140</li>
                </ul>
              </div>

              {/* Section 3: 1 math course */}
              <div>
                <h3 className="font-semibold">1 Math Course</h3>
                <ul className="list-disc pl-6">
                  <li>MATH 58</li>
                  <li>MATH 60</li>
                </ul>
              </div>

              {/* Section 4: 3 elective courses */}
              <div>
                <h3 className="font-semibold">3 Elective Courses</h3>
                <ul className="list-disc pl-6">
                  <li>Elective Course 1</li>
                  <li>Elective Course 2</li>
                  <li>Elective Course 3</li>
                  <li>List of elective courses goes on ...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="p-2 bg-transparent my-4 rounded-lg border border-gray-100">
            {/* Column 2 */}
            <div className="flex flex-col space-y-2">
              <button className="flex items-center w-full text-left my-6">
                <div>
                  <p className="text-sm font-bold uppercase">Introductory courses</p>
                  <p className="text-sm opacity-50">0/3 completed | 6 options</p>
                </div>
                <span className="flex-shrink-0 ml-auto pl-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"> </polyline>
                  </svg>
                </span>
              </button>
              {/* ...more content */}
            </div>
          </div>
        </div>





      </div>


        {/* <div className="bg-transparent border-2 rounded-md p-4 w-full md:w-auto mb-4 md:mb-0 flex flex-col items-start">
          <ul className="pl-2 text-white">
            <li className="text-xs">Answer school-related questions for educators 24/7</li>
            <li className="text-xs">Give suggestions for school-based work and idea generation</li>
          </ul>
        </div> */}
      
    </main>
  )
}