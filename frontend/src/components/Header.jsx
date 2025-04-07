import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export default function Header() {
    const { user, logout } = useUser();

    return (
        <header className='container mx-auto text-center bg-green-200 text-black p-6 flex justify-between md:justify-around items-center'>
            {user ? (
                <>
                    <div >
                        <Link to="/dashboard" className=' hover:text-blue-600 text-lg md:text-4xl font-semibold flex items-center gap-x-2'>
                            <img src="DarulkarimLogo.png" className='h-10 md:h-16 md:w-16 w-10 rounded-full' alt="" />Darulkarim Blogs
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            {/* It seems like this Link was duplicated, I've commented it out */}
                            {/* <Link to="/dashboard" className='text-2xl font-semibold flex items-center gap-x-2'>
                                <img src="DarulkarimLogo.png" className='h-10 w-10 rounded-full'  alt="" />Darulkarim
                            </Link> */}
                            <li className='font-semibold text-lg md:text-4xl hover:text-blue-700 '><button onClick={() => logout()}>Logout</button></li>
                        </ul>
                    </nav>
                </>
            ) : (
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}