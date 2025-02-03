import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cta from "./common/Cta";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";

const LogIn = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    const handleClosePopup = () => {
        setShowForgotPassword(false);
        setShowResetPassword(false);
    };

    const handleForgotSubmit = (data) => {
        console.log("Forgot Password Email:", data.email);
        setShowForgotPassword(false);
        setShowResetPassword(true); // Open Reset Password after submitting
    };

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        reset();
    };

    return (
        <div className="w-full h-screen flex items-center justify-center p-5">
            <div className="max-w-[500px] mx-auto bg-white rounded-lg lg:p-8 p-6 shadow-lg w-full">
                <h2 className="text-black text-center lg:text-4xl md:text-3xl text-2xl font-bold">
                    Log In
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:mt-10 mt-6"
                >
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

                    <div className="mt-4">
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
                    <p onClick={handleForgotPassword} className="text-base font-medium text-end text-blue-500 mt-3 cursor-pointer duration-300 hover:opacity-80 capitalize">
                        forgot password ?
                    </p>
                    <div className="mt-6">
                        <Cta type="submit" className="w-full">
                            Log In
                        </Cta>
                    </div>
                    <p className="text-base text-center text-black font-medium mt-6">Don't have an account? <a href="/register" className="text-blue-500 duration-300 hover:opacity-80">Sign up</a></p>
                </form>
            </div>
             {/* Forgot Password Popup */}
             {showForgotPassword && (
                <div
                    id="popupBackground"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5"
                    onClick={handleClosePopup}
                >
                    <ForgotPassword
                        handleClosePopup={() => setShowForgotPassword(false)}
                        handleForgotSubmit={handleForgotSubmit}
                    />
                </div>
            )}

            {/* Reset Password Popup */}
            {showResetPassword && (
                <div
                    id="popupBackground"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5"
                    onClick={handleClosePopup}
                >
                    <ResetPassword handleClosePopup={handleClosePopup} />
                </div>
            )}
        </div>
    );
};

export default LogIn;
