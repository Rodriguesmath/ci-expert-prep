import React from 'react';
export default function InteractiveLab({ title, children }) {
    return (
        <div className="bg-gray-800 my-8 p-6 rounded-lg border border-gray-700 w-full">
            <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
            {children}
        </div>
    );
}
