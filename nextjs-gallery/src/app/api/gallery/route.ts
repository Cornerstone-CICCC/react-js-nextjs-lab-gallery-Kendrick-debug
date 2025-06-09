import { Photo } from "@/app/gallery/page"

export const revalidate = 200


export async function GET() {
   const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=30`)
   const data = await res.json()  

    const newPics: Photo[] = data.map(( photo: Photo ) => {
        const newPhoto = {
            ...photo,
            url: "https://placehold.co/300x300",
            thumbnailUrl: "https://placehold.co/300x300"
        }
        return newPhoto
    })
    
    return Response.json(newPics)
}

