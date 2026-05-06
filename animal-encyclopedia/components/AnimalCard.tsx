'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Leaf, PawPrint, Droplets } from 'lucide-react';
import { Animal } from '@/lib/data';
import { useAppStore } from '@/store/useAppStore';

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Mammal': return <PawPrint size={16} className="text-amber-600" />;
    case 'Amphibian': return <Droplets size={16} className="text-teal-600" />;
    default: return <Leaf size={16} className="text-emerald-600" />;
  }
};

export default function AnimalCard({ animal, onClick }: { animal: Animal; onClick: () => void }) {
  const { favorites, toggleFavorite } = useAppStore();
  const isFav = favorites.includes(animal.id);

  return (
    <motion.div
      layoutId={`card-${animal.id}`}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white dark:bg-stone-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-100 dark:border-stone-700"
      onClick={onClick}
    >
      <div className="relative h-56 w-full overflow-hidden bg-stone-100">
        <Image
          src={animal.thumbnail}
          alt={animal.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <button
          onClick={(e) => { e.stopPropagation(); toggleFavorite(animal.id); }}
          className="absolute top-4 right-4 p-2 bg-white/70 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <Heart size={18} fill={isFav ? "#ef4444" : "transparent"} color={isFav ? "#ef4444" : "#444"} />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 font-sans tracking-tight">
            {animal.name}
          </h3>
          <span className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-700 px-2.5 py-1 rounded-full text-xs font-medium text-stone-600 dark:text-stone-300">
            <CategoryIcon category={animal.category} />
            {animal.category}
          </span>
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2">
          {animal.tagline}
        </p>
      </div>
    </motion.div>
  );
}