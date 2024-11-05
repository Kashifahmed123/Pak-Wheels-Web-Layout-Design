import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="flex flex-col bg-white space-y-9 py-10 h-full">
      <div className="flex flex-row w-11/12 mx-16 float-left my-5">
        <fieldset className="flex flex-auto border border-solid border-gray-500 w-3/5 h-auto py-10 mt-4 mx-28 space-x-1 my-4">
          <legend className=" flex flex-auto font-serif text-center font-bold mx-4 text-2xl px-3">
            Sell Your Car on PakWheels and Get the Best Price
          </legend>
          <div className="flex flex-col  h-auto w-2/5 my-3 ml-2 space-y-2 justify-center">
            <div className="flex flex-row float-left text-center">
              <h1 className="font-serif text-center font-bold mx-10 text-blue-900 text-xl">
                Post Your Ad on PakWheels{" "}
              </h1>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
                Post Your Ad for free in 3 Easy Steps{" "}
              </h2>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
                Get Genuine offers from Vrified Buyers{" "}
              </h2>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
                Sell your car Fast at the Best Price{" "}
              </h2>
            </div>
            <button className="border border-solid hover:bg-red-700 bg-red-600 py-2 px-2 font-serif text-sm text-white mx-10 mb-2 w-40 rounded-lg">
              Post Your Ad
            </button>
          </div>

          <div className="flex flex-col h-auto w-32 my-3 ml-2 space-y-2 justify-center">
            <h1 className="font-serif text-right font-bold mx-10 text-gray-700 text-xl">
              OR
            </h1>
          </div>
          <div className="flex flex-col h-auto w-2/5 my-3 ml-2 space-y-2 justify-center">
            <div className="flex flex-row float-left text-center">
              <h1 className="font-serif text-left w-80 font-bold mx-10 text-blue-900 text-xl">
                Try PakWheels Sell It For Me{" "}
              </h1>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
                Dedicated Sales Expert to Sell your Car{" "}
              </h2>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
                We Bargain for you and share the Best Offer{" "}
              </h2>
            </div>
            <div className="flex flex-row float-left text-center">
              <h2 className="font-serif text-center mx-10 text-gray-700 text-sm">
                We ensure Safe & Secure Transaction{" "}
              </h2>
            </div>
            <button className="border border-solid hover:bg-blue-600 bg-blue-500 py-2 px-2 font-serif text-sm text-white mx-10 mb-2 w-40 rounded-lg">
              Register Your Car
            </button>
          </div>
        </fieldset>
      </div>
      <div className= "bg-gray-100">
      <div className="flex flex-col w-11/12 mx-16 float-left  h-auto space-y-9">
        <div className="flex flex-row w-full h-auto float-left  gap-10 space-x-96">
          <div className="float-left w-2/4 h-auto px-1 py-1 "> 
          <h1 className="font-serif text-gray-700 font-semibold text-xl my-8">Featured New Cars</h1></div>
          <div className=" flex flex-row justify-end float-left w-1/1  h-auto px-1 py-2 ">
          <h2 className="font-serif cursor-pointer text-sm text-blue-700 text-right px-1 pl-5 my-8 hover:font-bold">
            View All New Cars</h2>
          </div>
        </div>
        <div className="flex flex-row mx-1">
          <nav className="flex flex-row space-x-2 w-11/12">
            <ul className="flex flex-row space-x-10 border border-l-0 border-r-0 border-t-0 py-2 border-gray-600 w-full ">
              <li className=" no-underline hover:underline underline-offset-8 decoration-blue-500">
                <h2 className="font-serif text-gray-700 font-medium hover:font-bold">Popular</h2>
                </li>
              <li className=" no-underline hover:underline underline-offset-8 decoration-blue-500">
                <h2 className="font-serif text-gray-700 font-medium hover:font-bold">Upcoming</h2>
                </li>
              <li className=" no-underline hover:underline underline-offset-8 decoration-blue-500">
                <h2 className="font-serif text-gray-700 font-medium hover:font-bold">Newly Launched</h2>
                </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row w-full h-auto space-x-6">
        <div className="flex flex-col float-left w-3/12 h-auto bg-white py-2 px-2 space-y-4 items-center">
        <div className="w-52 h-40 py-7">
          <Image src="/corolla.jpg" alt="Toyota Corolla" className="object-fill"
          width={500}
          height={500}
          />
        </div>
        <div className="flex items-center flex-col">
          <Link href="/ToyotaCorolla" className="font-serif text-blue-900 text-sm font-semibold hover:font-bold" >Toyota Corolla</Link>
          <h2 className="font-serif text-green-500 text-sm">PKR 59.7 - 75.5 lacs</h2>
        </div>

        </div>
        <div className="flex flex-col float-left w-3/12 h-auto bg-white py-2 px-2 space-y-4 items-center">
        <div className="w-52 h-40 py-1 object-fill">
          <Image src="/alto.jpg" alt="Suzuki Alto" className="object-fill" 
          width={500}
          height={500}
          />
        </div>
        <div className="flex items-center flex-col">
          <h2 className="font-serif text-blue-900 text-sm font-semibold hover:font-bold"> 
            < Link href="/Alto" >Suzuki Alto</Link> </h2>
          <h2 className="font-serif text-green-500 text-sm">PKR 23.3 - 30.5 lacs</h2>
        </div>

        </div>
        <div className="flex flex-col float-left w-3/12 h-auto bg-white py-2 px-2 space-y-4 items-center">
        <div className="w-52 h-40 py-9">
          <Image src="/city.jpg" alt="Honda City" className="object-fill"
          width={500}
          height={500}
          />
        </div >
        <div className="flex items-center flex-col text-justify" >
          <h2 className="font-serif text-blue-900 text-sm font-semibold hover:font-bold"> 
            <Link href="/City" >Honda City</Link> </h2>
          <h2 className="font-serif text-green-500 text-sm oldstyle-nums">PKR 46.5- 58.5 lacs</h2>
        </div>

        </div>
        <div className="flex flex-col float-left w-3/12 h-auto bg-white py-1 px-2 space-y-4 items-center space-y-">
        <div className="w-52 h-40 py-7">
          <Image src="/civic.jpg" alt="Honda Civic" className="object-fill" 
          width={500}
          height={500}
          />
        </div>
        <div className="flex items-center flex-col" >
          <h2 className="font-serif text-blue-900 text-sm font-semibold hover:font-bold"> 
            <Link href="/Civic" >Honda Civic</Link> </h2>
          <h2 className="font-serif text-green-500 text-sm">PKR 86.6 - 99.0 lacs</h2>
        </div>
        <div>
        </div>
          <br></br>
          <br>
          </br>
          <br>
          </br>
        </div>
        
        </div>

        </div>

      </div>
      <div className="w-full h-96">

      </div>

    </div>
  );
}