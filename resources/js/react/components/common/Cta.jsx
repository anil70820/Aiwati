const Cta = ({
    children,
    className = "",
    href,
    type,
    ctaType = "default", // default header type
    black,
    white,
    target,
    onClick,
    ...rest
}) => {
    // Define heading classes based on the `header` prop
    const ctaStyles = {
        primary:
            "border-black border rounded-md px-6 py-3 text-white hover:bg-black hover:text-black duration-300 leading-[150%] font-medium",
        default:
            "border-black border rounded-md px-6 py-3 text-white hover:bg-transparent hover:text-black bg-black duration-300 leading-[150%] font-medium",
    };

    const handleLinkClick = (e, href, onClick) => {
        return (event) => {
            if (onClick) {
                event.preventDefault(); // Default link behavior prevent karein
                onClick(); // Custom click handler call karein
            }
        };
    };

    return (
        <>
            {href ? (
                <a
                    {...rest}
                    target={target}
                    href={href}
                    className={`${className} ${ctaStyles[ctaType]}`}
                    onClick={handleLinkClick} // Attach the onClick handler here
                >
                    {children}
                </a>
            ) : (
                <button
                    {...rest}
                    onClick={onClick}
                    type={type || "button"}
                    className={`${ctaStyles[ctaType]} ${className}`}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default Cta;
