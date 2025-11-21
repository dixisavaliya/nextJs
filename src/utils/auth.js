import { cookies } from 'next/headers';

export function getServerAuthUser() {
    const cookieStore = cookies();
    const authToken = cookieStore.get('authToken')?.value;
    console.log(authToken, "authToken");

    if (!authToken) return null;

    // The server should handle token validation
    // For now, we'll just return that a token exists
    // You might want to make an API call to verify the token on the server side
    return { authenticated: true, token: authToken };
}
