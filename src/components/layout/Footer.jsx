import React from 'react';
import { Github } from 'lucide-react';
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-center p-6 text-gray-500 mt-20 border-t border-gray-800">
            <p>Criado para auxiliar nos estudos do programa CI Expert.</p>
            <a href="https://github.com/Rodriguesmath/ci-expert-prep" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-cyan-400 transition mt-2">
                <Github size={16} className="mr-2" />
                Veja o código no GitHub
            </a>
        </footer>
    );
}
