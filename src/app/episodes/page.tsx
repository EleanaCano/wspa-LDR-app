"use client";

import { useState, useEffect } from 'react';
import { Header } from '../components/header';

const mockEpisodes = [{
    id: 1,
    title: 'Title one',
    season: 'Season 1'
}, {
    id: 2,
    title: 'Title two',
    season: 'Season 2'
}];

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
        <main className="mt-6">
            <Header>Episodes</Header>
            {/* {isError && <p>Error!</p>} */}
            {isError ? <p>Error!</p> : null}
            {isLoading && <p>Loading...</p>}
            <div>
                {episodes && episodes.map((elem) => {
                    return (
                        <div key={elem.id}>{elem.fields.title} ({elem.fields.season})</div>
                    )
                })}
            </div>
        </main>
    );
}

export default Episodes;
