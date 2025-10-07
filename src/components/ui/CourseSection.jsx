import React from 'react';
export default function CourseSection({ title, children }) {
    return (
        <div className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-cyan-400 border-b-2 border-cyan-500/30 pb-2 mb-6">{title}</h3>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                {children}
            </div>
        </div>
    );
}
