import React, { useState } from 'react';
import Header from './components/layout/Header.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import Footer from './components/layout/Footer.jsx';
import { moduleStructure, allModulesMap } from './modules.jsx';

export default function App() {
    const [activeModule, setActiveModule] = useState('systems');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const ActiveComponent = allModulesMap[activeModule]?.Component;
    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
             <style>{`
                .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
                @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                .sidebar-scroll::-webkit-scrollbar { display: none; }
                .sidebar-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            <Header isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative">
                <Sidebar 
                    isSidebarOpen={isSidebarOpen} 
                    setSidebarOpen={setSidebarOpen} 
                    activeModule={activeModule} 
                    setActiveModule={setActiveModule} 
                    moduleStructure={moduleStructure} 
                />
                <main className="container mx-auto p-4 md:p-8 max-w-7xl">   
                    <section className="flex-1 transition-all duration-300">
                        {ActiveComponent && <ActiveComponent />}
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
}
