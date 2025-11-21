export default function IconCheckCircle({
    width = 52,
    height = 53,
    className = "",
    ...props
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <circle cx="25.9987" cy="26.0924" r="21.6667" stroke="#0058E6" strokeWidth="1.5" />
            <path d="M18.418 27.1758L22.7513 31.5091L33.5846 20.6758" stroke="#0058E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
