export default function IconLogo({
    width = 30,
    height = 30,
    className = "",
    ...props
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <g style={{ mixBlendMode: "multiply" }}>
                <path d="M8.33216 19.1589L8.33323 0L0 7.38423V26.5442L8.33216 19.1589Z" fill="#2787AD" />
            </g>
            <g style={{ mixBlendMode: "multiply" }}>
                <path d="M18.7905 7.2964L27.0241 0H8.33323L0.100677 7.2964H18.7905Z" fill="#2787AD" />
            </g>
            <g style={{ mixBlendMode: "multiply" }}>
                <path d="M21.3172 10.0116L21.3162 29.1706L29.6494 21.7864V2.62634L21.3172 10.0116Z" fill="#384D8B" />
            </g>
            <g style={{ mixBlendMode: "multiply" }}>
                <path d="M10.86 21.8741L2.62637 29.1705H21.3162L29.5487 21.8741H10.86Z" fill="#384D8B" />
            </g>
        </svg>
    );
}
