import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cta from "./common/Cta";
import VerifyOtp from "./VerifyOtp";

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [showOtpModal, setShowOtpModal] = useState(false);
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        setShowOtpModal(true); // Show OTP modal
        reset();
    };

    return (
        <div className="w-full h-screen flex items-center justify-center p-5">
            <div className="max-w-[500px] mx-auto bg-white rounded-lg lg:p-8 p-6 shadow-lg w-full">
                <h2 className="text-black text-center lg:text-4xl md:text-3xl text-2xl font-bold capitalize">
                   user Register
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:mt-10 mt-6 flex flex-col gap-5"
                >
                    <div>
                        <p className="text-black font-medium text-bsae md:text-lg mb-2 capitalize">
                            Your Name
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder=""
                                {...register("name", {
                                    required: "name is required",
                                })}
                                className="bg-transparent border border-black rounded w-full focus:outline-none outline-none p-4 placeholder:text-base placeholder:text-black text-black peer placeholder-transparent"
                            />
                            <label
                                htmlFor="email"
                                className="capitalize absolute left-4 top-px text-sm -translate-y-1/2 text-black transition-all 
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
               peer-focus:top-px peer-focus:text-sm bg-white pointer-events-none"
                            >
                                enter Your name
                            </label>
                        </div>
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <p className="text-black font-medium text-bsae md:text-lg mb-2 capitalize">
                            Your Email
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder=""
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                className="bg-transparent border border-black rounded w-full focus:outline-none outline-none p-4 placeholder:text-base placeholder:text-black text-black peer placeholder-transparent"
                            />
                            <label
                                htmlFor="email"
                                className="capitalize absolute left-4 top-px text-sm -translate-y-1/2 text-black transition-all 
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
               peer-focus:top-px peer-focus:text-sm bg-white pointer-events-none"
                            >
                                enter Your Email
                            </label>
                        </div>
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <p className="text-black font-medium text-bsae md:text-lg mb-2 capitalize">
                            Your Password
                        </p>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder=""
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                className="bg-transparent border border-black rounded w-full focus:outline-none outline-none p-4 placeholder:text-base placeholder:text-black text-black peer placeholder-transparent"
                            />
                            <label
                                htmlFor="password"
                                className="capitalize absolute left-4 top-px text-sm -translate-y-1/2 text-black transition-all 
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
               peer-focus:top-px peer-focus:text-sm bg-white pointer-events-none"
                            >
                                enter Your Password
                            </label>
                        </div>
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <a href="/admin-register" className="text-blue-400 text-end font-medium text-sm -mt-2 capitalize duration-300 hover:opacity-80">register as an admin?</a>
                    <div className="w-full mt-2">
                        <Cta type="submit" className="w-full">
                            Sign Up
                        </Cta>
                    </div>
                    <p className="text-base text-center text-black font-medium mt-6 capitalize">Already have an account? <a href="/login" className="text-blue-500 duration-300 hover:opacity-80">log in</a></p>
                </form>
            </div>
            {showOtpModal && (
                <div onClick={()=>setShowOtpModal(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5">
                    <VerifyOtp closePopUp={()=>setShowOtpModal(false)}/>
                </div>
            )}
        </div>
    );
};

export default Register;
