import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex items-center justify-center bg-gray-100 outline-none">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
