
export interface Equipment {
  name: string;
  model: string;
  quantity: number;
  purpose: string;
}

export interface Vlan {
  sector: string;
  vlanId: number;
  subnet: string;
  ipRange: string;
  gateway: string;
}

export interface ConfigurationItem {
  title: string;
  objective: string;
  configuration: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FinalConsideration {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}
