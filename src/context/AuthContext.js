'use client';
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check authentication status by making a request to verify the cookie
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            // Make a request to verify if the user is authenticated via cookie
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify`, {
                method: 'GET',
                credentials: 'include', // This ensures cookies are sent
            });

            const userData = await response.json();

            if (userData.success) {
                setUser(userData.data);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.log('Auth check failed:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    // Updated login method - cookie is set by server, just update user state
    const login = async ({ user: userData }) => {
        setUser(userData);
    };

    const logout = async () => {
        try {
            // Call logout endpoint to clear server-side cookie
            await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`, {
                method: 'POST',
                credentials: 'include',
            });
        } catch (error) {
            console.log('Logout request failed:', error);
        } finally {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            loading,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
