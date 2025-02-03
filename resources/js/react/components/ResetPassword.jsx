import React from "react";
import Cta from "./common/Cta";
import { useForm } from "react-hook-form";

const ResetPassword = ({ handleClosePopup }) => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Reset Password Data:", data);
        reset();
        handleClosePopup();
    };

    return (
        <div className="flex items-center justify-center p-5 w-full h-screen">
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-[500px] mx-auto bg-white rounded-lg lg:p-8 p-6 shadow-lg w-full"
            >
                <h2 className="text-black text-center lg:text-4xl md:text-3xl text-2xl font-bold">
                    Reset Password
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:mt-10 mt-6 flex flex-col gap-5"
                >
                    <div>
                        <p className="text-black font-medium text-base md:text-lg mb-2 capitalize">
                            New Password
                        </p>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder=""
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                className="bg-transparent border border-black rounded w-full focus:outline-none p-4 placeholder:text-black text-black peer placeholder-transparent"
                            />
                            <label
                                htmlFor="password"
                                className="capitalize absolute left-4 top-px text-sm -translate-y-1/2 text-black transition-all 
                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                peer-focus:top-px peer-focus:text-sm bg-white pointer-events-none"
                            >
                                Enter New Password
                            </label>
                        </div>
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <p className="text-black font-medium text-base md:text-lg mb-2 capitalize">
                            Confirm Password
                        </p>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder=""
                                {...register("confirmPassword", {
                                    required: "Confirm password is required",
                                    validate: (value) =>
                                        value === watch("password") ||
                                        "Passwords do not match",
                                })}
                                className="bg-transparent border border-black rounded w-full focus:outline-none p-4 peer placeholder-transparent"
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="capitalize absolute left-4 top-px text-sm -translate-y-1/2 text-black transition-all 
                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                peer-focus:top-px peer-focus:text-sm bg-white pointer-events-none"
                            >
                                Enter Confirm Password
                            </label>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-6">
                        <Cta type="submit" className="w-full">
                            Reset Password
                        </Cta>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
