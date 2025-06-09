import { Photo } from "../page";
import Image from "next/image";


type Props = {
    params: Promise<{ id: number }>
}

const page = async ({ params }: Props) => {
   const { id } = await params
   const res = await fetch(`http://localhost:3000/api/gallery/${id}`)
   const data: Photo = await res.json()


    
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center py-6 px-4">
    {/* Image Section */}

    <div className="flex justify-center">
      <Image
        src={data.url}
        alt={data.title}
        width={500}
        height={1000}
        className="rounded-md object-contain"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col items-center text-center space-y-4">
      <h2 className="text-2xl font-semibold underline">{data.title}</h2>
    </div>
  </div>
)

}

export default page