import Image from "next/image";

export default function Thanks (){
    return (
        <div className=" w-full flex flext-col justify-center items-center ">
            <Image src="/thanks.png" alt="Thank You" className="items-center my-16"
            width={1200}
            height={1500}
            />

        </div>
        
    )
}