"use client"
import Image from "next/image";
import UnderConstruction from "../Images/Underconstruction.jpg"

function Calendar() {

  return(
    <>
      <div className="flex justify-center">
        <Image src={UnderConstruction} alt="constructing process going on..." />
      </div>
    </>
  )
}

export default Calendar