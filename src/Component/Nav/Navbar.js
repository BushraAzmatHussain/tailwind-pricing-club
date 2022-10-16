import React, { useState } from 'react';
import Link from '../Link/Link';
import { BiMenu } from 'react-icons/bi';
import { HiOutlineX } from "react-icons/hi";


const Navbar = () => {
    const [open, setopen] = useState(false);
    const routes = [
        {id: 1 , name: 'Home', link:'/home'},
        {id: 2 , name: 'Shop', link:'/shop'},
        {id: 3 , name: 'Deals', link:'/deals'},
        {id: 4 , name: 'Coupons', link:'/coupons'},
        {id: 1 , name: 'Contact', link:'/contact'}
    ]
    return (
        <nav>
            <div onClick={()=>setopen(!open)} className='md:hidden' >
               {open ? <HiOutlineX></HiOutlineX> : < BiMenu/> } 
            </div>
       
             <ul className= {`md:flex justify-center absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                 {
                     routes.map(route => <Link
                         key={route.id}
                         route = {route}
                         ></Link>)
                 }
             </ul>
         </nav>
    );
};

export default Navbar;