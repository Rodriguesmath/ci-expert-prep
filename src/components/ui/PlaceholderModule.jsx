import React from 'react';
export default function PlaceholderModule({ title }) {
    return (
        <div className="w-full text-center p-8 bg-gray-800 rounded-lg border border-dashed border-gray-600 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-gray-400">{title}</h2>
            <p className="text-gray-500 mt-2">Módulo em desenvolvimento. Em breve, você poderá explorar este tópico interativamente.</p>
        </div>
    );
}
