import React, { useState } from 'react'
import Link from 'next/link';

export default function CommentsPage() {
    const [comments, setComments] = useState(null);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        console.log(data);
    }

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        console.log(data);
        fetchComments();
    }

    return (
        <div>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            {comments && comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        {comment.id}  {comment.text}
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        <Link href={`/comments/${comment.id}`}>Goto detail</Link>
                    </div>
                )
            })}
        </div>
    )
}
