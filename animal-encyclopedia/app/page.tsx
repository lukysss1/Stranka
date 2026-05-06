'use client';
import { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { animals, Animal, Category } from '@/lib/data';
import AnimalCard from '@/components/AnimalCard';
import AnimalModal from '@/components/AnimalModal';
import { useAppStore } from '@/store/useAppStore';

const CATEGORIES: Category[] = ['Mammal', 'Bird', 'Reptile', 'Amphibian', 'Fish', 'Insect'];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  
  const { addRecentlyViewed } = useAppStore();

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || animal.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const openAnimal = (animal: Animal) => {
    setSelectedAnimal(animal);
    addRecentlyViewed(animal);
  };

  const handleRandomize = () => {
    const random = filteredAnimals[Math.floor(Math.random() * filteredAnimals.length)];
    if(random) openAnimal(random);
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-stone-950 font-sans selection:bg-emerald-200">
      {/* Header Section */}
      <header className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 dark:text-white tracking-tight mb-4">
          Discover the <span className="text-emerald-600">Wild</span>.
        </h1>
        <p className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl mx-auto mb-10">
          A handcrafted encyclopedia exploring the fascinating creatures that share our planet.
        </p>

        {/* Search & Actions */}
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            <input
              type="text"
              placeholder="Search animals, habitats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white dark:bg-stone-900 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none text-stone-800 dark:text-stone-100 transition-shadow"
            />
          </div>
          <button 
            onClick={handleRandomize}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold shadow-sm transition-colors"
          >
            <Sparkles size={18} />
            Surprise Me
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'All' ? 'bg-stone-800 text-white dark:bg-white dark:text-stone-900 shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-300'}`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-300'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} onClick={() => openAnimal(animal)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-stone-400">
            <p className="text-xl">No animals found matching your search.</p>
          </div>
        )}
      </section>

      {/* Modals & Overlays */}
      <AnimalModal animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
    </main>
  );
}