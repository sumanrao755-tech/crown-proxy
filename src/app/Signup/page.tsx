"use client";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bggradientImg items-center flex flex-col justify-center bg-black px-6 sm:px-12 md:px-16 py-12 text-white">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <img
  src="/assets/images/brand_logo.svg"
  alt="Crown Proxy Logo"
  className="h-12 w-auto sm:h-16"
/>
                    </h1>
                </div>

                <h2 className="text-xl Work-Sans sm:text-2xl lg:text-3xl mb-2">
                    Create an account
                </h2>
                <p className="text-sm mb-8 text-gray-400">
                    Digital freedom starts here — browse smart and stay
                    secure.
                </p>

                <form className="space-y-5 w-full max-w-[400px] mx-auto text-[14px]">
                    <div>
                        <label className="block mb-2">Username *</label>
                        <input
                            type="text"
                            placeholder="Your username"
                            className="w-full rounded-md bg-black/40 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Email *</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-md bg-black/40 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Password *</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full rounded-md bg-black/40 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">
                            Confirm Password *
                        </label>
                        <input
                            type="password"
                            placeholder="Repeat Your Password"
                            className="w-full rounded-md bg-black/40 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <p className="mt-1 text-[#999999] text-[14px] leading-[20px]">
                            We never share your data. Secure & encrypted.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <input
                            id="terms"
                            type="checkbox"
                            className="w-5 h-5 rounded-full border border-gray-600 appearance-none checked:bg-yellow-400 checked:border-yellow-400 focus:outline-none transition"
                        />
                        <label htmlFor="terms" className="leading-snug">
                            I agree to all the{" "}
                            <a
                                href="#"
                                className="font-medium underline text-white"
                            >
                                Terms & Conditions.
                            </a>
                        </label>
                    </div>

                    {/* <button
							type="submit"
							className="w-full text-[14px] font-medium py-2 rounded-full hover:opacity-90 transition"
							style={{
								background: `
									linear-gradient(90deg, rgba(209, 154, 54, 0) 66%, rgba(209, 154, 54, 0.5) 100%),
									linear-gradient(270deg, rgba(209, 154, 54, 0) 71%, rgba(209, 154, 54, 0.5) 100%),
									linear-gradient(0deg, #FFFFFF, #FFFFFF)`,
								color: "#000",
							}}
						>
							Register
						</button> */}

                    <button
                    type="submit"
                    className="btn-register w-full text-[14px] font-medium py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] hover:rotate-1 hover:scale-105"
                    >
                    Register
                    </button>





                    <p className="text-sm text-gray-400 text-center">
                        Already have an account?{" "}
                        <a
                            href="#"
                            className="text-yellow-400-bk text-white underline font-medium"
                        >
                            Sign in
                        </a>
                    </p>
                </form>
            </div>

            <div className="w-full md:w-1/2 bggradientRight flex flex-col justify-center items-center text-center text-white py-12 px-6 relative">
                        <div className="mx-auto w-[20rem] bg-gradient-to-r from-transparent via-neutral-900 to-transparent text-center py-2 rounded">
  <p className="text-gray-300 text-sm">
    Global <span className="font-semibold">Proxies.</span>{" "}
    <span className="font-semibold">Premium</span> Performance.
  </p>
</div>



                <div className="mb-6 mt-5 w-full max-w-sm">
                    <Image
                        src="/assets/images/Hand-rightpng.png"
                        alt="Crown Proxy Logo"
                        width={303}
                        height={260}
                        className="w-full h-auto animate-float"
                        priority
                    />

                </div>


                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 text-white">
                    Why CrownProxy?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 max-w-xl">
                    {/* Feature 1 */}
                    <div
                        className="feature-card flex items-center justify-center gap-2 rounded-full px-3 py-2 bg-gradient-button hover:bg-black/50"
                        style={{ border: "1px solid #FFFFFF" }}
                    >
                        <span className="feature-icon">
                            <Image src="/assets/images/world.svg" alt="World Icon" width={25} height={25} />
                        </span>
                        <span className="text-sm align-middle text-white">
                            220+ Countries Covered
                        </span>
                    </div>


                    {/* Feature 2 */}
                    <div
                        className="feature-card flex items-center justify-center gap-2 rounded-full px-3 py-2 bg-gradient-brown hover:bg-black/50"
                        style={{ border: "1px solid #FFFFFF" }}
                    >
                        <span className="feature-icon">
                            <Image
                                src="/assets/images/secure.svg"
                                alt="Secure Icon"
                                width={25}
                                height={25}
                            />
                        </span>
                        <span className="text-sm align-middle text-white">
                            Secure & Private Connections
                        </span>
                    </div>


                    {/* Feature 3 */}
                    <div
                        className="
    feature-card flex items-center justify-center gap-2 rounded-full
    ms-4 px-3 py-3 bg-gradient-brown hover:bg-black/50
    border border-white
    lg:ml-[20%] lg:w-max
  "
                    >

                        <span className="feature-icon">
                            <Image
                                src="/assets/images/home.svg"
                                alt="Home Icon"
                                width={25}
                                height={25}
                            />
                        </span>
                        <span className="text-sm align-middle text-white">
                            Rotating & Sticky IPs Available
                        </span>
                    </div>


                    {/* Feature 4 */}
                    <div
                        className="
    feature-card flex items-center justify-center gap-2 rounded-full
    ms-4 px-3 py-3 bg-gradient-brown hover:bg-black/50
    border border-white
    lg:ml-[20%] lg:w-max
  "
                    >

                        <span className="feature-icon">
                            <Image
                                src="/assets/images/full.svg"
                                alt="Full Access Icon"
                                width={25}
                                height={25}
                            />
                        </span>
                        <span className="text-sm align-middle text-white">
                            Full API Access
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}
