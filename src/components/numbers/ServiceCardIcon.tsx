import React from 'react';
import {
  Shield,
  Scale,
  Camera,
  Flame,
  Zap,
  Award,
  Stethoscope,
  HeartPulse,
  Building2,
  FlaskConical,
  Ambulance,
  Droplet,
  Package,
  Car,
  Bike,
  Navigation,
  Bus,
  Train,
  Landmark,
  FileText,
  Users,
  CreditCard,
  Mail,
  HeartHandshake
} from 'lucide-react';

interface ServiceCardIconProps {
  type: string;
  className?: string;
}

export const ServiceCardIcon: React.FC<ServiceCardIconProps> = ({ type, className = 'w-10 h-10' }) => {
  switch (type) {
    case 'police':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-400 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-blue-500 to-indigo-700 flex items-center justify-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Shield className="w-6.5 h-6.5 drop-shadow-sm fill-white/20 stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'lawyer':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-600 via-yellow-600 to-amber-400 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-amber-600 to-yellow-700 flex items-center justify-center text-white relative overflow-hidden">
            <Scale className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'journalist':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-400 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-indigo-500 to-purple-700 flex items-center justify-center text-white relative overflow-hidden">
            <Camera className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'fire-service':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-600 to-orange-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-red-500 to-rose-700 flex items-center justify-center text-white relative overflow-hidden">
            <Flame className="w-6.5 h-6.5 drop-shadow-sm fill-white/30 stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'electricity':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-500 to-orange-400 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-amber-500 to-yellow-600 flex items-center justify-center text-white relative overflow-hidden">
            <Zap className="w-6.5 h-6.5 drop-shadow-sm fill-white stroke-white stroke-[2]" />
          </div>
        </div>
      );

    case 'famous':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-pink-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-purple-500 to-fuchsia-700 flex items-center justify-center text-white relative overflow-hidden">
            <Award className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'doctor':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-teal-400 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-teal-500 to-emerald-700 flex items-center justify-center text-white relative overflow-hidden">
            <Stethoscope className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'veterinary':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-600 via-green-600 to-emerald-400 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-emerald-500 to-green-700 flex items-center justify-center text-white relative overflow-hidden">
            <HeartPulse className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'hospital':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-cyan-600 via-sky-600 to-blue-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-cyan-500 to-blue-700 flex items-center justify-center text-white relative overflow-hidden">
            <Building2 className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'pathology':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-violet-600 via-purple-600 to-indigo-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-violet-500 to-indigo-700 flex items-center justify-center text-white relative overflow-hidden">
            <FlaskConical className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'ambulance':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-rose-600 via-red-600 to-pink-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-rose-500 to-red-700 flex items-center justify-center text-white relative overflow-hidden">
            <Ambulance className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'blood':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-700 to-red-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-red-600 to-rose-800 flex items-center justify-center text-white relative overflow-hidden">
            <Droplet className="w-6.5 h-6.5 drop-shadow-sm fill-white stroke-white stroke-[2]" />
          </div>
        </div>
      );

    case 'courier':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-600 to-orange-400 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-orange-500 to-amber-700 flex items-center justify-center text-white relative overflow-hidden">
            <Package className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'car':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-sky-600 via-blue-600 to-cyan-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-sky-500 to-blue-700 flex items-center justify-center text-white relative overflow-hidden">
            <Car className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'bike':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-slate-700 via-gray-700 to-slate-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-slate-600 to-gray-800 flex items-center justify-center text-white relative overflow-hidden">
            <Bike className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'cng':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-green-600 via-emerald-600 to-lime-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-green-500 to-emerald-700 flex items-center justify-center text-white relative overflow-hidden">
            <Navigation className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'bus':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-700 to-indigo-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-indigo-600 to-blue-800 flex items-center justify-center text-white relative overflow-hidden">
            <Bus className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'train':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-600 to-yellow-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-amber-600 to-orange-700 flex items-center justify-center text-white relative overflow-hidden">
            <Train className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'admin':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-700 to-emerald-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-emerald-600 to-teal-800 flex items-center justify-center text-white relative overflow-hidden">
            <Landmark className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'land':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-teal-600 via-cyan-700 to-teal-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-teal-600 to-cyan-800 flex items-center justify-center text-white relative overflow-hidden">
            <FileText className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'chairmen':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-700 to-blue-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-blue-600 to-indigo-800 flex items-center justify-center text-white relative overflow-hidden">
            <Users className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'bank':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-cyan-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-teal-500 to-emerald-700 flex items-center justify-center text-white relative overflow-hidden">
            <CreditCard className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'post':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-600 to-amber-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-red-500 to-rose-700 flex items-center justify-center text-white relative overflow-hidden">
            <Mail className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    case 'social':
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-rose-700 via-pink-700 to-rose-500 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-rose-600 to-pink-800 flex items-center justify-center text-white relative overflow-hidden">
            <HeartHandshake className="w-6.5 h-6.5 drop-shadow-sm stroke-white stroke-[2.2]" />
          </div>
        </div>
      );

    default:
      return (
        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <div className="w-full h-full rounded-[14px] bg-blue-600 flex items-center justify-center text-white">
            <Shield className="w-6.5 h-6.5 stroke-white" />
          </div>
        </div>
      );
  }
};
