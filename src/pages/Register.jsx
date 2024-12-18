import React from "react";
import NavBar from "./../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    setVerified(true); // This will be true once reCAPTCHA is successfully completed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (verified) {
      // Proceed with form submission
      console.log("Form submitted!");
    } else {
      alert("Please complete the CAPTCHA!");
    }
  };
  return (
    <div>
      <NavBar />
      <div>
        <section className="text-black md:py-0 py-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="mt-28">
              <div className="flex flex-col justify-center px-6 pb-8">
                <div className="flex justify-center items-center">
                  <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0 max-w-md">
                    <div className="p-6 space-y-4 sm:p-8">
                      <h1 className="text-3xl text-center font-semibold text-colorThree">
                        Get started with us
                      </h1>
                      <form className="space-y-4 md:space-y-6">
                        {/* Role Selection */}
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm font-bold text-colorThree">
                            I am a:
                          </label>
                          <div className="flex flex-row items-center">
                            <div className="w-[50%]">
                              <input
                                type="radio"
                                name="role"
                                value="landlord"
                                id="landlord"
                                checked={role === "landlord"}
                                onChange={handleRoleChange}
                                className="mr-2 "
                              />
                              <label htmlFor="landlord" className="mr-4">
                                Landlord
                              </label>
                            </div>

                            <div className="w-[50%]">
                              <input
                                type="radio"
                                name="role"
                                value="tenant"
                                id="tenant"
                                checked={role === "tenant"}
                                onChange={handleRoleChange}
                                className="mr-2"
                              />
                              <label htmlFor="tenant">Tenant</label>
                            </div>
                          </div>
                        </div>

                        {/* Full Name Input */}
                        <div>
                          <label
                            htmlFor="text"
                            className="block mb-2 text-sm font-bold text-colorThree"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Your Full Name"
                            required
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="name@domain.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        {/* Password Input */}
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-bold text-colorThree"
                          >
                            Password
                          </label>
                          <div className="flex flex-row">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              value={password}
                              placeholder="••••••••"
                              className="border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        {/* reCAPTCHA */}
                        <div className="w-[100%] flex justify-center items-center">
                          <ReCAPTCHA
                            sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                            onChange={handleCaptcha}
                          />
                        </div>

                        {/* Sign Up Button */}
                        <button
                          type="submit"
                          disabled={!role}
                          className={`w-full text-base font-medium rounded px-5 py-2.5 text-center transition ease-in-out duration-1000 ${
                            role
                              ? "bg-mainColor hover:bg-colorFour text-white"
                              : "bg-[#f8f9fa] cursor-not-allowed text-gray-400"
                          }`}
                        >
                          Sign Up{" "}
                          {role &&
                            `as ${
                              role.charAt(0).toUpperCase() + role.slice(1)
                            }`}
                        </button>

                        <div className="relative flex items-center">
                          <div className="flex-grow border-t border-gray-400"></div>
                          <span className="flex-shrink mx-4 text-black text-sm">
                            or
                          </span>
                          <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        {/* Social Sign In Buttons */}
                        <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <img
                            src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48"
                            alt=""
                            className="w-5 h-5"
                          />
                          Sign Up with Google
                        </button>

                        <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <img
                            src="https://secure.meetupstatic.com/next/images/login/apple.svg?w=48"
                            alt=""
                            className="w-5 h-5"
                          />
                          Sign Up with Apple
                        </button>

                        <p className="text-sm text-center font-light text-gray-500">
                          Already have an account?{" "}
                          <a
                            href="/login"
                            className="font-medium text-primary-600 hover:underline"
                          >
                            Sign In Here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
