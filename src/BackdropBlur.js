import React from 'react'

function BackdropBlur() {
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {/* Background overlay with blur */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url("/images/welcome-img.png")' }}
            ></div>

            {/* Foreground content with backdrop blur */}
            <div className="relative bg-white/40 rounded-lg shadow-lg p-8 backdrop-blur-sm z-10">
                <h2 className="text-2xl font-bold">Blur Test</h2>
                <p>If you see a blurred background, it is working correctly.</p>
            </div>
        </div>
    )
}

export default BackdropBlur