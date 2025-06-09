import { Photo } from "@/app/gallery/page"
import Link from "next/link"
import Image from "next/image"



type Props = {
    params: Promise<{ id: number }>
}

const page = async ({params}: Props) => {
    const { id } = await params
    const res = await fetch (`http://localhost:3000/api/gallery/${id}`)
    const data: Photo = await  res.json()



 return (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-default">
    <div className="bg-white text-black p-4 w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-lg shadow-lg">
      
      {/* Close Button */}
      <div className="flex justify-end">
        <Link href="/gallery" className="text-red-600 text-xl hover:text-red-800 transition">
          ❌
        </Link>
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center space-y-4 mt-2">
        <Image
          width={300}
          height={300}
          src={data.thumbnailUrl}
          alt="Image"
          className="rounded-md object-cover"
        />
        
        <a
          href={`/gallery/${data.id}`}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition w-1/2 text-center"
        >
          View Image
        </a>
      </div>
    </div>
  </div>
);

}

export default page