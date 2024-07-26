/* eslint-disable jsx-a11y/anchor-is-valid */
import loginIamge from "../assets/images/loginbackground.png";
import loginButton from "../assets/images/loginbutton.png";
import person from "../assets/images/user.png";
import line from "../assets/images/line.png";
import password from "../assets/images/lock.png";

const Signup = () => {
  return (
    <>
      <div className=" flex  items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md  overflow-hidden  w-full">
          <div className="relative">
            <img
              src={loginIamge}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute top-[288px] left-0 right-0 bottom-0 mt-8  bg-white  p-6
           rounded-3xl shadow-md h-screen "
          >
            <div className=" inset-0  flex items-center justify-center mt-6">
              <h1 className="text-[#373737] text-[24px] font-medium">SIGNUP</h1>
            </div>
            <h2 className="text-center text-[14px] font-normal text-[#7D7D7D] mb-4">
              Please enter your credentials to proceed
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2 font-semibold">
                  User Name
                </label>
                <div className="flex items-center border bg-[#F8F8F8] border-[#D9D9D9] rounded-md">
                  <span className="px-3">
                    <div className="flex gap-3">
                      <img src={person} alt="" />
                      <img src={line} alt="" />
                    </div>
                  </span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="flex-1 py-2.5 px-4 text-gray-700  border-[#D9D9D9] bg-[#F8F8F8] focus:outline-none 
                    focus:ring-2
                     focus:ring-[#D9D9D9] rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2 font-semibold">
                  Password
                </label>
                <div className="flex items-center border bg-[#F8F8F8] border-[#D9D9D9] rounded-md">
                  <span className="px-3">
                    <div className="flex gap-3">
                      <img src={password} alt="" />
                      <img src={line} alt="" />
                    </div>
                  </span>
                  <input
                    type="password"
                    placeholder="************"
                    className="flex-1 py-2 px-4 text-gray-700 focus:outline-none focus:ring-2
                    border-[#D9D9D9] bg-[#F8F8F8] focus:ring-[#D9D9D9] rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2 font-semibold">
                  Confirm Password
                </label>
                <div className="flex items-center border bg-[#F8F8F8] border-[#D9D9D9] rounded-md">
                  <span className="px-3">
                    <div className="flex gap-3">
                      <img src={password} alt="" />
                      <img src={line} alt="" />
                    </div>
                  </span>
                  <input
                    type="password"
                    placeholder="************"
                    className="flex-1 py-2 px-4 text-gray-700 focus:outline-none focus:ring-2
                    border-[#D9D9D9] bg-[#F8F8F8] focus:ring-[#D9D9D9] rounded-md"
                  />
                </div>
              </div>

              <div className="flex">
                <button
                  type="submit"
                  className="w-full py-4 px-2 bg-[#2D52A3] text-white rounded-md
                 hover:bg-[#2D52A3] transition duration-200"
                >
                  SIGNUP
                </button>
              </div>
              <div className="flex justify-center items-center mt-4">
                <span className="text-[#7D7D7D] text-[14px]">
                  Already have an account?
                </span>
                <a
                  href="/"
                  className="text-[#2D52A3] font-semibold hover:underline ml-2"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
