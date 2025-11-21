export default function IconRoundArrow({
    width = 72,
    height = 72,
    className = "",
    ...props
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <rect width="72" height="72" rx="36" fill="currentColor" />
            <path d="M24 48L48 24M48 24H30M48 24V42" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
