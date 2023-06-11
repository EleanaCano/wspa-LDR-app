import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch('https://api.airtable.com/v0/appDWQ8sTIykKJ7qz/episodes', {
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
        },

        next: {
            revalidate: 0,
        }
        
    });
    const data = await response.json();

    return NextResponse.json(data.records);
}