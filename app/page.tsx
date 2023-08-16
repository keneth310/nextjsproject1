import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-white text-black">
      <div className="relative w-full flex justify-center mb-4">
          <h2 className="text-lg font-semibold mt-10">
            Computer Science Major Tracker
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
                <ul className="pl-6">
                  <li>
                    <label>
                      <input type='checkbox'/> CSCI 51 (optional)
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" /> CSCI 54
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" /> CSCI 62
                    </label>
                  </li>
                </ul>
              </div>

              {/* Section 2: 3 core courses */}
              <div>
                <h3 className="font-semibold">Core Courses</h3>
                <ul className="list-none pl-6">
                  <li>
                    <label>
                      <input type="checkbox" /> CSCI 101
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" /> CSCI 105
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" /> CSCI 140
                    </label>
                  </li>
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
          <div className="ml-4 p-2 bg-transparent my-4 rounded-lg border border-gray-100 h-full">
            {/* column 2 */}
            <div className="flex flex-col space-y-2">
              <h2 className='font-bold'>Your Progres</h2>

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
        






      </div>
      
    </main>
  )
}