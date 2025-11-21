import { NextResponse } from "next/server";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./routes";

function matchRoute(pathname, routes) {
    // Support dynamic segments like /jobs/[id] and /profile/[slug]
    return routes.some(route => {
        if (route.includes("[")) {
            // Convert /jobs/[id] to regex: ^/jobs/[^/]+$
            const regex = new RegExp('^' + route.replace(/\[.*?\]/g, '[^/]+') + '$');
            return regex.test(pathname);
        }
        return route === pathname;
    });
}

export function middleware(req) {
    const token = req.cookies.get("authToken");
    const { pathname } = req.nextUrl;

    const isAuthPage = matchRoute(pathname, AUTH_ROUTES);
    const isProtectedPage = matchRoute(pathname, PROTECTED_ROUTES);

    // Authenticated users should not access auth pages
    if (isAuthPage && token) {
        console.log("middlware");
        return NextResponse.redirect(new URL("/", req.url));
    }

    // Unauthenticated users should not access protected pages
    if (isProtectedPage && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next|api|static|favicon.ico).*)",
    ],
};
