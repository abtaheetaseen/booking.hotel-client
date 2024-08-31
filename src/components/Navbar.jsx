import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import '../App.css';
import { SiHiltonhotelsandresorts } from 'react-icons/si';

const Navbar = () => {

    const user = false;

  return (
    <div className='absolute navbar z-10 shadow-sm px-4 mx-auto flex'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
        <span><SiHiltonhotelsandresorts className='text-2xl text-blue-500' /></span>
          <Link to="/" className='text-xl font-bold text-blue-500'>Booking.Hotel</Link>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 flex gap-3 text-blue-500'>
          {/* <NavLink to="/">
            <li>
              <div>Home</div>
            </li>
          </NavLink>

          <NavLink to="/ourServices">
            <li>
              <div>Host your home</div>
            </li>
          </NavLink> */}

          {
            !user && (
              <NavLink to="/login">
                <li>
                  <div>Login</div>
                </li>
              </NavLink>

            )
          }
        </ul>

        {
          user && (
            <>
              <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-10 rounded-full'>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex-col gap-3 text-black'
                >  

                  <NavLink to="/dashboard/profile">
                    <li>
                      <div>Dashboard</div>
                    </li>
                  </NavLink>

                  <li className=''>
              <button>
                Logout
                </button>
            </li>
                </ul>
              </div>
              
            </>
          )
        }
      </div>
    </div>
  )
}

export default Navbar