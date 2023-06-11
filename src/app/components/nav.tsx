import Link from 'next/link';

function Nav() {
    return(
        <header className='border-b border-gray-300 py-2'>
            <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%]'>
                <img src='/logo.png' width={70} height={50}></img>

                <nav className="flex items-center w-auto">
                    <ul className='text-base text-white-600 flex justify-between'>
                        <li className='px-5 py-2 hover:text-pink-400'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='px-5 py-2 hover:text-pink-400'>
                            <Link href="/about">About</Link>
                        </li>
                        <li className='px-5 py-2 hover:text-pink-400'>
                            <Link href="/episodes">Episodes</Link>
                        </li>
                        <li className='px-5 py-2 hover:text-pink-400'>
                            <Link href="/comments">Comments</Link>
                        </li>
                        <li className='px-5 py-2 hover:text-pink-400'>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;