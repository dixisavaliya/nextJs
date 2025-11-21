import React, { Suspense } from 'react';
import ForgotPassword from './ForgotPassword';

export default function ForgotPasswordPage() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ForgotPassword />
            </Suspense>
        </>
    );
}