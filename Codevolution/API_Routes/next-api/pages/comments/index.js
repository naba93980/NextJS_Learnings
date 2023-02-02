import React, { useState } from 'react'

export default function CommentsPage() {
    const [comments, setComments] = useState(null);

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }
    return (
        <div>
            <button onClick={fetchComments}>Load Comments</button>
            {comments&&comments.map((comment)=>{
                return (
                    <div key={comment.id}>
                        {comment.id}  {comment.text}
                    </div>
                )
            })}
        </div>
    )
}
