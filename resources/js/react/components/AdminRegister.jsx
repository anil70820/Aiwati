import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import Cta from "./common/Cta";

const AdminRegister = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [showOtpModal, setShowOtpModal] = useState(false);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        navigate("/admin-register/verify-otp");
        reset();
    };

    return (
        <div className="w-full h-screen flex items-center justify-center p-5">
            <div className="sm:max-w-[1000px] max-w-[500px] mx-auto bg-white rounded-lg lg:p-8 p-6 shadow-lg w-full">
                <h2 className="text-black text-center lg:text-4xl md:text-3xl text-2xl font-bold">
                    Admin Register
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:mt-10 mt-6"
                >
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            {
                                label: "Your Name",
                                name: "name",
                                type: "text",
                                error: errors.name,
                            },
                            {
                                label: "Your Email",
                                name: "email",
                                type: "email",
                                error: errors.email,
                            },
                            {
                                label: "Your Password",
                                name: "password",
                                type: "password",
                                error: errors.password,
                            },
                            {
                                label: "Phone",
                                name: "phone",
                                type: "text",
                                error: errors.phone,
                            },
                            {
                                label: "Company",
                                name: "company",
                                type: "text",
                                error: errors.company,
                            },
                            {
                                label: "GST",
                                name: "gst",
                                type: "text",
                                error: errors.gst,
                            },
                            {
                                label: "Country",
                                name: "country",
                                type: "text",
                                error: errors.country,
                            },
                            {
                                label: "State",
                                name: "state",
                                type: "text",
                                error: errors.state,
                            },
                            {
                                label: "City",
                                name: "city",
                                type: "text",
                                error: errors.city,
                            },
                            {
                                label: "Address",
                                name: "address",
                                type: "text",
                                error: errors.address,
                            },
                        ].map((field, index) => (
                            <div key={index}>
                                <p className="text-black font-medium text-base md:text-lg mb-2 capitalize">
                                    {field.label}
                                </p>
                                <div className="relative">
                                    <input
                                        type={field.type}
                                        placeholder=""
                                        {...register(field.name, {
                                            required: `${field.label} is required`,
                                        })}
                                        className="bg-transparent border border-black rounded w-full focus:outline-none p-4 placeholder:text-black text-black peer placeholder-transparent"
                                    />
                                    <label
                                        htmlFor={field.name}
                                        className="capitalize absolute left-4 top-px text-sm -translate-y-1/2 text-black transition-all 
                                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                    peer-focus:top-px peer-focus:text-sm bg-white pointer-events-none"
                                    >
                                        Enter {field.label}
                                    </label>
                                </div>
                                {field.error && (
                                    <p className="text-red-500">
                                        {field.error.message}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <a
                        href="/register"
                        className="text-blue-400 font-medium text-sm mt-3 capitalize ms-auto flex justify-end duration-300 hover:opacity-80"
                    >
                        register as an user?
                    </a>
                    <div className="mt-8 sm:max-w-[50%] mx-auto w-full">
                        <Cta type="submit" className="w-full">
                            Register
                        </Cta>
                    </div>
                    <p className="text-base text-center text-black font-medium mt-6 capitalize">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-blue-500 duration-300 hover:opacity-80"
                        >
                            log in
                        </a>
                    </p>
                </form>
            </div>
            <Outlet context={{ setShowOtpModal }} />
        </div>
    );
};

export default AdminRegister;
