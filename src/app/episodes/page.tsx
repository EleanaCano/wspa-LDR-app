"use client";

import { useState, useEffect } from 'react';
import { Header } from '../components/header';

interface Episode {
    id: string;
    fields: {
        title: string;
        season: string;
    }
}

function Episodes() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [episodes, setEpisode] = useState<Episode[] | null>(null);

    useEffect(() => {
        fetch('/episodes/api')
        .then(response => response.json())
        .then(data => {
            setEpisode(data);
        })
        .catch(() => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, []);

    return (
        <main className="bg-zinc-200 flex min-h-screen flex-col items-center text-black">
            <Header>Episodes</Header>
            {/* {isError && <p>Error!</p>} */}
            {isError ? <p>Error!</p> : null}
            {isLoading && <p>Loading...</p>}
            <div className='grid grid-cols-2 items-center w-6/12 text-center shadow-xl p-10'>
                <div>
                    {episodes && episodes.map((elem) => {
                            return (
                                <div key={elem.id}>{elem.fields.title}</div>
                            )
                        })}
                </div>
                <div>
                    {episodes && episodes.map((elem) => {
                            return (
                                <div key={elem.id}>({elem.fields.season})</div>
                            )
                        })}
                </div>
            </div>
        </main>
    );
}

export default Episodes;
