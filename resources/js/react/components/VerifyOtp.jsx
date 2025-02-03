import React from "react";
import { useForm } from "react-hook-form";
import Cta from "./common/Cta";
import { useNavigate, useOutletContext } from "react-router-dom";

const VerifyOtp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { setShowOtpModal } = useOutletContext(); // Parent component ka context use karein

    const handleClose = () => {
        setShowOtpModal(false); // State update karein
        navigate("/admin-register"); // Route back karein
    };
    const onSubmit = (data) => {
        console.log("OTP Data:", data);
        reset();

        navigate("/login");
    };

    return (
        <div
            onClick={handleClose}
            className="flex items-center justify-center w-full h-screen fixed inset-0 bg-black bg-opacity-50 p-5"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-[500px] mx-auto bg-white rounded-lg lg:p-8 p-6 shadow-lg w-full"
            >
                <h2 className="text-black text-center lg:text-4xl md:text-3xl text-2xl font-bold">
                    Verify OTP
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:mt-10 mt-6"
                >
                    <div>
                        <p className="text-black font-medium text-base md:text-lg mb-2 capitalize">
                            Enter OTP
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder=""
                                {...register("otp", {
                                    required: "OTP is required",
                                })}
                                className="bg-transparent border border-black rounded w-full focus:outline-none p-4 placeholder:text-black text-black peer placeholder-transparent"
                            />
                            <label
                                htmlFor="otp"
                                className="capitalize absolute left-4 top-px text-sm -translate-y-1/2 text-black transition-all 
                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                peer-focus:top-px peer-focus:text-sm bg-white pointer-events-none"
                            >
                                Enter OTP
                            </label>
                        </div>
                        {errors.otp && (
                            <p className="text-red-500">{errors.otp.message}</p>
                        )}
                    </div>
                    <div className="mt-6">
                        <Cta type="submit" className="w-full">
                            Verify OTP
                        </Cta>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtp;
