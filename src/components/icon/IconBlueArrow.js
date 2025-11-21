export default function IconBlueArrow({
    width = 24,
    height = 25,
    className = "",
    ...props
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path d="M6 18.4399L18 6.43994M18 6.43994H9M18 6.43994V15.4399" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
