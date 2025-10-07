import React from "react";
import {
  BrainCircuit,
  Key,
  Cpu,
  Shuffle,
  Layers,
  ToyBrick,
  Share2,
  Sigma,
  CircuitBoard,
  Route,
  MemoryStick,
  FileCode,
  Atom,
  Zap,
  Timer,
  AlertTriangle,
  FlipHorizontal,
  PlusSquare,
  Calculator,
  Repeat,
  Baseline,
  Database,
  Grid,
  Network,
  Replace,
  GitBranch,
  BoxSelect,
  ChevronRightSquare,
  LineChart,
  TrendingUp,
  Signal,
  HardDrive,
} from "lucide-react";

import NumberSystemsCoursePage from "./pages/NumberSystemsCoursePage.jsx";
import AddersCoursePage from "./pages/AddersCoursePage.jsx";
import PlaceholderModule from "./components/ui/PlaceholderModule.jsx";

export const moduleStructure = [
  {
    key: "math_fundamentals",
    label: "Matemática e Fundamentos",
    subtopics: {
      systems: {
        label: "Sistemas Numéricos e Operações",
        icon: BrainCircuit,
        Component: NumberSystemsCoursePage,
      },
      codes: {
        label: "Códigos Binários (BCD, Gray)",
        icon: Key,
        Component: () => (
          <PlaceholderModule title="Códigos Binários (BCD, Gray, ASCII)" />
        ),
      },
      gates: {
        label: "Portas Lógicas e Álgebra Booleana",
        icon: Cpu,
        Component: () => (
          <PlaceholderModule title="Portas Lógicas e Álgebra Booleana" />
        ),
      },
      demorgan: {
        label: "Teorema de DeMorgan e Dualidade",
        icon: Shuffle,
        Component: () => (
          <PlaceholderModule title="Teorema de DeMorgan e Dualidade" />
        ),
      },
      logic_values: {
        label: "Valores Lógicos (H, L, Z)",
        icon: Layers,
        Component: () => (
          <PlaceholderModule title="Valores Lógicos (H, L, Z, Don't Care)" />
        ),
      },
      logic_blocks: {
        label: "Blocos Lógicos (MUX, DEC)",
        icon: ToyBrick,
        Component: () => <PlaceholderModule title="Blocos Lógicos Básicos" />,
      },
      logic_combination: {
        label: "Combinação de Portas Lógicas",
        icon: Share2,
        Component: () => (
          <PlaceholderModule title="Combinação e Avaliação de Expressões Lógicas" />
        ),
      },
      kmap: {
        label: "Minimização e Mapas de Karnaugh",
        icon: Sigma,
        Component: () => (
          <PlaceholderModule title="Minimização Lógica e Mapas de Karnaugh" />
        ),
      },
      circuit_synthesis: {
        label: "Síntese de Circuitos Lógicos",
        icon: CircuitBoard,
        Component: () => (
          <PlaceholderModule title="Síntese de Circuitos Lógicos" />
        ),
      },
      fsm: {
        label: "Máquinas de Estados Finitos",
        icon: Route,
        Component: () => (
          <PlaceholderModule title="Máquinas de Estados Finitos (Moore & Mealy)" />
        ),
      },
    },
  },
    {
        key: "computer_architecture",
        label: "Arquitetura de Computadores",
        subtopics: {
        assembly_types: {
            label: "Tipos de Instruções",
            icon: Cpu,
            Component: () => (
            <PlaceholderModule title="Tipos de Instruções Assembly" />
            ),
        },
        assembly_formats: {
            label: "Formatos de Instruções",
            icon: FileCode,
            Component: () => <PlaceholderModule title="Formatos de Instruções" />,
        },
         // Novos tópicos, todos no mesmo nível
      assembly_operands: {
        label: "Operandos em Instruções Assembly",
        icon: Cpu, 
        Component: () => <PlaceholderModule title="Operandos em Instruções Assembly" />,
      },
      addressing_modes: {
        label: "Modos de Endereçamento",
        icon: FileCode,
        Component: () => <PlaceholderModule title="Modos de Endereçamento" />,
      },
      microarchitecture: {
        label: "Implementação da Microarquitetura",
        icon: Cpu, 
        Component: () => <PlaceholderModule title="Implementação da Microarquitetura" />,
      },
      control_unit: {
        label: "Unidade de Controle",
        icon: FileCode, 
        Component: () => <PlaceholderModule title="Unidade de Controle" />,
      },
      datapath: {
        label: "Datapath (Caminho de Dados)",
        icon: Cpu, 
        Component: () => <PlaceholderModule title="Datapath (Caminho de Dados)" />,
      },
        },
    },
  {
    key: "digital_circuits",
    label: "Circuitos Digitais",
    subtopics: {
      cmos: {
        label: "Lógica CMOS Combinacional",
        icon: Cpu,
        Component: () => (
          <PlaceholderModule title="Lógica CMOS Combinacional" />
        ),
      },
      electrical_behavior: {
        label: "Comportamentos Elétricos",
        icon: Zap,
        Component: () => <PlaceholderModule title="Comportamentos Elétricos" />,
      },
      delays: {
        label: "Propagação de Atrasos",
        icon: Timer,
        Component: () => (
          <PlaceholderModule title="Propagação de Atrasos e Caminho Crítico" />
        ),
      },
      hazards: {
        label: "Glitches e Hazards",
        icon: AlertTriangle,
        Component: () => <PlaceholderModule title="Glitches e Hazards" />,
      },
      sequential_logic: {
        label: "Lógica Sequencial",
        icon: FlipHorizontal,
        Component: () => (
          <PlaceholderModule title="Lógica Sequencial (Latches, Flip-Flops)" />
        ),
      },
      sequential_timing: {
        label: "Temporização Sequencial",
        icon: Timer,
        Component: () => (
          <PlaceholderModule title="Temporização de Lógica Sequencial" />
        ),
      },
      adders: {
        label: "Somadores (Half, Full)",
        icon: PlusSquare,
        Component: AddersCoursePage,
      },
      alu_units: {
        label: "Outras Unidades (ULA)",
        icon: Calculator,
        Component: () => (
          <PlaceholderModule title="Outras Unidades Funcionais" />
        ),
      },
      counters: {
        label: "Contadores",
        icon: Repeat,
        Component: () => <PlaceholderModule title="Contadores" />,
      },
      number_representation: {
        label: "Ponto Fixo e Flutuante",
        icon: Baseline,
        Component: () => <PlaceholderModule title="Representação Numérica" />,
      },
      memories: {
        label: "Memórias (ROM, SRAM, DRAM)",
        icon: Database,
        Component: () => <PlaceholderModule title="Memórias" />,
      },
      logic_arrays: {
        label: "Arranjos Lógicos (PLA, PAL)",
        icon: Grid,
        Component: () => <PlaceholderModule title="Arranjos Lógicos" />,
      },
      fpga: {
        label: "CPLDs e FPGAs",
        icon: Cpu,
        Component: () => <PlaceholderModule title="CPLDs e FPGAs" />,
      },
    },
  },
  {
    key: "electrical_circuits",
    label: "Circuitos Elétricos/Eletrônicos",
    subtopics: {
      kirchoff: {
        label: "Leis de Kirchoff",
        icon: Network,
        Component: () => <PlaceholderModule title="Leis de Kirchoff" />,
      },
      source_transform: {
        label: "Transformação de Fontes",
        icon: Replace,
        Component: () => <PlaceholderModule title="Transformação de Fontes" />,
      },
      thevenin_norton: {
        label: "Equivalente Thevenin/Norton",
        icon: GitBranch,
        Component: () => (
          <PlaceholderModule title="Equivalente Thevenin e Norton" />
        ),
      },
      quadripolos: {
        label: "Quadripolos",
        icon: BoxSelect,
        Component: () => <PlaceholderModule title="Quadripolos" />,
      },
      op_amps: {
        label: "Amplificadores Operacionais",
        icon: ChevronRightSquare,
        Component: () => (
          <PlaceholderModule title="Amplificadores Operacionais" />
        ),
      },
    },
  },
  {
    key: "microelectronics",
    label: "Fundamentos em Microeletrônica",
    subtopics: {
      mosfet: {
        label: "Transistor MOSFET",
        icon: Cpu,
        Component: () => <PlaceholderModule title="Transistor MOSFET" />,
      },
      iv_curve: {
        label: "Curva I/V",
        icon: LineChart,
        Component: () => <PlaceholderModule title="Curva I/V" />,
      },
      transconductance: {
        label: "Transcondutância",
        icon: TrendingUp,
        Component: () => <PlaceholderModule title="Transcondutância" />,
      },
      signal_models: {
        label: "Modelos de Sinais",
        icon: Signal,
        Component: () => (
          <PlaceholderModule title="Modelo de Grande e Pequenos Sinais" />
        ),
      },
      basic_amps: {
        label: "Amplificadores Básicos",
        icon: ChevronRightSquare,
        Component: () => <PlaceholderModule title="Amplificadores Básicos" />,
      },
    },
  },
  {
    key: "programming",
    label: "Programação Básica",
    subtopics: {
      linux: {
        label: "Linux",
        icon: HardDrive,
        Component: () => <PlaceholderModule title="Linux" />,
      },
      tcl_tk: {
        label: "TCL/TK",
        icon: FileCode,
        Component: () => <PlaceholderModule title="TCL/TK" />,
      },
      perl: {
        label: "Perl",
        icon: FileCode,
        Component: () => <PlaceholderModule title="Perl" />,
      },
      python: {
        label: "Python",
        icon: FileCode,
        Component: () => <PlaceholderModule title="Python" />,
      },
    },
  },
];

export const allModulesMap = moduleStructure.reduce(
  (acc, section) => ({ ...acc, ...section.subtopics }),
  {}
);
