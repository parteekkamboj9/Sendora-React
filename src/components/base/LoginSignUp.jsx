

export default function LoginSignUp() {
    return (
        
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    {/* Desktop Layout */}
    <div className="hidden lg:flex w-full max-w-7xl">
      {/* Left Image Section */}
      <div className="w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: "url('/static/img/testimonials/smiling-woman.jpg')" }}>
        {/* Background image, replace the URL with your own */}
      </div>

      {/* Right Login Form Section */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-sm px-6 py-8 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-700">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="lg:hidden w-full max-w-md px-6 py-8 space-y-6 bg-white">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Sign In</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
    )
}