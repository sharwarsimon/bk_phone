import React from 'react';
import * as LucideIcons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-6 h-6', size, color }) => {
  if (!name) {
    return <LucideIcons.Folder className={className} size={size} color={color} />;
  }

  // Check if name is an image URL or base64 data
  if (name.startsWith('http://') || name.startsWith('https://') || name.startsWith('data:image/')) {
    return (
      <img
        src={name}
        alt="icon"
        className={`${className} object-contain`}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Find icon in Lucide
  const IconComponent = (LucideIcons as any)[name] || 
                        (LucideIcons as any)[name.charAt(0).toUpperCase() + name.slice(1)] ||
                        LucideIcons.Folder;

  return <IconComponent className={className} size={size} color={color} />;
};

export const AVAILABLE_LUCIDE_ICONS = [
  'ShieldAlert', 'Shield', 'HeartPulse', 'Stethoscope', 'Building2', 'Ambulance',
  'Pill', 'Droplet', 'Activity', 'Syringe', 'Bus', 'Train', 'Ship', 'Car',
  'CarTaxiFront', 'Bike', 'Package', 'Landmark', 'MapPin', 'Info', 'Layers',
  'GraduationCap', 'TrendingUp', 'Award', 'Camera', 'Building', 'ShoppingBag',
  'Mail', 'Store', 'Utensils', 'Smartphone', 'Sprout', 'Leaf', 'Zap', 'Flame',
  'Scale', 'Newspaper', 'UserCheck', 'Users', 'Briefcase', 'BookOpen', 'Radio',
  'FileText', 'Calendar', 'Clock', 'Compass', 'Globe', 'HelpCircle'
];
