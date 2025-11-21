export default function IconUser({
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
            <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="12" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
