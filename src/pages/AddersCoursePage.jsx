import React, { useState } from 'react';
import CourseSection from '../components/ui/CourseSection.jsx';
import InteractiveLab from '../components/ui/InteractiveLab.jsx';

export default function AddersCoursePage() {
    const [haA, setHaA] = useState(1);
    const [haB, setHaB] = useState(1);
    const haSum = haA ^ haB;
    const haCarry = haA & haB;
    const [faA, setFaA] = useState(1);
    const [faB, setFaB] = useState(1);
    const [faCin, setFaCin] = useState(1);
    const faSum = faA ^ faB ^ faCin;
    const faCarry = (faA & faB) | (faCin & (faA ^ faB));
    const GateInput = ({ value, onClick, label }) => (<div className="flex flex-col items-center"><button onClick={onClick} className={`w-12 h-12 text-xl font-bold rounded-full transition ${value ? 'bg-cyan-500' : 'bg-gray-600'}`}>{value}</button><span className="mt-2 text-sm text-gray-400">{label}</span></div>);
    const GateOutput = ({ value, label }) => (<div className="flex flex-col items-center"><div className={`w-12 h-12 text-xl font-bold rounded-full flex items-center justify-center transition ${value ? 'bg-green-500' : 'bg-red-500'}`}>{value}</div><span className="mt-2 text-sm text-gray-400">{label}</span></div>);
    return (
        <div>
            <h2 className="text-4xl font-bold text-white mb-4">Módulo: Somadores</h2>
            <p className="text-lg text-gray-400 mb-10">Descubra os circuitos fundamentais que realizam a soma em um processador, o Half-Adder e o Full-Adder.</p>
            <CourseSection title="Half-Adder (Meio-Somador)">
                <p>O Half-Adder é o circuito mais simples que pode somar dois bits. Ele recebe duas entradas, A e B, e produz duas saídas:</p>
                <ul><li><strong>Soma (S):</strong> O resultado da operação OU-Exclusivo (XOR) entre A e B.</li><li><strong>Carry-Out (Cout):</strong> O "vai um", resultado da operação E (AND) entre A e B.</li></ul>
                <InteractiveLab title="Simulador de Half-Adder">
                    <div className="flex items-center justify-center space-x-4 md:space-x-8">
                        <GateInput value={haA} onClick={() => setHaA(v => 1-v)} label="Entrada A" /><GateInput value={haB} onClick={() => setHaB(v => 1-v)} label="Entrada B" /><div className="text-4xl text-gray-500">→</div><GateOutput value={haSum} label="Soma (S)" /><GateOutput value={haCarry} label="Carry (Cout)" />
                    </div>
                </InteractiveLab>
            </CourseSection>
            <CourseSection title="Full-Adder (Somador Completo)">
                <p>O Full-Adder é mais poderoso. Ele soma três bits: A, B e um <strong>Carry-In (Cin)</strong>, que é o "vem um" da soma anterior. Isso permite que vários Full-Adders sejam conectados em cascata para somar números de múltiplos bits.</p>
                <InteractiveLab title="Simulador de Full-Adder">
                    <div className="flex items-center justify-center space-x-4 md:space-x-8">
                        <GateInput value={faA} onClick={() => setFaA(v => 1-v)} label="Entrada A" /><GateInput value={faB} onClick={() => setFaB(v => 1-v)} label="Entrada B" /><GateInput value={faCin} onClick={() => setFaCin(v => 1-v)} label="Carry In (Cin)" /><div className="text-4xl text-gray-500">→</div><GateOutput value={faSum} label="Soma (S)" /><GateOutput value={faCarry} label="Carry Out (Cout)" />
                    </div>
                </InteractiveLab>
            </CourseSection>
        </div>
    );
}
