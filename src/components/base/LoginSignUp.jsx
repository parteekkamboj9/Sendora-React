import { NavLink } from "react-router-dom";
import ApiClient from "../../settings/ApiClient";


export default function LoginSignUp() {

  const handleGetGoogleUrl = () => {
    ApiClient.get('/api/google/url/').then(res=>{
      if (res.success) {
        window.location.href = res.data.url;
      }
    })
  }

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="flex w-full max-w-7xl">
      {/* Left Image Section */}
      <div className="hidden lg:block w-1/2 h-screen bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('/static/img/testimonials/smiling-woman.jpg')",
        backgroundPosition: "left",
        backgroundPositionX: "left"
         }}>
      </div>

      {/* Right Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-sm px-6 py-8 space-y-4">
          <div className="text-center">
            <NavLink to={'/'} className='flex justify-center items-center text-xl gap-0 mb-4'>
                <img src='/static/icons/logo.svg' className='w-7' />
                <span className='text-primary pt-1'>Sendora</span>
            </NavLink>
            <h2 className="text-lg font-medium text-gray-700">Let’s Get You Back On Track!</h2>
            <span className="!text-gray-600">Your journey awaits. Log in and pick up where you left off.</span>
          </div>
          <button className="w-full !bg-white border-1 !py-1.5 border-black" onClick={handleGetGoogleUrl}>
            <div className="flex flex-row items-center justify-center gap-4 ">
              <div className="w-6">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: "block"}}>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className="text-black">Continue with Google</span>
            </div>
          </button>
          {/* <div className="flex items-center justify-center">
            <h4 className="!text-black">OR</h4>
          </div> */}
          
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border !text-gray-700">
                <span className="relative z-10 bg-white px-2 text-muted-foreground">
                  OR
                </span>
              </div>
          <form className="space-y-2" onSubmit={(e)=>{e.preventDefault();}}>
            <span className="flex justify-center items-center !text-gray-700 text-sm mx-2">Enter email to sign in or create an account</span>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-[#8354d1]"
                required
              />
            </div>
            <button type="submit" className=" btn-primary w-full py-2 px-4 items-center justify-center flex flex-row">
              Sign In <img src="/static/icons/arrow-right.svg" className="w-6" />
            </button>
          </form>
          <div className="flex justify-center items-center !text-gray-700 text-sm mx-2">
            <span>By logging in, you accept our <NavLink to="/terms-of-service">Terms of Service</NavLink> and <NavLink to="/privacy-policy">Privacy Policy</NavLink>.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}