import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
             <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Movie Search
        </Link>
        <div>
          <Link to="/" className="text-white mr-4">
            Home
          </Link>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;