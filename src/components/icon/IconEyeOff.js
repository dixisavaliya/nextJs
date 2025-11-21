export default function IconEyeOff({
    width = 24,
    height = 24,
    className = "",
    ...props
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M3 3l18 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.584 5.157A9.93 9.93 0 0112 5c6.5 0 10 7 10 7a18.072 18.072 0 01-3.034 3.853M6.64 6.64C4.27 8.22 2 12 2 12s3.5 6 10 6c1.035 0 2.006-.167 2.914-.47"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M9.88 9.88a3 3 0 004.24 4.24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
