import Link from "next/link"
export default function Forms(){

    return (

        <div>
            <h1 className="text-4xl font-semibold text-center uppercase my-8">Please Enter Your Bank Details</h1>
         <div>
            <form className="mt-10 flex gap-5 justify-center items-center flex-col">
                <input type="First Name" className ="py-2 px-4 w-2/5 rounded-2xl border border-red-800" 
                placeholder ="Enter your First Name"/>
                
                <input type="Last Name" className ="py-2 px-4 w-2/5 rounded-2xl border border-red-800" 
                placeholder ="Enter your Last Name "/>

                <input type="Card Number" className ="py-2 px-4 w-2/5 rounded-2xl border border-red-800" 
                placeholder ="Enter your Card Number"/>

                <input type="CVF" className ="py-2 px-4 w-2/5 rounded-2xl border border-red-800" 
                placeholder ="Enter your 3 code Passcode for the Card"/>
            
                <button className="py-3 px-3 bg-blue-500 rounded-lg text-white">
                    <Link href="/Thanks">Place Your Order</Link>
                    </button>            
            </form>
            </div>
        </div>
    )
}