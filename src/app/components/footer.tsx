import Link from "next/link";

export default function Footer(){
    return(
        <div >
            <footer>
                <nav className="flex flex-col text-black align-bottom border border-solid border-white bg-gray-200 w-full h-20 justify-around items-center ">
                    <Link href = "https://www.linkedin.com/in/kashif-ahmed-539971120" target = "_blank" className= "hover:font-bold"> Designed By: Kashif Ahmed</Link>
                    <Link href = "/" className= "hover:font-bold">Home Page</Link>
                </nav>
            </footer>

        </div>
    )
}