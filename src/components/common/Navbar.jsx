import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SearchResults from "../Movies/common/SearchResults";
import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {

  // add search functionlity
  let [searchText, setSearchTerm] = useState('Harry');
  const history = useHistory();
  const [search, setSerach] = useState(false);
  // Add Loigin FunctionLity
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

  // console.log("profile data.........",user)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      // console.log("seachterm", searchText);
      history.push(`search-details/${searchText}`);
    }
  }
  const handleMovies = () => {
    setSerach(true);
    history.push(`/movie`);
  }


  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 space-x-0 justify-between">
              <NavLink to="/">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-10 w-auto" src="https://res.cloudinary.com/zoominfo-com/image/upload/w_140,h_140,c_fit/sptechusa.com" alt="Your Company" />
                  <h1 className="text-white font-semibold lg:text-2xl md:text-1xl sm:xxl"> &nbsp; REACT 2024</h1>
                </div>
              </NavLink>
              <div className="hidden sm:ml-6 sm:block mx-auto">
                <div className="flex space-x-4">
                  <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/">Home <span className="sr-only">(current)</span></NavLink>
                  <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/client">Client <span className="sr-only">(current)</span></NavLink>
                  {/* <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/employee">Employee <span className="sr-only">(current)</span></NavLink> */}
                  {/* <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/create-project">Create Project <span className="sr-only">(current)</span></NavLink> */}
                  <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/projects-list">All Projects list <span className="sr-only">(current)</span></NavLink>
                  <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>


                  {
                    isAuthenticated ?
                      <>
                        <a onClick={handleMovies} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-2">Movie <span className="sr-only">(current)</span></a>
                        {search ? <SearchResults /> : null}
                      </>
                      : null
                  }

                  {
                    isAuthenticated ? <span>
                      <span className="text-white font-semibold lg:text-xxl md:text-1xxl sm:text-xxl mx-2 text-left">
                        <i class="fa fa-user animate-bounce" aria-hidden="true"></i>
                        &nbsp;Welcome :{user.name}</span>
                      <button onClick={() => logout({ returnTo: window.location.origin })}
                        className="bg-red-500 text-white font-semibold rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                        <i class="fa fa-power-off animate-bounce text-white" aria-hidden="true"></i>
                        &nbsp; Logout</button>
                    </span>

                      : <button onClick={() => loginWithRedirect()} className="bg-blue-800 text-white font-semibold rounded-md px-3 py-2 text-sm font-medium mx-3" aria-current="page">Login</button>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/">Home <span className="sr-only">(current)</span></NavLink>
            <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/about">About <span className="sr-only">(current)</span></NavLink>
            <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
            {
              isAuthenticated ?
                <>
                  <a onClick={handleMovies} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-2">Movie <span className="sr-only">(current)</span></a>
                  {search ? <SearchResults /> : null}
                </>
                : null
            }

            {
              isAuthenticated ? <span>
                <span className="text-white font-semibold lg:text-xxl md:text-1xxl sm:text-xxl mx-2 text-left">
                  <i class="fa fa-user animate-bounce" aria-hidden="true"></i>
                  &nbsp;Welcome :{user.name}</span>
                <button onClick={() => logout({ returnTo: window.location.origin })}
                  className="bg-red-500 text-white font-semibold rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                  <i class="fa fa-power-off animate-bounce text-white" aria-hidden="true"></i>
                  &nbsp; Logout</button>
              </span>

                : <button onClick={() => loginWithRedirect()} className="bg-blue-800 text-white font-semibold rounded-md px-3 py-2 text-sm font-medium mx-3" aria-current="page">Login</button>
            }

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
