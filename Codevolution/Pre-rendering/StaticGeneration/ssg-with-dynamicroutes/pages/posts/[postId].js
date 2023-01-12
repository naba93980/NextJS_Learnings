import React from 'react'

export default function Post({post}) {
  return (
    <div>
        <h2>{post.id} {post.title}</h2> 
        <p>{post. body}</p>
    </div>
    )
}

export async function getStaticProps(context) {
    console.log(context);
    const {params}=context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    return {
        props: {
            post: data
        }
    }
}