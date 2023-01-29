import Link from 'next/link';

export default function PostList({posts}){
    return (
        <div>
        <h1>List of posts</h1>
        {
            posts.map((post)=>{
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`}>{`go to post ${post.id}`}</Link>
                        <h3>{post.id} {post.title}</h3>
                        <hr />
                    </div>
                )
            })
        }
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            posts: data
        }
    }
}
