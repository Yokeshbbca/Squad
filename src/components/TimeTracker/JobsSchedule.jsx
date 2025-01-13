"use client"
import Image from "next/image";
import UnderConstruction from "../Images/Underconstruction.jpg"

function JobsSchedule() {
  

  return(
    <>
      <div className="flex justify-center">
        <Image src={UnderConstruction} alt="" />
      </div>
    </>
  )
}

export default JobsSchedule