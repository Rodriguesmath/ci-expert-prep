import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
export default function Sidebar({ isSidebarOpen, setSidebarOpen, activeModule, setActiveModule, moduleStructure }) {
    const [expandedSections, setExpandedSections] = useState(['math_fundamentals']);
    const toggleSection = (sectionKey) => {
        setExpandedSections(prev => prev.includes(sectionKey) ? prev.filter(key => key !== sectionKey) : [...prev, sectionKey]);
    };
    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) setSidebarOpen(false); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setSidebarOpen]);
    return (
        <>
            {isSidebarOpen && <div className="fixed inset-0 bg-black/60 z-30" onClick={() => setSidebarOpen(false)}></div>}
            <aside className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-gray-900/90 backdrop-blur-md border-r border-gray-800 z-40 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-full overflow-y-auto p-4 pt-20 sidebar-scroll">
                     <ul>
                        {moduleStructure.map(section => (
                            <li key={section.key} className="mb-2">
                                <button onClick={() => toggleSection(section.key)} className="w-full text-left flex items-center justify-between p-3 rounded-lg transition hover:bg-gray-800 text-cyan-400 font-semibold">
                                    <span>{section.label}</span>
                                    <ChevronDown className={`transition-transform duration-200 ${expandedSections.includes(section.key) ? 'rotate-180' : ''}`} size={16} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.includes(section.key) ? 'max-h-screen' : 'max-h-0'}`}>
                                    <ul className="pl-4 pt-2 border-l border-gray-700 ml-3">
                                        {Object.entries(section.subtopics).map(([key, item]) => {
                                            const Icon = item.icon;
                                            return (
                                                <li key={key}>
                                                    <button onClick={() => { setActiveModule(key); setSidebarOpen(false); }} className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition mb-1 ${activeModule === key ? 'bg-cyan-500/20 text-cyan-300' : 'hover:bg-gray-800 text-gray-300'}`}>
                                                        <Icon size={18} /><span>{item.label}</span>
                                                    </button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}
