import { useEffect, useState } from "react"
import { axiosInstance } from "./auth.service"
import { Post } from "./types/Post"

function Posts() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        axiosInstance.get('/posts/')
            .then(res => {
                console.log('res', res)
                setPosts(res.data.results)
            })
            .catch(err => console.error('err', err))
    }, [])

    return (
        <>
            <h2>Posts</h2>
            {posts?.map((p, i) => (
                <article key={i}>
                    <h3>{p.title}</h3>
                    {/* <p>{p.author}</p> */}
                    <p>{p.body}</p>
                </article>
            ))}
        </>
    )
}

export default Posts