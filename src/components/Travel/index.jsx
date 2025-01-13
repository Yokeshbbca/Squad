"use client"
import Image from "next/image";
import UnderConstruction from "../Images/Underconstruction.jpg"
import { useEffect } from "react";

function Travel() {

  useEffect(() => {
      document.title = "Travel | Squad"
    }, [])

  return(
    <>
      <div className="flex justify-center">
        <Image src={UnderConstruction} alt="constructing process is going on..." />
      </div>
    </>
  )
}

export default Travel