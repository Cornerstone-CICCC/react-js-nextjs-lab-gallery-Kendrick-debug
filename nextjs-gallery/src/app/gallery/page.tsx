import Link from "next/link"

export interface Photo {
    id: number,
    title: string
    url: string
    thumbnailUrl: string

}

const fetchImages = async () => {
   const res = await fetch('http://localhost:3000/api/gallery')
   const data = await res.json()
   return data 
}

const page = async () => {
    const photos: Photo[]  = await fetchImages()

 return (
  <div className="flex flex-col items-center">
    <h1 className="text-2xl font-semibold mb-6">My Gallery</h1>
    
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
      {photos.map((p) => (
        <Link
          key={p.id}
          href={`/gallery/${p.id}`}
          className="flex items-center justify-center p-1 hover:scale-105 transition-transform duration-200"
        >
          <img
            src={p.thumbnailUrl}
            alt={`Thumbnail ${p.id}`}
            className="rounded-lg w-24 h-24 object-cover"
          />
        </Link>
      ))}
    </section>
  </div>
);
}

export default page