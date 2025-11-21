export default function IconAddress({
    width = 70,
    height = 70,
    className = "",
    ...props
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M34.9998 5.83398C22.1132 5.83398 11.6665 17.5082 11.6665 30.6257C11.6665 43.6403 19.1137 57.7868 30.733 63.2178C33.4416 64.4838 36.5581 64.4838 39.2667 63.2178C50.886 57.7868 58.3332 43.6403 58.3332 30.6257C58.3332 17.5082 47.8865 5.83398 34.9998 5.83398ZM34.9998 35.0006C38.2215 35.0006 40.8332 32.389 40.8332 29.1673C40.8332 25.9457 38.2215 23.334 34.9998 23.334C31.7782 23.334 29.1665 25.9457 29.1665 29.1673C29.1665 32.389 31.7782 35.0006 34.9998 35.0006Z" fill="currentColor" />
        </svg>
    );
}
