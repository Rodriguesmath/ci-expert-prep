import React, { useState, useMemo } from 'react';
import CourseSection from '../components/ui/CourseSection.jsx';
import InteractiveLab from '../components/ui/InteractiveLab.jsx';
import { toBinary, binaryToDecimal } from '../utils/converters.js';

const BinaryToDecimalModule = () => {
    const [input, setInput] = useState('1101');
    const breakdown = useMemo(() => {
        if (!input || !/^[01]+$/.test(input)) return { weights: [], sum: '', result: '' };
        const reversedBin = input.split('').reverse();
        const weights = reversedBin.map((bit, index) => ({ bit, weight: 2 ** index, active: bit === '1' })).reverse();
        const sum = weights.filter(w => w.active).map(w => w.weight).join(' + ');
        const result = binaryToDecimal(input);
        return { weights, sum, result };
    }, [input]);
    return (<><input type="text" value={input} onChange={e => setInput(e.target.value.replace(/[^01]/g, ''))} className="w-full p-2 font-mono bg-gray-700 border border-gray-600 rounded-md text-white" /><div className="mt-6 flex justify-center gap-2 flex-wrap">{breakdown.weights.map((item, i) => (<div key={i} className={`flex flex-col items-center transition-all duration-500 ${item.active ? 'text-cyan-400' : 'text-gray-500'}`}><span className="text-2xl font-mono">{item.bit}</span><span className="text-xs mt-1 bg-gray-600 px-2 py-1 rounded">{item.weight}</span></div>))}</div>{breakdown.result && (<div className="text-center mt-4 text-white"><p className="font-mono"><span className="text-gray-400">Soma: </span>{breakdown.sum || '0'}</p><p className="font-bold text-lg mt-1"><span className="text-gray-400">Resultado: </span>{breakdown.result}</p></div>)}</>);
};
const DecimalToBinaryModule = () => {
    const [input, setInput] = useState('13');
    const steps = useMemo(() => {
        let num = parseInt(input, 10);
        if (isNaN(num) || num < 0) return [];
        if (num === 0) return [{ step: "0 ÷ 2 = 0", remainder: "0" }];
        const stepList = [];
        while (num > 0) {
            stepList.push({ step: `${num} ÷ 2 = ${Math.floor(num / 2)}`, remainder: (num % 2).toString() });
            num = Math.floor(num / 2);
        }
        return stepList;
    }, [input]);
    return (<><input type="text" value={input} onChange={e => setInput(e.target.value.replace(/[^0-9]/g, ''))} className="w-full p-2 font-mono bg-gray-700 border border-gray-600 rounded-md text-white" /><div className="mt-4 font-mono text-white bg-gray-900 p-4 rounded-md">{steps.map((s, i) => <div key={i} className="flex justify-between items-center"><span>{s.step}, <span className="text-gray-400">Resto</span></span><span className="text-cyan-400 font-bold text-lg">{s.remainder}</span></div>)}{steps.length > 0 && <div className="mt-2 pt-2 border-t border-gray-600 flex justify-between items-center"><span>Resultado (lendo restos de baixo para cima):</span><span className="text-green-400 font-bold">{toBinary(input)}</span></div>}</div></>);
};
const BinaryAdditionModule = () => {
    const [numA, setNumA] = useState('1011');
    const [numB, setNumB] = useState('0111');
    const { sum } = useMemo(() => {
        const a = numA.padStart(8, '0');
        const b = numB.padStart(8, '0');
        let result = '';
        let carry = 0;
        for(let i = 7; i >= 0; i--) {
            const currentSum = parseInt(a[i]) + parseInt(b[i]) + carry;
            result = (currentSum % 2) + result;
            carry = Math.floor(currentSum / 2);
        }
        return { sum: result };
    }, [numA, numB]);
    return (<div className="font-mono"><div className="flex justify-between gap-4 mb-4"><input type="text" value={numA} onChange={e => setNumA(e.target.value.replace(/[^01]/g, ''))} className="w-1/2 p-2 bg-gray-700 border border-gray-600 rounded-md text-white text-center" /><input type="text" value={numB} onChange={e => setNumB(e.target.value.replace(/[^01]/g, ''))} className="w-1/2 p-2 bg-gray-700 border border-gray-600 rounded-md text-white text-center" /></div><div className="bg-gray-900 p-4 rounded-md text-right"><p>{numA.padStart(8, '0')}</p><p><span className="mr-2">+</span>{numB.padStart(8, '0')}</p><hr className="border-gray-600 my-1"/><p className="text-green-400 font-bold">{sum}</p></div></div>);
};

export default function NumberSystemsCoursePage() {
    const FormulaSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50"><text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="20" fill="white">N =<tspan dx="10">Σ</tspan><tspan dx="5">(dígito</tspan><tspan dx="5">·</tspan><tspan dx="5">base</tspan><tspan dy="-8" fontSize="14">posição</tspan><tspan dx="5" dy="8">)</tspan></text></svg>);
    return (<div><h2 className="text-4xl font-bold text-white mb-4">    Sistemas Numéricos e Operações</h2><p className="text-lg text-gray-400 mb-10">O ponto de partida da computação digital. Explore como os computadores representam números e realizam cálculos.</p><CourseSection title="Conversão de Qualquer Base para Decimal"><p>O método universal é o <strong>Teorema Fundamental da Notação Posicional</strong>. O valor de um número é a soma de seus dígitos multiplicados pela sua base elevada à sua posição.</p><div className="my-4"><FormulaSVG /></div><InteractiveLab title="Laboratório: Binário para Decimal"><p className="text-sm text-gray-400 mb-4">Digite um número binário para ver o cálculo do valor decimal passo a passo.</p><BinaryToDecimalModule /></InteractiveLab></CourseSection><CourseSection title="Conversão de Decimal para Outras Bases"><p>Para a parte inteira, usamos o método das <strong>divisões sucessivas</strong>. Dividimos o número pela base de destino repetidamente, e o resultado é formado pelos restos lidos na ordem inversa.</p><InteractiveLab title="Laboratório: Decimal para Binário"><p className="text-sm text-gray-400 mb-4">Digite um número decimal para ver a conversão para binário pelo método das divisões.</p><DecimalToBinaryModule /></InteractiveLab></CourseSection><CourseSection title="Conversão Direta: Binário ↔ Hexadecimal"><p>Essa conversão é um atalho, possível porque 16 = 2<sup>4</sup>. Cada dígito hexadecimal corresponde a um grupo de exatamente 4 bits.</p><ul><li><strong>Binário para Hexa:</strong> Agrupe os bits em conjuntos de 4 (da direita para a esquerda).</li><li><strong>Hexa para Binário:</strong> Substitua cada dígito hexadecimal pelo seu correspondente de 4 bits.</li></ul></CourseSection><CourseSection title="Operações Aritméticas Binárias"><h4>Soma Binária</h4><p>A regra mais importante é 1 + 1 = 10 (resultado '0', 'vai um' para a próxima coluna).</p><InteractiveLab title="Simulador de Soma Binária"><p className="text-sm text-gray-400 mb-4">Digite dois números binários para ver a soma.</p><BinaryAdditionModule /></InteractiveLab><h4>Subtração Binária</h4><p>A operação A - B é transformada em A + (-B), usando uma técnica chamada <strong>Complemento de Dois</strong> para representar números negativos.</p></CourseSection></div>);
}
