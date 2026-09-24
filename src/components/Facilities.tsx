import React from 'react';
import { Armchair, Trees, Wifi, Zap, Car, HeartHandshake } from 'lucide-react';

export const Facilities: React.FC = () => {
  const facilitiesList = [
    {
      id: 'dine-in',
      name: 'Dine-in Area',
      description: 'Ruang indoor ber-AC sejuk dengan interior bernuansa warm wood dan pencahayaan lembut yang nyaman.',
      icon: Armchair,
      badge: 'Indoor AC',
    },
    {
      id: 'outdoor',
      name: 'Outdoor Area',
      description: 'Area luar ruangan yang asri dan sejuk, cocok untuk bersantai sore bersama teman di bawah semilir angin.',
      icon: Trees,
      badge: 'Asri & Terbuka',
    },
    {
      id: 'wifi',
      name: 'Wi-Fi Cepat',
      description: 'Koneksi internet fiber optic berkecepatan tinggi tanpa hambatan untuk bekerja (WFC) atau mengerjakan tugas.',
      icon: Wifi,
      badge: 'High Speed',
    },
    {
      id: 'charging-spot',
      name: 'Stopkontak Memadai',
      description: 'Tersedia colokan listrik di setiap meja untuk menjaga daya laptop dan ponsel Anda tetap terisi.',
      icon: Zap,
      badge: 'Setiap Meja',
    },
    {
      id: 'parking',
      name: 'Parkir Nyaman',
      description: 'Area parkir mobil dan motor yang lapang, tertata rapi, serta mudah diakses tepat di depan kedai.',
      icon: Car,
      badge: 'Mobil & Motor',
    },
    {
      id: 'musholla',
      name: 'Musholla Bersih',
      description: 'Ruang ibadah yang tenang dan terawat lengkap dengan tempat wudhu bersih untuk kenyamanan ibadah Anda.',
      icon: HeartHandshake,
      badge: 'Ibadah Tenang',
    },
  ];

  return (
    <section id="facilities" className="py-20 sm:py-24 bg-[#F7F3EE] relative border-t border-[#E7DFD5]/80 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A7568] block mb-2">
            Kenyamanan Anda
          </span>
          <h2
            id="facilities-title"
            className="text-3xl sm:text-4xl font-serif text-[#1C130E] font-normal tracking-tight"
          >
            Fasilitas <span className="italic font-light text-[#B87B4C]">Kedai</span>
          </h2>
          <p className="text-sm text-[#6E5343] leading-relaxed font-light mt-2.5">
            Dirancang cermat agar setiap waktu yang Anda luangkan di Cianjur terasa santai, produktif, dan menyenangkan.
          </p>
        </div>

        {/* 6 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {facilitiesList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`facility-${item.id}`}
                className="bg-white rounded-xl p-6 border border-[#E7DFD5] hover:border-[#B87B4C]/50 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E7DFD5] text-[#1C130E] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#B87B4C]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A7568] bg-[#F4EFEA] px-2 py-0.5 rounded-full font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-medium text-[#1C130E] mb-1.5">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#6E5343] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
