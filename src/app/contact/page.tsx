import Link from "next/link";
import { Header } from '../components/header';

function Contact() {
    return (
        <main className="bg-zinc-200 flex min-h-screen flex-col items-center">
            <Header>Contact</Header>

            <p className="text-black justify-center">To contact the creator of this app  (◕‿−)</p>
      
            <div className="grid grid-cols-3 lg:grid-cols-2 relative gap-x-8 gab-y-16 px-4 pt-12 sm:pt-20 text-black text-center center">
                <div className="rounded-xl shadow-2xl">
                    <div className="p-8 content-center w-full">
                        <img className="ml-40 pl-10" src='/facebook_logo.png' width={80}></img>
                        <h3 className="font-bold text-2xl my-6">Facebook</h3>
                        <p className="text-gray-600 text-xl text-center">https://www.facebook.com/nicol.sosa.35912</p>
                    </div>
                </div>
                <div className="rounded-xl shadow-2xl">
                    <div className="p-8">
                        <img className="ml-40 pl-5" src='/instagram-logo.jpg' width={80}></img>
                        <h3 className="font-bold text-2xl my-6 text-center">Instagram</h3>
                        <p className="text-gray-600 text-xl text-center">@eleanancano</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;