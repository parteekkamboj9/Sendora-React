import { NavLink } from "react-router-dom";
// import { BASE_API_URL } from "../../settings/configs";
// import { SwalAlert, SwalToaster } from "../../settings/utils";
// import { useUser } from "../../UserContext";
import CarousalComp from "./CarousalComp.jsx";
import AccordionUsage from "./Faqs";

function Index() {
    return (
      <div className='mt-10'>
        <section className="px-2 py-15 bg-white md:px-0">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                        <span className="block md:inline">Empowering Your Workflow with </span>
                        <span className="block text-primary xl:inline">Sendora</span>
                    </h1>
                    <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                        Explore a collection of automation tools, code snippets, and open-source modules to boost your productivity and simplify your projects.
                    </p>
                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                        <NavLink to="/login" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-primary rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                        Try It Free
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </NavLink>
                        <NavLink to="/about" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        Learn More
                        </NavLink>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full h-auto over/flow-hidden rounded-md shadow-xl">
                        <img className="rounded-md" src="/static/img/home-banner.jpg" />
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* <!-- Section  --> */}
            <section className="w-full bg-white pt-2 pb-2 md:pt-10 md:pb-10">
                <div className="px-8 mx-auto leading-6 max-w-7xl">
                    <CarousalComp />
                </div>
            </section>

            {/* <!-- Section 3 --> */}
            <section className="w-full bg-white pt-5 pb-5 md:pt-20 md:pb-24">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Image --> */}
                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <img src="/static/img/testimonials/settings.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </div>

                    {/* <!-- Content --> */}
                    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            All-in-One Developer Tools
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                        We provide essential resources to enhance your development process.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span className="text-sm font-bold">✓</span></span> Automation tools to save time
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span className="text-sm font-bold">✓</span></span> Ready-to-use code snippets for quick solutions
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span className="text-sm font-bold">✓</span></span> Open-source modules to accelerate your projects
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End  Content --> */}
                </div>
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                    {/* <!-- Content --> */}
                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Effortless Automation and Coding Resources
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                        Simplify your workflow with our tailored resources.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span className="text-sm font-bold">✓</span></span> Automate repetitive tasks easily
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span className="text-sm font-bold">✓</span></span> Access a variety of code snippets
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-primary rounded-full"><span className="text-sm font-bold">✓</span></span> Explore modules to speed up development
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End  Content --> */}

                    {/* <!-- Image --> */}
                    <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <img src="/static/img/testimonials/productivity.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
                    </div>
                </div>
            </section>

            {/* <!-- Section 4 --> */}
            <section className="py-20 bg-gray-50">
            <div className="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                <div className="flex flex-wrap items-center -mx-3">
                <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                    <div className="w-full lg:max-w-md">
                    <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Unlock Your Potential with Our Tools</h2>
                    <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Streamline development and unlock efficiency.</p>
                    <ul>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                        <span className="font-medium text-gray-500">Powerful automation solutions</span>
                        </li>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        <span className="font-medium text-gray-500">Open-source modules to integrate seamlessly</span>
                        </li>
                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        <span className="font-medium text-gray-500">Curated code libraries for instant use</span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="/static/img/testimonials/feature-graphic.png" alt="feature image" /></div>
                </div>
            </div>
            </section>

            {/* <!-- Section 5 --> */}
            <section className="flex items-center justify-center py-20 bg-white min-w-screen">
                <div className="px-16 bg-white">
                    <div className="container flex flex-col items-start mx-auto lg:items-center">
                        <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-600 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>


                        <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7c44ddd6" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                            </path>
                        </svg>
                            See what others are saying</h2>
                            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

                        <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                            <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h4 className="font-bold text-gray-800">John Doe</h4>
                                        <p className="text-gray-600">Full-Stack Developer</p>
                                    </div>
                                </div>
                                <blockquote className="mt-8 text-sm text-gray-500">
                                <p className="!text-lg text-primary">A Game-Changer for My Projects!</p>
                                    "I was struggling with repetitive tasks in my development process, but with the automation tools and code snippets from this site, everything became so much easier. Highly recommend!"
                                </blockquote>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h4 className="font-bold text-gray-800">Sara P.</h4>
                                        <p className="text-gray-600">Software Engineer</p>
                                    </div>
                                </div>
                                <blockquote className="mt-8 text-sm text-gray-500">
                                <p className="!text-lg text-primary">Supercharged My Development Speed!</p>
                                    "The ready-to-use modules and well-organized code libraries saved me hours of work. It's the perfect resource for any developer looking to improve efficiency."
                                </blockquote>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h4 className="font-bold text-gray-800">Mike Smith</h4>
                                        <p className="text-gray-600">Freelance Developer</p>
                                    </div>
                                </div>
                                <blockquote className="mt-8 text-sm text-gray-500">
                                <p className="!text-lg text-primary">Simplified My Workflow Like Never Before!</p>
                                    "This platform transformed the way I build projects. The tools are easy to integrate, and the snippets are practical. I can't imagine working without them."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white pt-2 pb-2 md:pt-5 md:pb-5">
                <div className="px-8 mx-auto leading-6 max-w-7xl">
                    <div className="flex flex-col items-center leading-7 text-center text-gray-900">
                        <h2 className="box-border m-0 mb-5 text-2xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-3xl md:text-4xl">
                            Accordion Usage
                        </h2>
                    </div>
                    <AccordionUsage />
                </div>
            </section>

            {/* <!-- Section 6 --> */}
            <section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24 hidden">
                <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
                    <div className="flex flex-col items-center leading-7 text-center text-gray-900">
                        <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                            Pricing Options
                        </h2>
                        <p className="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
                            We've got a plan for companies of any size
                        </p>
                    </div>
                    <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
                        <div className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                                Basic
                            </h3>
                            <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                                The basic plan is a good fit for smaller teams and startups
                            </p>
                            <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                    $19
                                </p>
                                <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                                    per user <span className="block">per month</span>
                                </p>
                            </div>

                            <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                                Select Plan
                            </button>
                        </div>
                        <div className="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                                Plus
                            </h3>
                            <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                                The plus plan is a good fit for medium-size to larger companies
                            </p>
                            <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                    $39
                                </p>
                                <p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                                    per user <span className="block">per month</span>
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
                                Select Plan
                            </button>
                        </div>
                        <div className="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                                Pro
                            </h3>
                            <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                                The pro plan is a good fit for larger and enterprise companies.
                            </p>
                            <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                                <p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                    $59
                                </p>
                                <p className="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
                                    per user <span className="block">per month</span>
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                                Select Plan
                            </button>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    );
  }
export default Index;