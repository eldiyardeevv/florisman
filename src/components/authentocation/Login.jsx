import React, { useState } from "react";
import img1bg from "../../img/image-bg.png";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const { signIn } = useAuthContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  async function handleSignInSumbit() {
    try {
      await signIn(email, password);
    } catch (error) {
      setError(error.massage);
    }
  }
  return (
    <>
      <div
        style={{
          background: `url(${img1bg}) no-repeat center/cover`,
        }}
      >
        <div className="flex justify-center  b-[-50px] ml-[30px]">
          <div className=" flex align-center py-[40px] mt-[180px] w-[500px] ">
            <div className="w-full  max-w-sm p-4 bg-white border border-gray-200 border-none rounded-lg shadow sm:p-6 md:p-8 dark:bg-pink-400 dark:border-gray-700">
              <form className="space-y-6" action="#">
                <h5 className="text-xl  text-center font-medium text-gray-900 dark:text-white">
                  Login to account
                </h5>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <button
                  onClick={handleSignInSumbit}
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
