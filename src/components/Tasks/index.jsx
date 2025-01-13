import Image from "next/image";
import UnderConstruction from "../Images/Underconstruction.jpg"

function Tasks() {

  return(
    <>
      <div className="flex justify-center">
        <Image src={UnderConstruction} alt="constructing process is going on..." />
      </div>
    </>
  )
}

export default Tasks