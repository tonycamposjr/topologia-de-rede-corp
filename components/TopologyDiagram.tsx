import React from 'react';
import { CloudIcon, RouterIcon, SwitchIcon, ServerIcon, UsersIcon } from './Icons';

interface NodeProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel?: string;
}

const Node: React.FC<NodeProps> = ({ icon: Icon, label, sublabel }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-3 border-2 border-blue-500 bg-blue-50 text-blue-800 rounded-lg shadow-sm w-40 min-h-[100px]">
      <Icon className="w-8 h-8 mb-2 text-blue-600" />
      <span className="font-bold text-zinc-900 text-sm">{label}</span>
      {sublabel && <span className="text-xs mt-1">{sublabel}</span>}
    </div>
  );
};


const Department: React.FC<{ title: string; pcCount: string; icon: React.ComponentType<{ className?: string }>; }> = ({ title, pcCount, icon: Icon }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center text-center p-3 border border-zinc-300 bg-zinc-100 text-zinc-700 rounded-lg w-40 min-h-[100px]">
                <SwitchIcon className="w-8 h-8 mb-2" />
                <span className="font-semibold text-zinc-800 text-sm">{`Switch ${title}`}</span>
            </div>
            <div className="h-8 w-px bg-zinc-300"></div>
            <div className="flex items-center gap-2 p-2 rounded-md bg-zinc-200 text-zinc-600">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{pcCount}</span>
            </div>
        </div>
    );
};

export const TopologyDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg select-none">
      {/* Nível 1: Internet */}
      <Node icon={CloudIcon} label="Internet" sublabel="Provedor (ISP)" />
      <div className="h-8 w-px bg-zinc-300"></div>

      {/* Nível 2: Roteador */}
      <Node icon={RouterIcon} label="Roteador Central" sublabel="Cisco 800 Series" />
      <div className="h-8 w-px bg-zinc-300"></div>

      {/* Nível 3: Switch Core */}
      <Node icon={SwitchIcon} label="Switch Core" sublabel="Catalyst 2960-L" />

      {/* Linha de Conexão Horizontal */}
      <div className="w-full max-w-4xl h-px bg-zinc-300 my-8 relative">
        {/* Conectores verticais para a linha horizontal */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 w-px bg-zinc-300"></div>
        <div className="absolute top-0 left-[12.5%] -translate-x-1/2 h-8 w-px bg-zinc-300"></div>
        <div className="absolute top-0 left-[37.5%] -translate-x-1/2 h-8 w-px bg-zinc-300"></div>
        <div className="absolute top-0 left-[62.5%] -translate-x-1/2 h-8 w-px bg-zinc-300"></div>
        <div className="absolute top-0 left-[87.5%] -translate-x-1/2 h-8 w-px bg-zinc-300"></div>
      </div>

      {/* Nível 4: Switches Setoriais e Servidores */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div className="flex justify-center"><Department title="Financeiro" pcCount="~15 PCs" icon={UsersIcon} /></div>
          <div className="flex justify-center"><Department title="Jurídico" pcCount="~15 PCs" icon={UsersIcon} /></div>
          <div className="flex justify-center"><Department title="Operacional" pcCount="~25 PCs" icon={UsersIcon} /></div>
          <div className="flex justify-center"><Department title="Servidores" pcCount="Opcional" icon={ServerIcon} /></div>
      </div>
    </div>
  );
};