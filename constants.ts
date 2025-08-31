
import type { Equipment, Vlan, ConfigurationItem, FinalConsideration } from './types';
import { VlanIcon, FirewallIcon, RouteIcon, NetworkServicesIcon, ServerIcon, WifiIcon, LockIcon, DollarIcon, UserIcon } from './components/Icons';

export const EQUIPMENT_LIST: Equipment[] = [
  {
    name: 'Roteador',
    model: 'Cisco 800 Series (ex: C891F-K9)',
    quantity: 1,
    purpose: 'Gateway de internet, firewall, NAT, VPN e roteamento entre VLANs.',
  },
  {
    name: 'Switch Core',
    model: 'Cisco Catalyst 2960-L (24 portas Gigabit)',
    quantity: 1,
    purpose: 'Interconexão central dos switches de setor e servidores.',
  },
  {
    name: 'Switch Financeiro',
    model: 'Cisco Catalyst 2960-L (16 portas Gigabit)',
    quantity: 1,
    purpose: 'Conectar ~15 PCs e periféricos do setor financeiro.',
  },
  {
    name: 'Switch Jurídico',
    model: 'Cisco Catalyst 2960-L (16 portas Gigabit)',
    quantity: 1,
    purpose: 'Conectar ~15 PCs e periféricos do setor jurídico.',
  },
  {
    name: 'Switch Operacional',
    model: 'Cisco Catalyst 2960-L (24 portas Gigabit)',
    quantity: 1,
    purpose: 'Conectar ~25 PCs e periféricos do setor operacional.',
  },
  {
    name: 'Switch Servidores',
    model: 'Cisco Catalyst 2960-L (8 portas Gigabit)',
    quantity: 1,
    purpose: 'Opcional para conectar servidores de forma segregada.',
  },
];

export const VLAN_SCHEME: Vlan[] = [
  {
    sector: 'Infraestrutura',
    vlanId: 1,
    subnet: '10.0.0.0 /24',
    ipRange: '10.0.0.1 - 10.0.0.254',
    gateway: '10.0.0.1',
  },
  {
    sector: 'Financeiro',
    vlanId: 10,
    subnet: '10.0.10.0 /24',
    ipRange: '10.0.10.1 - 10.0.10.254',
    gateway: '10.0.10.1',
  },
  {
    sector: 'Jurídico',
    vlanId: 20,
    subnet: '10.0.20.0 /24',
    ipRange: '10.0.20.1 - 10.0.20.254',
    gateway: '10.0.20.1',
  },
  {
    sector: 'Operacional',
    vlanId: 30,
    subnet: '10.0.30.0 /24',
    ipRange: '10.0.30.1 - 10.0.30.254',
    gateway: '10.0.30.1',
  },
  {
    sector: 'Servidores',
    vlanId: 99,
    subnet: '10.0.99.0 /24',
    ipRange: '10.0.99.1 - 10.0.99.254',
    gateway: '10.0.99.1',
  },
];

export const MAIN_CONFIGURATIONS: ConfigurationItem[] = [
  {
    title: 'VLANs (Virtual LAN)',
    objective: 'Isolar o tráfego entre setores. Um PC do Jurídico não poderá acessar diretamente um PC do Financeiro, aumentando a segurança.',
    configuration: 'As VLANs serão criadas nos switches gerenciáveis. Cada porta do switch será configurada para pertencer a uma VLAN específica.',
    icon: VlanIcon,
  },
  {
    title: 'Roteamento entre VLANs',
    objective: 'Permitir comunicação controlada entre os setores apenas quando necessário (via regras de firewall).',
    configuration: 'O roteador Cisco atuará como "roteador-on-a-stick". Uma interface física do roteador será conectada ao switch core e configurada com sub-interfaces (uma para cada VLAN).',
    icon: RouteIcon,
  },
  {
    title: 'Firewall (ACLs)',
    objective: 'Criar políticas de segurança. Ex: Setor Operacional não pode acessar a rede do Financeiro, mas todos acessam a internet.',
    configuration: 'As ACLs (Access Control Lists) são configuradas no roteador Cisco nas sub-interfaces ou globalmente para controlar o fluxo de tráfego.',
    icon: FirewallIcon,
  },
  {
    title: 'Serviços de Rede',
    objective: 'Automatizar e facilitar a gestão da rede.',
    configuration: 'DHCP: O roteador Cisco pode atribuir IPs automaticamente para cada VLAN. NAT: O roteador traduz os IPs privados para o IP público do provedor.',
    icon: NetworkServicesIcon,
  },
];


export const FINAL_CONSIDERATIONS: FinalConsideration[] = [
    {
        title: 'Servidor',
        description: 'Recomenda-se um servidor (físico/virtual) para funções críticas como Active Directory, Arquivos e Backup.',
        icon: ServerIcon,
    },
    {
        title: 'Wireless',
        description: 'Adicione Access Points Cisco (série Aironet) e crie VLANs separadas para Wi-Fi corporativo e de visitantes.',
        icon: WifiIcon,
    },
    {
        title: 'Segurança Física',
        description: 'Mantenha o roteador e os switches em um rack ou armário trancado para prevenir acesso não autorizado.',
        icon: LockIcon,
    },
    {
        title: 'Orçamento',
        description: 'Equipamentos Cisco novos têm custo elevado. Considere a linha Cisco Business ou recondicionados com garantia.',
        icon: DollarIcon,
    },
    {
        title: 'Consultoria',
        description: 'A configuração inicial requer conhecimento em IOS (Cisco). Recomenda-se contratar um profissional especializado.',
        icon: UserIcon,
    }
];
