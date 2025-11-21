export default function IconFacebook({
    width = 36,
    height = 36,
    className = "",
    ...props
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M20.1687 32V19.2288H24.4537L25.0966 14.2502H20.1687V11.0721C20.1687 9.63108 20.5672 8.64907 22.6359 8.64907L25.27 8.64799V4.19492C24.8145 4.13572 23.2508 4 21.4308 4C17.6303 4 15.0285 6.31975 15.0285 10.579V14.2502H10.7305V19.2288H15.0285V32H20.1687Z"
                fill="currentColor"
            />
        </svg>
    );
}
