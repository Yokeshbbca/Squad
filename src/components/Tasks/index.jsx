"use client"
import Image from "next/image";
import UnderConstruction from "../Images/Underconstruction.jpg"
import { useEffect } from "react";

function Tasks() {
  
  useEffect(() => {
      document.title = "Tasks | Squad"
    }, [])
  
  return(
    <>
      <div className="flex justify-center">
        <Image src={UnderConstruction} alt="constructing process is going on..." />
      </div>
    </>
  )
}

export default Tasks