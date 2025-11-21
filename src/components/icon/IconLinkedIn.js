export default function IconLinkedIn({
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
                d="M31.9998 32.0005V21.7455C31.9998 16.7055 30.9148 12.8555 25.0348 12.8555C22.1998 12.8555 20.3098 14.3955 19.5398 15.8655H19.4698V13.3105H13.9048V32.0005H19.7148V22.7255C19.7148 20.2755 20.1698 17.9305 23.1798 17.9305C26.1548 17.9305 26.1898 20.6955 26.1898 22.8655V31.9655H31.9998V32.0005Z"
                fill="currentColor"
            />
            <path
                d="M4.45508 13.3096H10.2651V31.9996H4.45508V13.3096Z"
                fill="currentColor"
            />
            <path
                d="M7.36 4C5.505 4 4 5.505 4 7.36C4 9.215 5.505 10.755 7.36 10.755C9.215 10.755 10.72 9.215 10.72 7.36C10.72 5.505 9.215 4 7.36 4Z"
                fill="currentColor"
            />
        </svg>
    );
}
