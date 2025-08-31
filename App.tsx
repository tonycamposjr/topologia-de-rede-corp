import React from 'react';
import { EQUIPMENT_LIST, VLAN_SCHEME, MAIN_CONFIGURATIONS, FINAL_CONSIDERATIONS } from './constants';
import type { Equipment, Vlan, ConfigurationItem, FinalConsideration } from './types';
import { Card } from './components/Card';
import { TopologyDiagram } from './components/TopologyDiagram';
import { GlobeIcon, NotesIcon, TableIcon, WrenchIcon, CheckCircleIcon, InfoIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-zinc-800 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Proposta de Rede
          </h1>
          <p className="mt-2 text-lg text-zinc-500">Para 40 PCs com Roteador Central Cisco e Switches Setoriais</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="lg:col-span-2">
             <Card title="Topologia da Rede" icon={WrenchIcon}>
                <p className="text-zinc-600 mb-6 text-center max-w-3xl mx-auto">A rede seguirá uma topologia estrela hierárquica, com um roteador central e switches dedicados por setor para garantir organização, segurança e facilidade de gerenciamento.</p>
                <TopologyDiagram />
             </Card>
          </div>
          
          <Card title="Equipamentos Recomendados" icon={NotesIcon}>
            <div className="space-y-4">
              {EQUIPMENT_LIST.map((item: Equipment, index: number) => (
                <div key={index} className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                  <h3 className="font-semibold text-blue-600">{item.name}</h3>
                  <p className="text-sm text-zinc-500 italic mb-2">{item.model}</p>
                  <p className="text-zinc-700 text-sm"><span className="font-medium text-zinc-800">Quantidade:</span> {item.quantity}</p>
                  <p className="text-zinc-700 text-sm"><span className="font-medium text-zinc-800">Finalidade:</span> {item.purpose}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm flex items-start gap-3">
              <InfoIcon className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
              <div>
                <span className="font-semibold">Observações:</span> A soma de portas excede 40 para permitir crescimento. Todos os switches devem ser Gigabit e Gerenciáveis para suportar VLANs e alta performance.
              </div>
            </div>
          </Card>

          <Card title="Endereçamento IP (VLANs)" icon={TableIcon}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b-2 border-zinc-200">
                  <tr>
                    <th className="p-3 text-sm font-semibold text-zinc-600">Setor</th>
                    <th className="p-3 text-sm font-semibold text-zinc-600">VLAN ID</th>
                    <th className="p-3 text-sm font-semibold text-zinc-600">Sub-rede</th>
                    <th className="p-3 text-sm font-semibold text-zinc-600">Gateway</th>
                  </tr>
                </thead>
                <tbody>
                  {VLAN_SCHEME.map((vlan: Vlan, index: number) => (
                    <tr key={index} className="border-b border-zinc-200 last:border-b-0">
                      <td className="p-3 font-medium text-blue-600">{vlan.sector}</td>
                      <td className="p-3 text-zinc-700">{vlan.vlanId}</td>
                      <td className="p-3 font-mono text-sm text-zinc-600">{vlan.subnet}</td>
                      <td className="p-3 font-mono text-sm text-zinc-600">{vlan.gateway}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="lg:col-span-2">
            <Card title="Configurações Principais" icon={WrenchIcon}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {MAIN_CONFIGURATIONS.map((config: ConfigurationItem, index: number) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-zinc-50 rounded-lg">
                            <config.icon className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg text-zinc-900">{config.title}</h3>
                                <p className="text-zinc-600 mt-1"><span className="font-medium text-zinc-800">Objetivo:</span> {config.objective}</p>
                                <p className="text-zinc-600 mt-2"><span className="font-medium text-zinc-800">Configuração:</span> {config.configuration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card title="Considerações Finais" icon={CheckCircleIcon}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FINAL_CONSIDERATIONS.map((item: FinalConsideration, index: number) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                    <item.icon className="w-7 h-7 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-zinc-900">{item.title}</h4>
                      <p className="text-zinc-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;