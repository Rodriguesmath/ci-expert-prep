import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
export default function Header({ isSidebarOpen, setSidebarOpen }) {
    return (
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
            <nav className="container px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md hover:bg-gray-700 z-50">
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <div className="flex items-center space-x-2">
                        <BookOpen className="text-cyan-400"/>
                        <span className="text-xl font-bold">CI Expert Prep</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
