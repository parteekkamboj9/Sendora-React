import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <section className="w-full px-8 text-gray-700 bg-white">
            <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <div className="relative flex flex-col md:flex-row">
                    <NavLink to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                        <img className="h-8 w-8 hidden md:block" src="/static/icons/logo.svg" />
                        <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                            Sendora<span className="text-primary">.</span>AI
                        </span>
                    </NavLink>
                    <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-4 md:ml-4 md:border-l md:border-gray-200">
                        <NavLink to="/" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</NavLink>
                        <NavLink to="/features" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</NavLink>
                        <NavLink to="/pricing" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</NavLink>
                        <NavLink to="/blog" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</NavLink>
                    </nav>
                </div>

                <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                    <NavLink to="/sign-in" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                        Sign in
                    </NavLink>
                    <NavLink to="/sign-up" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Sign up
                    </NavLink>
                </div>
            </div>
        </section>
    )
}