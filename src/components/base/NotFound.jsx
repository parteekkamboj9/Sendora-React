import { NavLink } from "react-router-dom";

export default function NotFound()  {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg text-gray-500 mb-8">It seems like you've found a page that doesn’t exist or has been moved.</p>
        
        <NavLink
          to="/"
          className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};
