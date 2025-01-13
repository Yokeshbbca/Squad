"use client"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import Surveys from "./Surveys"

function EmployeeEngagement() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
      document.title = "Employee | Squad"
    }, [])

  const components =[
    {
      name: "Surveys",
      id: 0
    }
  ]

  return(
    <>
      <div>
        <div>
          <ul className="flex gap-1 lg:ml-2 overflow-y-auto">
            {components.map((item, i) => <li key={i}>
              <Button 
              variant="secondary"
              className={index===i ? "border-b-2 border-blue-900 rounded-none": "" + "hover:border-b-2 border-blue-900 border-opacity-70 rounded-none"}>
                {item.name}
              </Button>
            </li>)}
          </ul>
        </div>
        <div>
          <Surveys />
        </div>
      </div>
    </>
  )
}

export default EmployeeEngagement