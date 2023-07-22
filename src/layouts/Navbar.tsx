import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import { HiOutlineSearch } from 'react-icons/hi';
import logo from '../assets/images/logo.png';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { signOut } from 'firebase/auth';
import app from '@/lib/Firebase';
import { setUser } from '@/redux/user/userSlice';
import auth from '@/lib/Firebase';

export default function Navbar() {

  const { user } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log('Logout');
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };

  return (
    // <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
    //   <div className="h-full w-full bg-white/60">
    //     <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
    //       <div>
    //         <img className="h-8" src={logo} alt="log" />
    //       </div>
    //       <div>
    //         <ul className="flex items-center">
    // <li>
    //   <Button variant="link" asChild>
    //     <Link to="/">Home</Link>
    //   </Button>
    // </li>
    // <li>
    //   <Button variant="link" asChild>
    //     <Link to="/book">All Book</Link>
    //   </Button>
    // </li>


    // <li>

    //   {
    //     user.email ?
    //       <>
    //          <Button variant="link" ><Link to="/add">Add New Books</Link></Button>
    //         <Button onClick={handleLogout} variant="link" ><p>Sign Out</p>
    //         </Button>
    //       </>
    //       :
    //       <>


    //         <Button variant="link" >
    //           <Link to="/login">Login</Link>
    //         </Button>
    //       </>
    //   }


    // </li>

    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div className='mx-auto container'>
      <div className="navbar bg-base-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-600 rounded-box w-40">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/book">All Book</Link>
                </Button>
              </li>


              <li>

                {
                  user.email ?
                    <>
                      <Button variant="link" ><Link to="/add">Add New Books</Link></Button>
                    </>
                    :
                    <>


                    </>
                }


              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <Link to='/'>MovieDB</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Button variant="link" asChild>
                <Link to="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link to="/book">All Movie</Link>
              </Button>
            </li>


            <li>

              {
                user.email ?
                  <>
                    <Button variant="link" ><Link to="/add">Add New Movie</Link></Button>

                  </>
                  :
                  <>

                  </>
              }


            </li>
          </ul>
        </div>
        <div className="navbar-end">

          {
            user.email ?
              <>
                <Button onClick={handleLogout} className="btn btn-ghost" >Sign Out
                </Button>
              </>
              :
              <>


                <Button className="btn" >
                  <Link to="/login">Login</Link>
                </Button>
              </>
          }

        </div>
      </div>

    </div>


  );
}
