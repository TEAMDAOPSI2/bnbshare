import Link from "next/link";
import {useState} from "react";
import logo from 'public/assets/stake-logo.svg';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#333');
    return (
        <div style={{backgroundColor: `${color}`}} className='left-0 shadow w-full ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex items-center p-3 justify-between'>
                <div className="flex flex-row">
                    <Link href='/'>
                        <img src={logo.src} alt=""/>
                    </Link>
                    <ul style={{color: `${textColor}`}} className='hidden ml-3 sm:flex'>
                        <li className='p-3'>
                            <Link href='/'>Properties</Link>
                        </li>
                        <li className='p-3'>
                            <Link href='/'>About</Link>
                        </li>
                        <li className='p-3'>
                            <Link href='/'>Sell</Link>
                        </li>
                        <li className='p-3'>
                            <Link href='/'>Learn</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='ml-3 sm:flex'>
                        <li className='p-3'>
                            <Link href='/' className="p-3 rounded-md border font-semibold hover:bg-emerald-400 hover:border-emerald-400">Login</Link>
                        </li>
                        <li className='p-3'>
                            <Link href='/' className="p-3 bg-emerald-300 rounded-md font-semibold hover:bg-emerald-400">
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;