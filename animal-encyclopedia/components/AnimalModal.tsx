'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Utensils, Clock, ShieldAlert } from 'lucide-react';
import Image from 'next/image';
import { Animal } from '@/lib/data';
import { useEffect } from 'react';

export default function AnimalModal({ animal, onClose }: { animal: Animal | null; onClose: () => void }) {
  // Lock body scroll when open
  useEffect(() => {
    if (animal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [animal]);

  return (
    <AnimatePresence>
      {animal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40"
          />
          <motion.div
            layoutId={`card-${animal.id}`}
            className="fixed inset-x-4 top-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[800px] h-[90vh] bg-white dark:bg-stone-900 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors">
              <X size={24} />
            </button>

            <div className="relative h-72 w-full shrink-0">
              <Image src={animal.gallery[0]} alt={animal.name} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-4xl font-bold mb-1 tracking-tight">{animal.name}</h2>
                <p className="italic text-white/80 font-serif">{animal.scientificName}</p>
              </div>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <InfoBadge icon={<MapPin size={18}/>} label="Habitat" value={animal.habitat} />
                <InfoBadge icon={<Utensils size={18}/>} label="Diet" value={animal.diet} />
                <InfoBadge icon={<Clock size={18}/>} label="Lifespan" value={animal.lifespan} />
                <InfoBadge icon={<ShieldAlert size={18}/>} label="Status" value={animal.conservationStatus} highlight={animal.conservationStatus.includes('Endangered')} />
              </div>

              <div className="space-y-6 text-stone-700 dark:text-stone-300">
                <section>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">About</h3>
                  <p className="leading-relaxed">{animal.description}</p>
                </section>
                
                <section className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                  <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center gap-2">
                    ✨ Fun Facts
                  </h3>
                  <ul className="space-y-2">
                    {animal.funFacts.map((fact, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-emerald-400">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const InfoBadge = ({ icon, label, value, highlight }: { icon: React.ReactNode; label: string; value: string; highlight?: boolean }) => (
  <div className={`p-3 rounded-2xl flex flex-col gap-1 ${highlight ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400' : 'bg-stone-50 dark:bg-stone-800'}`}>
    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider opacity-70">
      {icon} {label}
    </div>
    <span className="font-medium text-sm">{value}</span>
  </div>
);