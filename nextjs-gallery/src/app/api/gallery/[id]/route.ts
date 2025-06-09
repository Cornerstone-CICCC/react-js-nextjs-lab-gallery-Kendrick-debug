export const revalidate  = 100
import { Photo } from "@/app/gallery/page"

export async function GET(
    request: Request, 
    {params} : {params: Promise<{ id: string }>}
) {

    const { id } = await params

    const res = await fetch (`https://jsonplaceholder.typicode.com/photos/${id}`)
    const data: Photo = await res.json()

    const newPics: Photo = {
        ...data,
        url: "https://placehold.co/300x300",
        thumbnailUrl: "https://placehold.co/300x300"
    }


    return Response.json(newPics)

}