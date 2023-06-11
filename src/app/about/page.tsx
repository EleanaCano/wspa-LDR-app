import Link from "next/link";
import { Header } from '../components/header';

export default function About() {
    return (
        <main className="bg-zinc-200 flex min-h-screen flex-col items-center">
            <Header>About</Header>
      
            <p className="text-black mt-5 px-24 justify-center text-justify">
                This collection of animated short stories spans several genres, including science fiction, fantasy, horror and comedy. 
                World-class animation creators bring captivating stories to life in the form of a unique and visceral viewing experience. 
                The animated anthology series includes tales that explore alternate histories, life for robots in a post-apocalyptic city and a plot for world domination by super-intelligent yogurt. 
                Among the show's executive producers is Oscar-nominated director David Fincher.
            </p>

            <div className="grid md:grid-cols-3 gap-1 text-center mt-10 px-24">
                <div className="border py-8 rounded-xl shadow-xl px-3 m-2">
                    <p className="text-3xl font-bold text-indigo-600">David Fincher</p>
                    <p className="text-3xl font-bold text-indigo-600">& Tim Miller</p>
                    <p className="text-gray-400 mt-2">Program Creators</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl px-3 m-2">
                    <p className="text-3xl font-bold text-indigo-600">Adult animation,</p>
                    <p className="text-3xl font-bold text-indigo-600">Dark comedy, </p>
                    <p className="text-3xl font-bold text-indigo-600">Science fantasy</p>
                    <p className="text-gray-400 mt-2">Genres</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl px-3 m-2">
                    <p className="text-3xl font-bold text-indigo-600">Netflix</p>
                    <p className="text-3xl font-bold text-indigo-600">Adapted by: Heavy Metal</p>
                    <p className="text-gray-400 mt-2">Original Network</p>
                </div>
            </div>
        </main>
    );
}
