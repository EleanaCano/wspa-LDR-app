"use client";

import { useState, useEffect, useRef, FormEventHandler } from 'react';
import { format } from 'date-fns';
import { Header } from '../components/header';

interface Comments {
    id: string;
    createdTime: string;
    fields: {
        content: string;
        episode_title: string;
        status: 'published' | 'pending-for-moderation';
    }
}

const formatDate = (date: string) => {
    return format(new Date(date), 'd.MM.Y HH:mm:ss');
}

function Comments() {
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [comments, setComments] = useState<Comments[] | null>(null);

    const loadComments = () => {
        fetch('/comments/api')
        .then(response => response.json())
        .then(data => {
            setComments(data);
        })
        .catch(() => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        loadComments();
    }, []);

    const handleSubmit: FormEventHandler  = (event) => {
        event.preventDefault();
        const commentContent = commentRef.current?.value || '';
        if (commentContent) {
            // console.log('handleSubmit', commentRef.current?.value);
            fetch('/comments/api', {
                method: 'POST',
                body: JSON.stringify({ commentContent: commentContent }),
            })
            .then(response => {
                if (response.ok) {
                    loadComments();
                }
            })
        }
    }

    return (
        <main className="bg-zinc-200 flex min-h-screen flex-col items-center text-black">
            <Header>Comments</Header>
            {/* {isError && <p>Error!</p>} */}
            {isError ? <p>Error!</p> : null}
            {isLoading && <p>Loading...</p>}
            <div className='grid grid-cols-3 items-center w-9/12 text-center shadow-xl p-10'>
                <div>
                    {comments && comments.map((elem) => {
                        return (
                            <div key={elem.id}>{elem.fields.content}</div>
                        )
                    })}
                </div>
                <div>
                    {comments && comments.map((elem) => {
                        return (
                            <div key={elem.id}>{elem.fields.status}</div>
                        )
                    })}
                </div>
                <div>
                    {comments && comments.map((elem) => {
                        return (
                            <div key={elem.id}>{formatDate(elem.createdTime)}</div>
                        )
                    })}
                </div>
            </div>
            <div className='mt-5 items-center text-center p-3 w-full'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="comment_body" className="block mb-2 text-sm font-medium text-gray-700">Your comment:</label>
                        <textarea id="comment_body" ref={commentRef} rows={4} placeholder='Write your comment here...'
                            className='text-sm w-6/12 text-gray-900 bg-gray-50 rounded-lg border border-gray-700'/>
                    </div>
                    <div>
                        <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Comments;
