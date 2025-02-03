import React from "react";
import Cta from "./common/Cta";
import { useForm } from "react-hook-form";

const ForgotPassword = ({ handleClosePopup, handleForgotSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Forgot Password Data:", data);
        reset();
        handleForgotSubmit(data);
        handleClosePopup();
    };

    return (
        <div className="flex items-center justify-center p-5 w-full h-screen">
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-[500px] mx-auto bg-white rounded-lg lg:p-8 p-6 shadow-lg w-full"
            >
                <h2 className="text-black text-center lg:text-4xl md:text-3xl text-2xl font-bold">
                    Forgot Password
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:mt-10 mt-6"
                >
                    <div>
                        <p className="text-black font-medium text-base md:text-lg mb-2 capitalize">
                            Enter Email
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder=""
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                className="bg-transparent border border-black rounded w-full focus:outline-none p-4 placeholder:text-black text-black peer placeholder-transparent"
                            />
                            <label
                                htmlFor="email"
                                className="capitalize absolute left-4 top-px text-sm -translate-y-1/2 text-black transition-all 
                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                peer-focus:top-px peer-focus:text-sm bg-white pointer-events-none"
                            >
                                Enter Email
                            </label>
                        </div>
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-6">
                        <Cta type="submit" className="w-full">
                            Submit
                        </Cta>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
