import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSLPASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export async function fetchphoto(query,per_page=20){
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })

    console.log(res)
}

export async function fetchvideo(query,per_page=20){
    const res = await axios.get('https://api.pexels.com/videos/search',{
        params:{query,per_page},
        headers:{Authorization:PEXELS_KEY}
    })

    console.log(res.data.videos)
}