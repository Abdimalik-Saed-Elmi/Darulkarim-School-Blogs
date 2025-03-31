import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export default function Header() {

    const { user, logout } = useUser();

    return (
        <header className='container mx-auto bg-blue-400 text-black p-4 flex justify-between items-center'>
            <div >
               
                <Link to="/" className='text-2xl font-simibold flex items-center gap-x-2'> <img src="DarulkarimLogo.png" className='h-10 w-10 rounded-full'  alt="" />Darulkarim</Link>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    {user ?
                        <>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><span className='text-lg font-bold'>{user?.username}</span></li>
                            <button onClick={() => logout()}>Logout</button>
                        </>
                        :
                        <>
                            <li className=''><Link to='/register'>Register</Link></li>
                            <li><Link to='/login'>Login</Link> </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}
