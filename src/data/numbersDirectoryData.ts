export interface ServiceContact {
  label: string;
  phone: string;
  designation?: string;
  location?: string;
  note?: string;
  available24h?: boolean;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  title_en: string;
  iconType: string;
  colorScheme: {
    bg: string;
    border: string;
    iconBg: string;
    iconColor: string;
    accent: string;
  };
  description: string;
  contacts: ServiceContact[];
}

export interface ServiceSection {
  id: string;
  title: string;
  title_en: string;
  items: ServiceCardItem[];
}

export const NUMBERS_SECTIONS: ServiceSection[] = [
  {
    id: 'emergency-services',
    title: 'জরুরী সেবা',
    title_en: 'Emergency Services',
    items: [
      {
        id: 'police',
        title: 'পুলিশ',
        title_en: 'Police',
        iconType: 'police',
        colorScheme: {
          bg: 'bg-blue-50/50',
          border: 'border-blue-200',
          iconBg: 'bg-blue-600',
          iconColor: 'text-white',
          accent: 'text-blue-700',
        },
        description: 'বোয়ালখালী থানা পুলিশ, ডিউটি অফিসার ও জরুরি নিরাপত্তা সেবা',
        contacts: [
          { label: 'বোয়ালখালী থানা ওয়ান-স্টপ ডিউটি অফিসার', phone: '01320-108255', designation: 'ডিউটি অফিসার (২৪ ঘণ্টা)', location: 'বোয়ালখালী থানা ভবন', available24h: true },
          { label: 'অফিসার ইনচার্জ (OC)', phone: '01320-108250', designation: 'ওসি, বোয়ালখালী থানা', location: 'থানা সদর', available24h: true },
          { label: 'ইন্সপেক্টর (তদন্ত)', phone: '01320-108251', designation: 'ওসি তদন্ত', location: 'বোয়ালখালী থানা', available24h: true },
          { label: 'কালুরঘাট পুলিশ ক্যাম্প', phone: '01320-108260', designation: 'ক্যাম্প ইনচার্জ', location: 'কালুরঘাট নতুন সেতু এলাকা', available24h: true },
          { label: 'কানুনগোপাড়া পুলিশ তদন্ত কেন্দ্র', phone: '01320-108265', designation: 'তদন্ত কেন্দ্র ইনচার্জ', location: 'কানুনগোপাড়া', available24h: true },
          { label: 'জাতীয় জরুরি পুলিশ সেবা (টোল ফ্রি)', phone: '999', designation: 'ন্যাশনাল হেল্পলাইন', location: 'সারা বাংলাদেশ', available24h: true },
        ],
      },
      {
        id: 'lawyer',
        title: 'আইনজীবী',
        title_en: 'Lawyer',
        iconType: 'lawyer',
        colorScheme: {
          bg: 'bg-amber-50/50',
          border: 'border-amber-200',
          iconBg: 'bg-amber-700',
          iconColor: 'text-white',
          accent: 'text-amber-800',
        },
        description: 'বোয়ালখালী আইনজীবী সমিতি, জেলা ও দায়রা জজ আদালত আইন সহায়তা',
        contacts: [
          { label: 'অ্যাডভোকেট নুরুল আলম চৌধুরী', phone: '01819-334411', designation: 'সিনিয়র আইনজীবী, জেলা বার', location: 'পৌর সদর ও আদালত পাড়া', note: 'সিভিল ও ক্রিমিনাল বিশেষজ্ঞ' },
          { label: 'অ্যাডভোকেট তুষার কান্তি দে', phone: '01817-556622', designation: 'এডভোকেট, সুপ্রিম কোর্ট ও জজকোর্ট', location: 'শাকপুরা / চট্টগ্রাম কোর্ট বিল্ডিং', note: 'জমি-জমা ও পারিবারিক আইন' },
          { label: 'অ্যাডভোকেট মোহাম্মদ সাইফুর রহমান', phone: '01814-778833', designation: 'আইন উপদেষ্টা', location: 'বোয়ালখালী থানা রোড', note: 'দলিল রেজিস্ট্রেশন ও নোটারি পাবলিক' },
          { label: 'অ্যাডভোকেট ফরিদা ইয়াসমিন', phone: '01812-990044', designation: 'আইনজীবী ও মানবাধিকার কর্মী', location: 'গোমদণ্ডী', note: 'নারী ও শিশু অধিকার বিষয়ক' },
          { label: 'বোয়ালখালী উপজেলা লিগ্যাল এইড অফিসার', phone: '01820-113355', designation: 'সরকারি বিনামূল্যে আইনি সহায়তা', location: 'উপজেলা পরিষদ কমপ্লেক্স', note: 'সরকারি সহায়তা' },
        ],
      },
      {
        id: 'journalist',
        title: 'সাংবাদিক',
        title_en: 'Journalist',
        iconType: 'journalist',
        colorScheme: {
          bg: 'bg-indigo-50/50',
          border: 'border-indigo-200',
          iconBg: 'bg-indigo-600',
          iconColor: 'text-white',
          accent: 'text-indigo-700',
        },
        description: 'বোয়ালখালী প্রেস ক্লাব, জাতীয় ও স্থানীয় পত্রিকার সাংবাদিক ও প্রতিনিধিগণ',
        contacts: [
          { label: 'বোয়ালখালী প্রেস ক্লাব সভাপতি', phone: '01819-665511', designation: 'প্রেস ক্লাব সভাপতি', location: 'বোয়ালখালী প্রেস ক্লাব ভবন', note: 'দৈনিক প্রথম আলো প্রতিনিধি' },
          { label: 'প্রেস ক্লাব সাধারণ সম্পাদক', phone: '01814-223388', designation: 'সাধারণ সম্পাদক', location: 'বোয়ালখালী', note: 'দৈনিক আজাদী প্রতিনিধি' },
          { label: 'দৈনিক জনকণ্ঠ ও একুশে টিভি প্রতিনিধি', phone: '01817-449900', designation: 'সিনিয়র সাংবাদিক', location: 'শাকপুরা মোড়', note: 'টিভি ও প্রিন্ট মিডিয়া' },
          { label: 'দৈনিক যুগান্তর ও চ্যানেল আই প্রতিনিধি', phone: '01812-337744', designation: 'উপজেলা প্রতিনিধি', location: 'পৌরসভা চত্বর', note: 'তথ্য ও সংবাদ যোগাযোগ' },
          { label: 'দৈনিক সমকাল ও ৭১ টিভি প্রতিনিধি', phone: '01818-552233', designation: 'করেসপন্ডেন্ট', location: 'গোমদণ্ডী', note: 'লাইভ নিউজ ও ফিচার' },
        ],
      },
      {
        id: 'fire-service',
        title: 'ফায়ার সার্ভিস',
        title_en: 'Fire Service',
        iconType: 'fire-service',
        colorScheme: {
          bg: 'bg-red-50/50',
          border: 'border-red-200',
          iconBg: 'bg-red-600',
          iconColor: 'text-white',
          accent: 'text-red-700',
        },
        description: 'বোয়ালখালী ফায়ার সার্ভিস স্টেশন ও জরুরি অগ্নিনির্বাপণ টিম',
        contacts: [
          { label: 'বোয়ালখালী ফায়ার স্টেশন হটলাইন (২৪ ঘণ্টা)', phone: '01712-445588', designation: 'কন্ট্রোল রুম', location: 'ফায়ার সার্ভিস স্টেশন, বোয়ালখালী', available24h: true },
          { label: 'স্টেশন অফিসার (ভারপ্রাপ্ত)', phone: '01819-445566', designation: 'স্টেশন অফিসার', location: 'বোয়ালখালী ফায়ার স্টেশন', available24h: true },
          { label: 'চট্টগ্রাম বিভাগীয় ফায়ার কন্ট্রোল রুম', phone: '01730-336655', designation: 'বিভাগীয় জরুরি টিম', location: 'আগ্রাবাদ, চট্টগ্রাম', available24h: true },
          { label: 'নৌ ফায়ার ইউনিট (কর্ণফুলী নদী)', phone: '01712-998844', designation: 'নদী উদ্ধার ও অগ্নিনির্বাপণ', location: 'কালুরঘাট রিভারফ্রন্ট', available24h: true },
        ],
      },
      {
        id: 'electricity',
        title: 'বিদ্যুৎ অফিস',
        title_en: 'Electricity',
        iconType: 'electricity',
        colorScheme: {
          bg: 'bg-yellow-50/50',
          border: 'border-yellow-200',
          iconBg: 'bg-amber-500',
          iconColor: 'text-white',
          accent: 'text-amber-800',
        },
        description: 'চট্টগ্রাম পল্লী বিদ্যুৎ সমিতি-১ (বোয়ালখালী জোনাল অফিস ও অভিযোগ কেন্দ্র)',
        contacts: [
          { label: 'পল্লী বিদ্যুৎ বোয়ালখালী অভিযোগ কেন্দ্র (২৪ ঘণ্টা)', phone: '01712-445511', designation: 'জরুরি বিদ্যুৎ অভিযোগ', location: 'পৌরসভা সংলগ্ন বিদ্যুৎ অফিস', available24h: true },
          { label: 'ডেপুটি জেনারেল ম্যানেজার (DGM)', phone: '01769-400120', designation: 'ডিজিএম, বোয়ালখালী জোন', location: 'জোনাল অফিস', available24h: false },
          { label: 'অভিযোগ কেন্দ্র (পূর্ব বোয়ালখালী ও কানুনগোপাড়া)', phone: '01769-400122', designation: 'লাইন টেকনিক্যাল টিম', location: 'কানুনগোপাড়া সাব-স্টেশন', available24h: true },
          { label: 'অভিযোগ কেন্দ্র (পশ্চিম বোয়ালখালী ও কালুরঘাট)', phone: '01769-400123', designation: 'লাইন টেকনিক্যাল টিম', location: 'পশ্চিম গোমদণ্ডী সাব-স্টেশন', available24h: true },
          { label: 'বিদ্যুৎ লাইন ট্রাবলশুটিং ও মিটার মেরামত টিম', phone: '01819-887766', designation: 'জরুরি মেরামতকারী', location: 'বোয়ালখালী', available24h: true },
        ],
      },
      {
        id: 'famous-personalities',
        title: 'বিখ্যাত ব্যক্তিরা',
        title_en: 'Famous People',
        iconType: 'famous',
        colorScheme: {
          bg: 'bg-purple-50/50',
          border: 'border-purple-200',
          iconBg: 'bg-purple-600',
          iconColor: 'text-white',
          accent: 'text-purple-700',
        },
        description: 'বোয়ালখালীর ঐতিহাসিক ও সমকালীন কৃতি ব্যক্তিত্ব ও গবেষক তথ্য',
        contacts: [
          { label: 'বিপ্লবী মাস্টারদা সূর্য সেন স্মৃতি সংসদ', phone: '01819-223344', designation: 'স্মৃতি ট্রাস্ট ও জাদুঘর সমন্বয়ক', location: 'সূর্য সেনের জন্মভূমি, পদুয়ার পাড়া', note: 'ঐতিহাসিক তথ্য ও গাইড' },
          { label: 'ড. আহমদ শরীফ গবেষণা পরিষদ', phone: '01817-889900', designation: 'গবেষণা ও পাঠাগার সচিব', location: 'কানুনগোপাড়া', note: 'সাহিত্য ও ইতিহাস চর্চা' },
          { label: 'বেণীমাধব বড়ুয়া স্মারক ট্রাস্ট', phone: '01814-554433', designation: 'ট্রাস্টি বোর্ড', location: 'শাকপুরা', note: 'উপমহাদেশের প্রথম ডি.লিট' },
          { label: 'আব্দুল করিম সাহিত্যবিশারদ পরিষদ', phone: '01812-776655', designation: 'সাহিত্য সমন্বয়কারী', location: 'শ্রীপুর-খরণদ্বীপ', note: 'পুঁথি গবেষক স্মৃতি কেন্দ্র' },
        ],
      },
    ],
  },
  {
    id: 'health-services',
    title: 'স্বাস্থ্য সেবা',
    title_en: 'Health Services',
    items: [
      {
        id: 'doctor',
        title: 'ডাক্তার',
        title_en: 'Doctor',
        iconType: 'doctor',
        colorScheme: {
          bg: 'bg-teal-50/50',
          border: 'border-teal-200',
          iconBg: 'bg-teal-600',
          iconColor: 'text-white',
          accent: 'text-teal-700',
        },
        description: 'বোয়ালখালী উপজেলা স্বাস্থ্য কমপ্লেক্স ও প্রাইভেট বিশেষজ্ঞ চিকিৎসকগণ',
        contacts: [
          { label: 'ডা. মোহাম্মদ ইমরান হোসেন', phone: '01819-112233', designation: 'এমবিবিএস, বিসিএস (স্বাস্থ্য), এফসিপিএস', location: 'উপজেলা স্বাস্থ্য কমপ্লেক্স', note: 'মেডিসিন ও কার্ডিওলজি বিশেষজ্ঞ' },
          { label: 'ডা. ফারহানা আক্তার', phone: '01814-334455', designation: 'এমবিবিএস, ডিজিও (গাইনী ও প্রসূতি)', location: 'শাকপুরা চৌমুহনী ডায়াগনস্টিক', note: 'নারী ও প্রসূতি রোগ বিশেষজ্ঞ' },
          { label: 'ডা. সুজন বড়ুয়া', phone: '01817-556677', designation: 'এমবিবিএস, ডিসিএইচ (শিশু রোগ)', location: 'গোমদণ্ডী স্টেশন রোড', note: 'নবজাতক ও শিশু বিশেষজ্ঞ' },
          { label: 'ডা. কামরুল হাসান', phone: '01812-778899', designation: 'এমবিবিএস, এমএস (অর্থোপেডিক্স)', location: 'বোয়ালখালী সেন্ট্রাল হাসপাতাল', note: 'হাড়, জোড়া ও বাত-ব্যথা বিশেষজ্ঞ' },
          { label: 'ডা. রফিকুল ইসলাম চৌধুরী', phone: '01820-990011', designation: 'এমবিবিএস, ডিডিভি (চর্ম ও যৌন)', location: 'কানুনগোপাড়া চেম্বার', note: 'চর্ম ও অ্যালার্জি রোগ' },
        ],
      },
      {
        id: 'veterinary',
        title: 'ভেটেরিনারি',
        title_en: 'Veterinary',
        iconType: 'veterinary',
        colorScheme: {
          bg: 'bg-emerald-50/50',
          border: 'border-emerald-200',
          iconBg: 'bg-emerald-600',
          iconColor: 'text-white',
          accent: 'text-emerald-700',
        },
        description: 'উপজেলা প্রাণিসম্পদ দপ্তর, পশু চিকিৎসক ও কৃত্রিম প্রজনন সেবা',
        contacts: [
          { label: 'উপজেলা প্রাণিসম্পদ কর্মকর্তা (ULO)', phone: '01712-887722', designation: 'ইউএলও বোয়ালখালী', location: 'উপজেলা প্রাণিসম্পদ দপ্তর', available24h: false },
          { label: 'ভেটেরিনারি সার্জন (পশু চিকিৎসক)', phone: '01819-554422', designation: 'ভেটেরিনারি সার্জন', location: 'প্রাণিসম্পদ হাসপাতাল', available24h: true },
          { label: 'উপ-সহকারী প্রাণিসম্পদ কর্মকর্তা (কৃত্রিম প্রজনন)', phone: '01814-663311', designation: 'ডেইরি ও পোল্ট্রি সাপোর্ট', location: 'সারোয়াতলী ও পোপাদিয়া', available24h: true },
          { label: 'জরুরি পশু চিকিৎসা ও টিকাদান টিম', phone: '01817-221199', designation: 'ভ্রাম্যমাণ ভেট টিম', location: 'বোয়ালখালী', available24h: true },
        ],
      },
      {
        id: 'hospital',
        title: 'হাসপাতাল',
        title_en: 'Hospital',
        iconType: 'hospital',
        colorScheme: {
          bg: 'bg-cyan-50/50',
          border: 'border-cyan-200',
          iconBg: 'bg-cyan-600',
          iconColor: 'text-white',
          accent: 'text-cyan-700',
        },
        description: 'বোয়ালখালী ৫০ শয্যা উপজেলা স্বাস্থ্য কমপ্লেক্স ও আধুনিক প্রাইভেট ক্লিনিক',
        contacts: [
          { label: 'বোয়ালখালী উপজেলা স্বাস্থ্য কমপ্লেক্স (জরুরি বিভাগ)', phone: '01814-223344', designation: 'সরকারি ৫০ শয্যা হাসপাতাল (২৪ ঘণ্টা)', location: 'হাসপাতাল রোড, বোয়ালখালী', available24h: true },
          { label: 'উপজেলা স্বাস্থ্য ও প.প. কর্মকর্তা (UH&FPO)', phone: '01712-334455', designation: 'ইউএইচএফপিও', location: 'স্বাস্থ্য কমপ্লেক্স প্রশাসনিক ভবন', available24h: false },
          { label: 'বোয়ালখালী সেন্ট্রাল ক্লিনিক ও ডায়াগনস্টিক', phone: '01819-889922', designation: 'প্রাইভেট হাসপাতাল (২৪ ঘণ্টা)', location: 'থানা সদর মোড়', available24h: true },
          { label: 'শাকপুরা আধুনিক জেনারেল হাসপাতাল', phone: '01812-446677', designation: 'প্রসূতি ও শিশু কেয়ার', location: 'শাকপুরা চৌমুহনী', available24h: true },
        ],
      },
      {
        id: 'pathology',
        title: 'প্যাথলজি',
        title_en: 'Pathology',
        iconType: 'pathology',
        colorScheme: {
          bg: 'bg-violet-50/50',
          border: 'border-violet-200',
          iconBg: 'bg-violet-600',
          iconColor: 'text-white',
          accent: 'text-violet-700',
        },
        description: 'রক্ত, প্রস্রাব পরীক্ষা, ডিজিটাল এক্স-রে, আল্ট্রাসনোগ্রাফি ও ল্যাব টেস্ট',
        contacts: [
          { label: 'পপুলার ডিজিটাল ডায়াগনস্টিক অ্যান্ড প্যাথলজি', phone: '01819-445522', designation: 'আধুনিক ল্যাব (২৪ ঘণ্টা রিপোর্ট)', location: 'উপজেলা স্বাস্থ্য কমপ্লেক্স সংলগ্ন', available24h: true },
          { label: 'মেডিপ্লাস ডায়াগনস্টিক সেন্টার', phone: '01814-778811', designation: 'এক্স-রে, ইসিজি ও রক্ত পরীক্ষা', location: 'শাকপুরা চৌমুহনী', available24h: false },
          { label: 'কর্ণফুলী প্যাথলজি ল্যাব', phone: '01817-990033', designation: 'কম্পিউটারাইজড ল্যাব টেস্ট', location: 'গোমদণ্ডী স্টেশন রোড', available24h: false },
          { label: 'আলোক ডায়াগনস্টিক অ্যান্ড কনসালটেশন', phone: '01812-556644', designation: 'হরমোন ও স্পেশাল টেস্ট', location: 'কানুনগোপাড়া', available24h: false },
        ],
      },
      {
        id: 'ambulance',
        title: 'অ্যাম্বুলেন্স',
        title_en: 'Ambulance',
        iconType: 'ambulance',
        colorScheme: {
          bg: 'bg-rose-50/50',
          border: 'border-rose-200',
          iconBg: 'bg-rose-600',
          iconColor: 'text-white',
          accent: 'text-rose-700',
        },
        description: 'বোয়ালখালী ও চট্টগ্রাম মেডিকেল কলেজ দ্রুত রোগী পরিবহনে জরুরি অ্যাম্বুলেন্স',
        contacts: [
          { label: 'উপজেলা স্বাস্থ্য কমপ্লেক্স সরকারি অ্যাম্বুলেন্স', phone: '01814-223344', designation: 'সরকারি অ্যাম্বুলেন্স ড্রাইভার (২৪ ঘণ্টা)', location: 'বোয়ালখালী হাসপাতাল চত্বর', available24h: true },
          { label: 'বোয়ালখালী আল-মানাহিল ফ্রি/জরুরি অ্যাম্বুলেন্স', phone: '01819-334466', designation: 'মানবিক ফ্রি অ্যাম্বুলেন্স সার্ভিস', location: 'শাকপুরা', available24h: true },
          { label: 'রেড ক্রিসেন্ট বোয়ালখালী ইউনিট অ্যাম্বুলেন্স', phone: '01817-445577', designation: 'জরুরি অক্সিজেন ও আইসিইউ অ্যাম্বুলেন্স', location: 'পৌর সদর', available24h: true },
          { label: 'প্রাইভেট এসি অ্যাম্বুলেন্স (চট্টগ্রাম চমেক ও ঢাকা)', phone: '01812-667788', designation: '২৪ ঘণ্টা রোগী পরিবহন', location: 'গোমদণ্ডী', available24h: true },
        ],
      },
      {
        id: 'blood-donor',
        title: 'রক্তদাতা',
        title_en: 'Blood Donor',
        iconType: 'blood',
        colorScheme: {
          bg: 'bg-red-50/50',
          border: 'border-red-200',
          iconBg: 'bg-red-700',
          iconColor: 'text-white',
          accent: 'text-red-800',
        },
        description: 'বোয়ালখালী রক্তদান সংগঠন, জরুরি এ, বি, ও, এবি পজিটিভ/নেগেটিভ ডোনার',
        contacts: [
          { label: 'বোয়ালখালী ব্লাড ডোনার্স ক্লাব (হটলাইন)', phone: '01819-556677', designation: 'জরুরি রক্ত ব্যবস্থাপনা টিম', location: 'সেন্ট্রাল বোয়ালখালী', available24h: true },
          { label: 'সন্ধানী ও বাঁধন রক্ত সমন্বয়ক বোয়ালখালী', phone: '01814-889900', designation: 'রক্তদান সমন্বয়ক', location: 'শাকপুরা ও গোমদণ্ডী', available24h: true },
          { label: 'রেয়ার ব্লাড গ্রুপ হেল্পলাইন (A-, B-, O-, AB-)', phone: '01817-112244', designation: 'নেগেটিভ রক্তের বিশেষ টিম', location: 'বোয়ালখালী', available24h: true },
          { label: 'তরুণ রক্তবন্ধু বোয়ালখালী যুব ফোরাম', phone: '01812-334466', designation: 'স্বেচ্ছাসেবী রক্তদাতা নেটওয়ার্ক', location: 'কানুনগোপাড়া ও কধুরখীল', available24h: true },
        ],
      },
    ],
  },
  {
    id: 'transport-services',
    title: 'পরিবহন সেবা',
    title_en: 'Transport Services',
    items: [
      {
        id: 'courier',
        title: 'কুরিয়ার সার্ভিস',
        title_en: 'Courier Service',
        iconType: 'courier',
        colorScheme: {
          bg: 'bg-orange-50/50',
          border: 'border-orange-200',
          iconBg: 'bg-orange-600',
          iconColor: 'text-white',
          accent: 'text-orange-700',
        },
        description: 'সুন্দরবন, এসএ পরিবহন, রেডএক্স ও স্টিডফাস্ট কুরিয়ার পার্সেল ডেলিভারি',
        contacts: [
          { label: 'সুন্দরবন কুরিয়ার সার্ভিস বোয়ালখালী ব্রাঞ্চ', phone: '01819-778844', designation: 'শাখা ব্যবস্থাপক', location: 'শাকপুরা চৌমুহনী', available24h: false },
          { label: 'এসএ পরিবহন গোমদণ্ডী এজেন্ট', phone: '01814-556633', designation: 'পার্সেল ও মানি অর্ডার বুকিং', location: 'গোমদণ্ডী রেলস্টেশন রোড', available24h: false },
          { label: 'স্টিডফাস্ট কুরিয়ার হোম ডেলিভারি হাব', phone: '01817-889922', designation: 'ই-কমার্স পার্সেল ডেলিভারি', location: 'বোয়ালখালী পৌর সদর', available24h: false },
          { label: 'রেডএক্স ও পাঠাও লজিস্টিক বোয়ালখালী পয়েন্ট', phone: '01812-113355', designation: 'ডেলিভারি রাইডার সমন্বয়ক', location: 'কানুনগোপাড়া মোড়', available24h: false },
        ],
      },
      {
        id: 'car-rental',
        title: 'গাড়ী ভাড়া',
        title_en: 'Car Rental',
        iconType: 'car',
        colorScheme: {
          bg: 'bg-blue-50/50',
          border: 'border-blue-200',
          iconBg: 'bg-sky-600',
          iconColor: 'text-white',
          accent: 'text-sky-700',
        },
        description: 'বোয়ালখালী রেন্ট-এ-কার, মাইক্রোবাস, হাইয়েস, নোয়া ও প্রাইভেট কার ভাড়া',
        contacts: [
          { label: 'বোয়ালখালী রেন্ট-এ-কার সমবায় সমিতি', phone: '01819-224488', designation: 'সভাপতি ও বুকিং কন্ট্রোল', location: 'কালুরঘাট ও পৌরসভা স্ট্যান্ড', available24h: true },
          { label: 'আল-মদিনা মাইক্রোবাস ও হাইয়েস সার্ভিস', phone: '01814-667799', designation: 'বিয়ে ও ফ্যামিলি ট্যুর বুকিং', location: 'শাকপুরা মোড়', available24h: true },
          { label: 'কর্ণফুলী প্রাইভেট কার ও এক্স-করোলা ভাড়া', phone: '01817-335588', designation: 'এসি প্রাইভেট কার', location: 'গোমদণ্ডী স্টেশন চত্বর', available24h: true },
          { label: 'চট্টগ্রাম বিমানবন্দর ড্রপ ও পিকআপ কার সার্ভিস', phone: '01812-889911', designation: '২৪ ঘণ্টা এয়ারপোর্ট ড্রপ', location: 'বোয়ালখালী', available24h: true },
        ],
      },
      {
        id: 'bike-rental',
        title: 'হোন্ডা ভাড়া',
        title_en: 'Bike Rental',
        iconType: 'bike',
        colorScheme: {
          bg: 'bg-slate-50/50',
          border: 'border-slate-200',
          iconBg: 'bg-slate-700',
          iconColor: 'text-white',
          accent: 'text-slate-800',
        },
        description: 'জরুরি যাতায়াতে বাইক রাইড শেয়ারিং, হোন্ডা ড্রাইভার ও পার্সেল রাইডার',
        contacts: [
          { label: 'বোয়ালখালী বাইক রাইডার্স সার্ভিস', phone: '01819-992211', designation: 'জরুরি বাইক রাইড কন্ট্রোলার', location: 'কালুরঘাট নতুন সেতু প্রান্ত', available24h: true },
          { label: 'দ্রুত রাইড শাকপুরা হোন্ডা পয়েন্ট', phone: '01814-445522', designation: 'লোকাল ও চট্টগ্রাম শহর রাইডার্স', location: 'শাকপুরা বাজার', available24h: true },
          { label: 'কানুনগোপাড়া বাইকার্স হাব', phone: '01817-778833', designation: 'পাহাড় ও গ্রামীণ রুট সার্ভিস', location: 'কানুনগোপাড়া কলেজ গেট', available24h: true },
        ],
      },
      {
        id: 'cng-stand',
        title: 'সিএনজি স্ট্যান্ড',
        title_en: 'CNG Stand',
        iconType: 'cng',
        colorScheme: {
          bg: 'bg-green-50/50',
          border: 'border-green-200',
          iconBg: 'bg-green-600',
          iconColor: 'text-white',
          accent: 'text-green-800',
        },
        description: 'বোয়ালখালী সিএনজি অটোরিকশা চালক সমবায় সমিতি ও স্ট্যান্ড লাইনম্যান',
        contacts: [
          { label: 'কালুরঘাট নতুন ব্রিজ সিএনজি স্ট্যান্ড লাইনম্যান', phone: '01819-556633', designation: 'কালুরঘাট-বোয়ালখালী রুট মাস্টার', location: 'কালুরঘাট পয়েন্ট', available24h: true },
          { label: 'গোমদণ্ডী স্টেশন সিএনজি সমিতি', phone: '01814-112299', designation: 'স্ট্যান্ড ইনচার্জ', location: 'গোমদণ্ডী রেলস্টেশন', available24h: true },
          { label: 'শাকপুরা চৌমুহনী সিএনজি স্ট্যান্ড', phone: '01817-446688', designation: 'লাইনম্যান', location: 'শাকপুরা চৌমুহনী', available24h: true },
          { label: 'কানুনগোপাড়া ও আহসান উল্লাহ বাজার স্ট্যান্ড', phone: '01812-779900', designation: 'পূর্ব বোয়ালখালী রুট লাইনম্যান', location: 'কানুনগোপাড়া', available24h: true },
        ],
      },
      {
        id: 'bus-counter',
        title: 'বাস কাউন্টার',
        title_en: 'Bus Counter',
        iconType: 'bus',
        colorScheme: {
          bg: 'bg-indigo-50/50',
          border: 'border-indigo-200',
          iconBg: 'bg-indigo-700',
          iconColor: 'text-white',
          accent: 'text-indigo-800',
        },
        description: 'বোয়ালখালী থেকে চট্টগ্রাম বহদ্দারহাট, কক্সবাজার ও ঢাকা দূরপাল্লার বাস',
        contacts: [
          { label: 'বোয়ালখালী-বহদ্দারহাট স্পেশাল বাস সার্ভিস কাউন্টার', phone: '01819-335577', designation: 'কাউন্টার মাস্টার', location: 'গোমদণ্ডী পাইলট হাই স্কুল চত্বর', available24h: false },
          { label: 'শ্যামলী ও সৌদিয়া পরিবহন বোয়ালখালী বুকিং এজেন্ট', phone: '01814-779933', designation: 'ঢাকা ও উত্তরবঙ্গ বাস টিকিট', location: 'শাকপুরা চৌমুহনী মোড়', available24h: false },
          { label: 'হানিফ ও গ্রিনলাইন ট্রাভেলস বোয়ালখালী এজেন্ট', phone: '01817-224466', designation: 'দূরপাল্লার এসি বাস বুকিং', location: 'কালুরঘাট ব্রিজ মুখ', available24h: false },
          { label: 'কক্সবাজার সরাসরি বাস টিকিট কাউন্টার', phone: '01812-668822', designation: 'কক্সবাজার স্পেশাল বাস', location: 'পৌর সদর বাস স্ট্যান্ড', available24h: false },
        ],
      },
      {
        id: 'railway-station',
        title: 'রেল স্টেশন',
        title_en: 'Railway Station',
        iconType: 'train',
        colorScheme: {
          bg: 'bg-amber-50/50',
          border: 'border-amber-200',
          iconBg: 'bg-amber-600',
          iconColor: 'text-white',
          accent: 'text-amber-700',
        },
        description: 'গোমদণ্ডী রেলওয়ে স্টেশন, দোহাজারী-কক্সবাজার ট্রেন সিডিউল ও তথ্য',
        contacts: [
          { label: 'গোমদণ্ডী রেলওয়ে স্টেশন মাস্টার', phone: '01819-446611', designation: 'স্টেশন মাস্টার', location: 'গোমদণ্ডী রেলওয়ে স্টেশন', available24h: true },
          { label: 'রেলওয়ে টিকিট বুকিং ও সিডিউল হেল্পডেস্ক', phone: '01814-882244', designation: 'টিকিট বুকিং কাউন্টার', location: 'গোমদণ্ডী স্টেশন কাউন্টার', available24h: false },
          { label: 'রেলওয়ে নিরাপত্তা বাহিনী (RNB) গোমদণ্ডী চৌকি', phone: '01817-553311', designation: 'রেল নিরাপত্তা ইনচার্জ', location: 'রেলওয়ে প্ল্যাটফর্ম', available24h: true },
          { label: 'বাংলাদেশ রেলওয়ে সেন্ট্রাল হেল্পলাইন', phone: '131', designation: 'রেলওয়ে জাতীয় তথ্য', location: 'সারা বাংলাদেশ', available24h: true },
        ],
      },
    ],
  },
  {
    id: 'admin-civic-services',
    title: 'প্রশাসন ও নাগরিক সেবা',
    title_en: 'Administration & Civic Services',
    items: [
      {
        id: 'upozila-admin',
        title: 'উপজেলা প্রশাসন',
        title_en: 'Upazila Admin',
        iconType: 'admin',
        colorScheme: {
          bg: 'bg-emerald-50/50',
          border: 'border-emerald-200',
          iconBg: 'bg-emerald-700',
          iconColor: 'text-white',
          accent: 'text-emerald-800',
        },
        description: 'উপজেলা নির্বাহী অফিসার (UNO), উপজেলা চেয়ারম্যান ও সরকারি দপ্তরসমূহ',
        contacts: [
          { label: 'উপজেলা নির্বাহী অফিসার (UNO)', phone: '01713-334455', designation: 'ইউএনও, বোয়ালখালী', location: 'উপজেলা পরিষদ ভবন', available24h: false },
          { label: 'উপজেলা পরিষদ প্রশাসক / চেয়ারম্যান কার্যালয়', phone: '01819-667722', designation: 'উপজেলা চেয়ারম্যান', location: 'উপজেলা পরিষদ চত্বর', available24h: false },
          { label: 'উপজেলা প্রকৌশলী (LGED)', phone: '01712-556633', designation: 'উপজেলা প্রকৌশলী', location: 'এলজিইডি ভবন', available24h: false },
          { label: 'উপজেলা প্রকল্প বাস্তবায়ন কর্মকর্তা (PIO)', phone: '01715-889922', designation: 'পিআইও বোয়ালখালী', location: 'দুর্যোগ ব্যবস্থাপনা ভবন', available24h: false },
          { label: 'উপজেলা শিক্ষা অফিসার (প্রাথমিক ও মাধ্যমিক)', phone: '01718-223311', designation: 'শিক্ষা অফিসার', location: 'উপজেলা শিক্ষা ভবন', available24h: false },
        ],
      },
      {
        id: 'land-office',
        title: 'ভূমি অফিস',
        title_en: 'Land Office',
        iconType: 'land',
        colorScheme: {
          bg: 'bg-teal-50/50',
          border: 'border-teal-200',
          iconBg: 'bg-teal-700',
          iconColor: 'text-white',
          accent: 'text-teal-800',
        },
        description: 'সহকারী কমিশনার (ভূমি) / AC Land, সাব-রেজিস্ট্রার ও ইউনিয়ন ভূমি অফিস',
        contacts: [
          { label: 'সহকারী কমিশনার (ভূমি) / AC Land', phone: '01713-445566', designation: 'এসি ল্যান্ড বোয়ালখালী', location: 'উপজেলা ভূমি অফিস', available24h: false },
          { label: 'উপজেলা সাব-রেজিস্ট্রার (দলিল রেজিস্ট্রি অফিস)', phone: '01819-225577', designation: 'সাব-রেজিস্ট্রার', location: 'সাব-রেজিস্ট্রি ভবন', available24h: false },
          { label: 'প্রধান কানুনগো (ভূমি পরিমাপ ও রেকর্ড)', phone: '01814-773355', designation: 'কানুনগো', location: 'উপজেলা ভূমি অফিস', available24h: false },
          { label: 'পশ্চিম গোমদণ্ডী ও পৌর ইউনিয়ন ভূমি সহকারী কর্মকর্তা', phone: '01817-994422', designation: 'তহশিলদার', location: 'পৌর ভূমি অফিস', available24h: false },
          { label: 'শাকপুরা ও সারোয়াতলী ইউনিয়ন ভূমি অফিস', phone: '01812-336688', designation: 'তহশিলদার', location: 'শাকপুরা ভূমি অফিস', available24h: false },
        ],
      },
      {
        id: 'union-chairmen',
        title: 'ইউপি চেয়ারম্যান',
        title_en: 'UP Chairmen',
        iconType: 'chairmen',
        colorScheme: {
          bg: 'bg-blue-50/50',
          border: 'border-blue-200',
          iconBg: 'bg-blue-700',
          iconColor: 'text-white',
          accent: 'text-blue-800',
        },
        description: 'বোয়ালখালী উপজেলার ১০টি ইউনিয়ন পরিষদ চেয়ারম্যান ও ইউপি সচিবগণ',
        contacts: [
          { label: '১নং কধুরখীল ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01819-334455', designation: 'চেয়ারম্যান: মো. শাহনেওয়াজ চৌধুরী', location: 'কধুরখীল বাজার রোড' },
          { label: '২নং পশ্চিম গোমদণ্ডী ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01812-445566', designation: 'চেয়ারম্যান: আলহাজ্ব জহিরুল ইসলাম', location: 'গোমদণ্ডী রেলস্টেশন রোড' },
          { label: '৩নং শাকপুরা ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01814-556677', designation: 'চেয়ারম্যান: আব্দুল মান্নান চৌধুরী', location: 'শাকপুরা চৌমুহনী মোড়' },
          { label: '৪নং সারোয়াতলী ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01816-667788', designation: 'চেয়ারম্যান: মো. বেলাল হোসেন', location: 'সারোয়াতলী ইউপি কমপ্লেক্স' },
          { label: '৫নং পোপাদিয়া ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01817-778899', designation: 'চেয়ারম্যান: এস এম জসীম উদ্দীন', location: 'পোপাদিয়া ইউপি ভবন' },
          { label: '৬নং চরণদ্বীপ ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01818-889911', designation: 'চেয়ারম্যান: মো. শামসুল আলম', location: 'চরণদ্বীপ দরবার রোড' },
          { label: '৭নং শ্রীপুর-খরণদ্বীপ ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01819-990022', designation: 'চেয়ারম্যান: মোকাররম হোসেন চৌধুরী', location: 'শ্রীপুর বাজার' },
          { label: '৮নং আমুচিয়া ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01820-001122', designation: 'চেয়ারম্যান: কাজল দেওয়ানজি', location: 'আমুচিয়া ইউপি ভবন' },
          { label: '৯নং আহলা কড়লডেঙ্গা ইউনিয়ন পরিষদ চেয়ারম্যান', phone: '01821-112233', designation: 'চেয়ারম্যান: মনসুর আহমেদ', location: 'কড়লডেঙ্গা পাহাড়তলী' },
          { label: 'বোয়ালখালী পৌরসভা প্রশাসক / নির্বাহী প্রকৌশলী', phone: '01819-556688', designation: 'পৌর প্রশাসক কার্যালয়', location: 'পৌরসভা চত্বর' },
        ],
      },
      {
        id: 'bank-mfs',
        title: 'ব্যাংক ও আর্থিক সেবা',
        title_en: 'Bank & Finance',
        iconType: 'bank',
        colorScheme: {
          bg: 'bg-teal-50/50',
          border: 'border-teal-200',
          iconBg: 'bg-teal-600',
          iconColor: 'text-white',
          accent: 'text-teal-700',
        },
        description: 'সোনালী ব্যাংক, ইসলামী ব্যাংক, বিকাশ, নগদ ও এজেন্ট ব্যাংকিং সার্ভিস',
        contacts: [
          { label: 'সোনালী ব্যাংক বোয়ালখালী শাখা', phone: '01819-443322', designation: 'শাখা ব্যবস্থাপক', location: 'উপজেলা পরিষদ চত্বর', available24h: false },
          { label: 'ইসলামী ব্যাংক বাংলাদেশ শাকপুরা শাখা', phone: '01814-776655', designation: 'শাখা ব্যবস্থাপক', location: 'শাকপুরা চৌমুহনী', available24h: false },
          { label: 'জনতা ব্যাংক গোমদণ্ডী বাজার শাখা', phone: '01812-998811', designation: 'ম্যানেজার', location: 'গোমদণ্ডী বাজার', available24h: false },
          { label: 'পূবালী ব্যাংক কানুনগোপাড়া শাখা', phone: '01820-554433', designation: 'শাখা প্রধান', location: 'কানুনগোপাড়া চত্বর', available24h: false },
          { label: 'বিকাশ সেন্ট্রাল কাস্টমার হটলাইন (২৪ ঘণ্টা)', phone: '16247', designation: 'টোল-ফ্রি ২৪ ঘণ্টা হেল্পলাইন', location: 'সারা বাংলাদেশ', available24h: true },
          { label: 'নগদ কাস্টমার কেয়ার হটলাইন (২৪ ঘণ্টা)', phone: '16167', designation: 'টোল-ফ্রি ২৪ ঘণ্টা হেল্পলাইন', location: 'সারা বাংলাদেশ', available24h: true },
        ],
      },
      {
        id: 'post-office',
        title: 'পোস্ট অফিস',
        title_en: 'Post Office',
        iconType: 'post',
        colorScheme: {
          bg: 'bg-red-50/50',
          border: 'border-red-200',
          iconBg: 'bg-red-600',
          iconColor: 'text-white',
          accent: 'text-red-700',
        },
        description: 'বোয়ালখালী সাব-পোস্ট অফিস, পোস্টাল কোড (৪৩৬০) ও সঞ্চয়পত্র শাখা',
        contacts: [
          { label: 'বোয়ালখালী সাব-পোস্ট মাস্টার (পোস্ট কোড: ৪৩৬০)', phone: '01819-552211', designation: 'পোস্ট মাস্টার', location: 'থানা সদর পোস্ট অফিস', available24h: false },
          { label: 'শাকপুরা সাব-পোস্ট অফিস (পোস্ট কোড: ৪৩৬১)', phone: '01814-883355', designation: 'পোস্ট মাস্টার', location: 'শাকপুরা বাজার', available24h: false },
          { label: 'কানুনগোপাড়া পোস্ট অফিস (পোস্ট কোড: ৪৩৬২)', phone: '01817-226688', designation: 'পোস্ট মাস্টার', location: 'কানুনগোপাড়া', available24h: false },
          { label: 'চরণদ্বীপ ও কধুরখীল শাখা ডাকঘর', phone: '01812-771144', designation: 'ডাক পিয়ন ও ডেলিভারি', location: 'চরণদ্বীপ', available24h: false },
        ],
      },
      {
        id: 'social-welfare',
        title: 'সমাজসেবা ও পল্লী',
        title_en: 'Social Welfare',
        iconType: 'social',
        colorScheme: {
          bg: 'bg-rose-50/50',
          border: 'border-rose-200',
          iconBg: 'bg-rose-700',
          iconColor: 'text-white',
          accent: 'text-rose-800',
        },
        description: 'উপজেলা সমাজসেবা কর্মকর্তা, প্রতিবন্ধী ভাতা, পল্লী সঞ্চয় ও যুব উন্নয়ন',
        contacts: [
          { label: 'উপজেলা সমাজসেবা কর্মকর্তা', phone: '01712-665544', designation: 'সমাজসেবা অফিসার', location: 'উপজেলা পরিষদ ভবন', available24h: false },
          { label: 'পল্লী সঞ্চয় ব্যাংক বোয়ালখালী শাখা', phone: '01819-331188', designation: 'শাখা ব্যবস্থাপক', location: 'উপজেলা কমপ্লেক্স', available24h: false },
          { label: 'উপজেলা যুব উন্নয়ন কর্মকর্তা (প্রশিক্ষণ ও ঋণ)', phone: '01715-332211', designation: 'যুব উন্নয়ন অফিসার', location: 'যুব উন্নয়ন ভবন', available24h: false },
          { label: 'উপজেলা মহিলা বিষয়ক কর্মকর্তা', phone: '01718-445599', designation: 'নারী উন্নয়ন ও সহায়তা', location: 'মহিলা বিষয়ক অধিদপ্তর', available24h: false },
        ],
      },
    ],
  },
];
