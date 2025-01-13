"use client"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import WithMe from "./WithMe"
import WithRole from "./WithRole"

function Files() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
      document.title = "Files | Squad"
    }, [])

  const components = [
    {
      name: "Shared with Me",
      id: 0
    }, {
      name: "Shared with My Role",
      id: 1
    }
  ]

  const handleClick = (id) => {
    setIndex(id);
  }

  return(
    <>
      <div>
        <div>
          <ul className="flex gap-1 lg:ml-2 overflow-y-auto">
            {components.map((item, i) => <li key={i}>
              <Button 
              variant="secondary" 
              onClick={() => handleClick(item.id)}
              className={index===i ? "border-b-2 border-blue-900 rounded-none": "" + "hover:border-b-2 border-blue-900 border-opacity-70 rounded-none"}>
                {item.name}
              </Button>
            </li>)}
          </ul>
        </div>
        <div>
          {index === 0 ? <WithMe /> : <WithRole />}
        </div>
      </div>
    </>
  )
}

export default Files