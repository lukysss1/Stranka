export type Category = 'Mammal' | 'Bird' | 'Reptile' | 'Amphibian' | 'Fish' | 'Insect';
export type Diet = 'Carnivore' | 'Herbivore' | 'Omnivore';

export interface Animal {
  id: string;
  name: string;
  scientificName: string;
  tagline: string;
  category: Category;
  habitat: string;
  diet: Diet;
  lifespan: string;
  conservationStatus: 'Least Concern' | 'Vulnerable' | 'Endangered' | 'Critically Endangered';
  thumbnail: string;
  gallery: string[];
  description: string;
  funFacts: string[];
}

// 🪄 This magic function grabs an image based on the keyword!
const getImg = (keyword: string) => `https://loremflickr.com/800/600/${keyword},animal/all`;

export const animals: Animal[] = [
  // --- MAMMALS ---
  {
    id: '1', name: 'Red Panda', scientificName: 'Ailurus fulgens', tagline: 'The original panda of the Himalayas.',
    category: 'Mammal', habitat: 'Temperate Forest', diet: 'Omnivore', lifespan: '8-10 years', conservationStatus: 'Endangered',
    thumbnail: getImg('redpanda'), gallery: [getImg('redpanda')],
    description: 'Slightly larger than a domestic cat, with a bear-like body and thick russet fur. They predominantly stay in trees.',
    funFacts: ['They use their bushy tails as wraparound blankets.', 'They have a "false thumb" used to grip bamboo.']
  },
  {
    id: '2', name: 'African Lion', scientificName: 'Panthera leo', tagline: 'The king of the savanna.',
    category: 'Mammal', habitat: 'Savanna', diet: 'Carnivore', lifespan: '10-14 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('lion'), gallery: [getImg('lion')],
    description: 'A large cat species native to Africa and India. They are highly social, living in groups called prides.',
    funFacts: ['A lion\'s roar can be heard from up to 5 miles away.', 'Female lions do 85-90% of the pride\'s hunting.']
  },
  {
    id: '3', name: 'Bengal Tiger', scientificName: 'Panthera tigris tigris', tagline: 'The striped stalker of the jungle.',
    category: 'Mammal', habitat: 'Tropical Forest', diet: 'Carnivore', lifespan: '8-10 years', conservationStatus: 'Endangered',
    thumbnail: getImg('tiger'), gallery: [getImg('tiger')],
    description: 'The largest living cat species. They are solitary hunters with unique striped coats.',
    funFacts: ['No two tigers have the same stripes.', 'Tigers are excellent swimmers and love water.']
  },
  {
    id: '4', name: 'African Elephant', scientificName: 'Loxodonta africana', tagline: 'The gentle giant of the plains.',
    category: 'Mammal', habitat: 'Savanna', diet: 'Herbivore', lifespan: '60-70 years', conservationStatus: 'Endangered',
    thumbnail: getImg('elephant'), gallery: [getImg('elephant')],
    description: 'The largest land animal on Earth. They are known for their intelligence, deep social bonds, and long trunks.',
    funFacts: ['They can communicate through seismic vibrations in the ground.', 'An elephant\'s trunk has over 40,000 muscles.']
  },
  {
    id: '5', name: 'Snow Leopard', scientificName: 'Panthera uncia', tagline: 'The ghost of the mountains.',
    category: 'Mammal', habitat: 'Alpine Tundra', diet: 'Carnivore', lifespan: '15-18 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('snowleopard'), gallery: [getImg('snowleopard')],
    description: 'A large cat native to the mountain ranges of Central and South Asia. They have incredibly thick fur for cold climates.',
    funFacts: ['Unlike other big cats, they cannot roar.', 'They can leap up to 50 feet in a single bound.']
  },
  {
    id: '6', name: 'Giant Panda', scientificName: 'Ailuropoda melanoleuca', tagline: 'The bamboo-eating bear.',
    category: 'Mammal', habitat: 'Temperate Forest', diet: 'Herbivore', lifespan: '20 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('panda'), gallery: [getImg('panda')],
    description: 'A bear species endemic to China, known for its bold black-and-white coat and voracious appetite for bamboo.',
    funFacts: ['They spend up to 14 hours a day eating.', 'Newborn pandas are the size of a stick of butter.']
  },
  {
    id: '7', name: 'Cheetah', scientificName: 'Acinonyx jubatus', tagline: 'The fastest land animal.',
    category: 'Mammal', habitat: 'Savanna', diet: 'Carnivore', lifespan: '10-12 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('cheetah'), gallery: [getImg('cheetah')],
    description: 'A large cat native to Africa and central Iran. It is capable of running at speeds up to 70 mph.',
    funFacts: ['They accelerate from 0 to 60 mph in just 3 seconds.', 'They chirp like birds to communicate.']
  },
  {
    id: '8', name: 'Giraffe', scientificName: 'Giraffa camelopardalis', tagline: 'The tallest mammal on Earth.',
    category: 'Mammal', habitat: 'Savanna', diet: 'Herbivore', lifespan: '25 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('giraffe'), gallery: [getImg('giraffe')],
    description: 'An African artiodactyl mammal, the tallest living terrestrial animal, known for its extremely long neck and legs.',
    funFacts: ['They only need 5 to 30 minutes of sleep in a 24-hour period.', 'Their tongues are dark blue/black.']
  },
  {
    id: '9', name: 'Hippopotamus', scientificName: 'Hippopotamus amphibius', tagline: 'The river horse of Africa.',
    category: 'Mammal', habitat: 'Rivers and Lakes', diet: 'Herbivore', lifespan: '40-50 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('hippopotamus'), gallery: [getImg('hippopotamus')],
    description: 'A large, mostly herbivorous, semiaquatic mammal and ungulate native to sub-Saharan Africa.',
    funFacts: ['They secrete a natural sunscreen that looks like blood.', 'They cannot swim or float; they walk underwater.']
  },
  {
    id: '10', name: 'Koala', scientificName: 'Phascolarctos cinereus', tagline: 'The eucalyptus expert.',
    category: 'Mammal', habitat: 'Eucalyptus Forest', diet: 'Herbivore', lifespan: '13-18 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('koala'), gallery: [getImg('koala')],
    description: 'An arboreal herbivorous marsupial native to Australia. Often mistakenly called a bear.',
    funFacts: ['They can sleep for up to 22 hours a day.', 'They have fingerprints almost identical to humans.']
  },
  {
    id: '11', name: 'Kangaroo', scientificName: 'Macropus', tagline: 'The leaping marsupial.',
    category: 'Mammal', habitat: 'Savanna', diet: 'Herbivore', lifespan: '20-25 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('kangaroo'), gallery: [getImg('kangaroo')],
    description: 'A marsupial from the family Macropodidae, endemic to Australia. Known for their powerful hind legs.',
    funFacts: ['They cannot walk backwards.', 'A baby kangaroo is the size of a jellybean when born.']
  },
  {
    id: '12', name: 'Sloth', scientificName: 'Folivora', tagline: 'The slow-motion tree dweller.',
    category: 'Mammal', habitat: 'Rainforest', diet: 'Herbivore', lifespan: '20-30 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('sloth'), gallery: [getImg('sloth')],
    description: 'Arboreal mammals noted for slowness of movement and for spending most of their lives hanging upside down.',
    funFacts: ['Algae grows in their fur to provide camouflage.', 'They only go to the bathroom once a week.']
  },
  {
    id: '13', name: 'Gorilla', scientificName: 'Gorilla beringei', tagline: 'The powerful gentle primate.',
    category: 'Mammal', habitat: 'Rainforest', diet: 'Herbivore', lifespan: '35-40 years', conservationStatus: 'Critically Endangered',
    thumbnail: getImg('gorilla'), gallery: [getImg('gorilla')],
    description: 'Ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa.',
    funFacts: ['They build a new nest to sleep in every single night.', 'They can learn sign language.']
  },
  {
    id: '14', name: 'Polar Bear', scientificName: 'Ursus maritimus', tagline: 'The king of the Arctic.',
    category: 'Mammal', habitat: 'Arctic Sea Ice', diet: 'Carnivore', lifespan: '20-30 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('polarbear'), gallery: [getImg('polarbear')],
    description: 'A hypercarnivorous bear whose native range lies largely within the Arctic Circle.',
    funFacts: ['Their fur is completely transparent, not white.', 'Their skin beneath the fur is pitch black.']
  },
  {
    id: '15', name: 'Blue Whale', scientificName: 'Balaenoptera musculus', tagline: 'The largest animal to ever exist.',
    category: 'Mammal', habitat: 'Ocean', diet: 'Carnivore', lifespan: '80-90 years', conservationStatus: 'Endangered',
    thumbnail: getImg('whale'), gallery: [getImg('whale')],
    description: 'A marine mammal and a baleen whale. Reaching a maximum confirmed length of 29.9 meters.',
    funFacts: ['Their heart is the size of a small car.', 'Their tongue weighs as much as an elephant.']
  },
  {
    id: '16', name: 'Bottlenose Dolphin', scientificName: 'Tursiops', tagline: 'The intelligent ocean acrobat.',
    category: 'Mammal', habitat: 'Ocean', diet: 'Carnivore', lifespan: '40-50 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('dolphin'), gallery: [getImg('dolphin')],
    description: 'The most common members of the family of oceanic dolphins, known for their high intelligence.',
    funFacts: ['They give each other unique names.', 'They sleep with only half their brain at a time.']
  },
  {
    id: '17', name: 'Meerkat', scientificName: 'Suricata suricatta', tagline: 'The sentinels of the desert.',
    category: 'Mammal', habitat: 'Desert', diet: 'Omnivore', lifespan: '12-14 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('meerkat'), gallery: [getImg('meerkat')],
    description: 'A small mongoose found in southern Africa. They live in highly organized social groups.',
    funFacts: ['They have dark patches around their eyes to act like sunglasses.', 'They are immune to certain types of venom.']
  },
  {
    id: '18', name: 'Platypus', scientificName: 'Ornithorhynchus anatinus', tagline: 'The egg-laying mammal.',
    category: 'Mammal', habitat: 'Freshwater Rivers', diet: 'Carnivore', lifespan: '12 years', conservationStatus: 'Near Threatened' as any,
    thumbnail: getImg('platypus'), gallery: [getImg('platypus')],
    description: 'A semiaquatic, egg-laying mammal endemic to eastern Australia, including Tasmania.',
    funFacts: ['Males have venomous spurs on their hind legs.', 'They sweat milk to feed their young.']
  },
  {
    id: '19', name: 'Grey Wolf', scientificName: 'Canis lupus', tagline: 'The ancestor of all dogs.',
    category: 'Mammal', habitat: 'Forest and Tundra', diet: 'Carnivore', lifespan: '6-8 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('wolf'), gallery: [getImg('wolf')],
    description: 'A large canine native to Eurasia and North America. They travel in nuclear families consisting of a mated pair and offspring.',
    funFacts: ['They can sprint at speeds up to 38 mph.', 'A wolf howl can be heard up to 10 miles away.']
  },
  {
    id: '20', name: 'Red Fox', scientificName: 'Vulpes vulpes', tagline: 'The cunning and adaptable canine.',
    category: 'Mammal', habitat: 'Forest', diet: 'Omnivore', lifespan: '3-4 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('fox'), gallery: [getImg('fox')],
    description: 'The largest of the true foxes and one of the most widely distributed members of the order Carnivora.',
    funFacts: ['They use the Earth\'s magnetic field to hunt.', 'They have excellent hearing and can hear mice under the snow.']
  },

  // --- BIRDS ---
  {
    id: '21', name: 'Emperor Penguin', scientificName: 'Aptenodytes forsteri', tagline: 'The tuxedo-clad survivor of the ice.',
    category: 'Bird', habitat: 'Antarctica', diet: 'Carnivore', lifespan: '20 years', conservationStatus: 'Near Threatened' as any,
    thumbnail: getImg('penguin'), gallery: [getImg('penguin')],
    description: 'The tallest and heaviest of all living penguin species and is endemic to Antarctica.',
    funFacts: ['Males incubate the eggs on their feet for months in freezing temperatures.', 'They can dive up to 1,500 feet deep.']
  },
  {
    id: '22', name: 'Scarlet Macaw', scientificName: 'Ara macao', tagline: 'The vibrant voice of the rainforest.',
    category: 'Bird', habitat: 'Rainforest', diet: 'Herbivore', lifespan: '50-75 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('macaw'), gallery: [getImg('macaw')],
    description: 'A large red, yellow, and blue Central and South American parrot.',
    funFacts: ['They mate for life.', 'They eat clay from riverbanks to detoxify their stomachs.']
  },
  {
    id: '23', name: 'Bald Eagle', scientificName: 'Haliaeetus leucocephalus', tagline: 'The symbol of the sky.',
    category: 'Bird', habitat: 'Forests and Mountains', diet: 'Carnivore', lifespan: '20-30 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('eagle'), gallery: [getImg('eagle')],
    description: 'A bird of prey found in North America, known for its white head and brown body.',
    funFacts: ['Their wingspan can reach up to 8 feet.', 'They build the largest nests of any North American bird.']
  },
  {
    id: '24', name: 'Ostrich', scientificName: 'Struthio camelus', tagline: 'The giant runner.',
    category: 'Bird', habitat: 'Savanna', diet: 'Omnivore', lifespan: '40-45 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('ostrich'), gallery: [getImg('ostrich')],
    description: 'A species of large flightless bird native to certain large areas of Africa.',
    funFacts: ['They have the largest eyes of any land animal.', 'They can run at speeds up to 43 mph.']
  },
  {
    id: '25', name: 'Hummingbird', scientificName: 'Trochilidae', tagline: 'The hovering jewel.',
    category: 'Bird', habitat: 'Tropical Forest', diet: 'Herbivore', lifespan: '3-5 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('hummingbird'), gallery: [getImg('hummingbird')],
    description: 'Small birds known for their rapid wing-beating, which creates a humming sound.',
    funFacts: ['They are the only birds that can fly backward.', 'Their hearts can beat up to 1,200 times per minute.']
  },
  {
    id: '26', name: 'Barn Owl', scientificName: 'Tyto alba', tagline: 'The silent hunter of the night.',
    category: 'Bird', habitat: 'Grasslands and Forests', diet: 'Carnivore', lifespan: '4-5 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('owl'), gallery: [getImg('owl')],
    description: 'The most widely distributed species of owl, characterized by its heart-shaped facial disc.',
    funFacts: ['Their feathers are designed for completely silent flight.', 'They swallow their prey whole.']
  },
  {
    id: '27', name: 'Flamingo', scientificName: 'Phoenicopterus', tagline: 'The pink wader.',
    category: 'Bird', habitat: 'Lakes and Lagoons', diet: 'Omnivore', lifespan: '20-30 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('flamingo'), gallery: [getImg('flamingo')],
    description: 'A type of wading bird in the family Phoenicopteridae, famous for their bright pink plumage.',
    funFacts: ['They get their pink color from the shrimp and algae they eat.', 'They rest on one leg to conserve body heat.']
  },
  {
    id: '28', name: 'Toucan', scientificName: 'Ramphastidae', tagline: 'The bird with the giant bill.',
    category: 'Bird', habitat: 'Rainforest', diet: 'Omnivore', lifespan: '20 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('toucan'), gallery: [getImg('toucan')],
    description: 'Recognizable by their large, colorful bills, toucans are native to the Neotropics.',
    funFacts: ['Their beak is actually mostly hollow and very light.', 'They curl into a tight ball when they sleep.']
  },
  {
    id: '29', name: 'Peacock', scientificName: 'Pavo cristatus', tagline: 'The bird with a hundred eyes.',
    category: 'Bird', habitat: 'Forest', diet: 'Omnivore', lifespan: '15-20 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('peacock'), gallery: [getImg('peacock')],
    description: 'Known for the male\'s piercing call and extravagant plumage, particularly the tail covert feathers.',
    funFacts: ['Only the males are called peacocks; females are peahens.', 'They can actually fly, despite their heavy tails.']
  },

  // --- REPTILES ---
  {
    id: '30', name: 'Komodo Dragon', scientificName: 'Varanus komodoensis', tagline: 'The real-life monster.',
    category: 'Reptile', habitat: 'Tropical Savanna', diet: 'Carnivore', lifespan: '30 years', conservationStatus: 'Endangered',
    thumbnail: getImg('komododragon'), gallery: [getImg('komododragon')],
    description: 'The largest extant species of lizard, growing to a maximum length of 3 meters.',
    funFacts: ['Their saliva contains venom that induces shock in prey.', 'They can consume 80% of their body weight in one meal.']
  },
  {
    id: '31', name: 'Green Sea Turtle', scientificName: 'Chelonia mydas', tagline: 'The ocean voyager.',
    category: 'Reptile', habitat: 'Ocean', diet: 'Herbivore', lifespan: '80 years', conservationStatus: 'Endangered',
    thumbnail: getImg('seaturtle'), gallery: [getImg('seaturtle')],
    description: 'A large sea turtle belonging to the family Cheloniidae. They migrate long distances to lay eggs.',
    funFacts: ['They can hold their breath for up to 5 hours.', 'They return to the exact beach they were born to lay their own eggs.']
  },
  {
    id: '32', name: 'Chameleon', scientificName: 'Chamaeleonidae', tagline: 'The master of disguise.',
    category: 'Reptile', habitat: 'Rainforest', diet: 'Insectivore' as any, // Cast for brevity
    lifespan: '5-10 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('chameleon'), gallery: [getImg('chameleon')],
    description: 'A highly specialized clade of Old World lizards with many distinct features like independently mobile eyes.',
    funFacts: ['They change color to reflect their mood and temperature, not just to hide.', 'Their tongues can be twice the length of their body.']
  },
  {
    id: '33', name: 'Saltwater Crocodile', scientificName: 'Crocodylus porosus', tagline: 'The apex predator of the swamps.',
    category: 'Reptile', habitat: 'Mangrove Swamps', diet: 'Carnivore', lifespan: '70 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('crocodile'), gallery: [getImg('crocodile')],
    description: 'The largest living reptile and crocodilian known to science. They are formidable predators.',
    funFacts: ['They have the strongest bite force of any animal.', 'They swallow stones to help them dive deeper.']
  },
  {
    id: '34', name: 'King Cobra', scientificName: 'Ophiophagus hannah', tagline: 'The longest venomous snake.',
    category: 'Reptile', habitat: 'Forest', diet: 'Carnivore', lifespan: '20 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('snake'), gallery: [getImg('snake')],
    description: 'A venomous snake endemic to Asia. It is the world\'s longest venomous snake.',
    funFacts: ['They mainly eat other snakes.', 'A single bite has enough neurotoxin to take down an elephant.']
  },
  {
    id: '35', name: 'Galapagos Tortoise', scientificName: 'Chelonoidis niger', tagline: 'The ancient islander.',
    category: 'Reptile', habitat: 'Volcanic Islands', diet: 'Herbivore', lifespan: '100+ years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('tortoise'), gallery: [getImg('tortoise')],
    description: 'The largest living species of tortoise, endemic to the Galapagos Islands.',
    funFacts: ['They can survive up to a year without eating or drinking.', 'Charles Darwin rode on their backs during his voyage.']
  },

  // --- AMPHIBIANS ---
  {
    id: '36', name: 'Axolotl', scientificName: 'Ambystoma mexicanum', tagline: 'The smiling salamander.',
    category: 'Amphibian', habitat: 'Freshwater Lakes', diet: 'Carnivore', lifespan: '10-15 years', conservationStatus: 'Critically Endangered',
    thumbnail: getImg('axolotl'), gallery: [getImg('axolotl')],
    description: 'An unusual species of salamander that retains its larval features throughout its adult life.',
    funFacts: ['They can regenerate lost limbs, hearts, and even parts of their brain.', 'They are native exclusively to a lake complex near Mexico City.']
  },
  {
    id: '37', name: 'Poison Dart Frog', scientificName: 'Dendrobatidae', tagline: 'The deadly jewel of the jungle.',
    category: 'Amphibian', habitat: 'Rainforest', diet: 'Carnivore', lifespan: '3-15 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('frog'), gallery: [getImg('frog')],
    description: 'Small, brightly colored frogs native to Central and South America. Their skin is highly toxic.',
    funFacts: ['They get their toxicity from the ants and centipedes they eat.', 'Just 2 micrograms of their poison can be lethal.']
  },
  {
    id: '38', name: 'Red-Eyed Tree Frog', scientificName: 'Agalychnis callidryas', tagline: 'The flashing jumper.',
    category: 'Amphibian', habitat: 'Rainforest', diet: 'Carnivore', lifespan: '5 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('treefrog'), gallery: [getImg('treefrog')],
    description: 'Known for their bulging red eyes and bright green bodies, they are an iconic rainforest species.',
    funFacts: ['They flash their bright colors to startle predators.', 'They close their eyes to blend perfectly into green leaves.']
  },
  {
    id: '39', name: 'Hellbender', scientificName: 'Cryptobranchus alleganiensis', tagline: 'The giant snot otter.',
    category: 'Amphibian', habitat: 'Rivers', diet: 'Carnivore', lifespan: '25-30 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('salamander'), gallery: [getImg('salamander')],
    description: 'A species of giant salamander endemic to eastern North America.',
    funFacts: ['They breathe entirely through their wrinkly skin.', 'They are the largest aquatic salamander in the US.']
  },

  // --- FISH ---
  {
    id: '40', name: 'Great White Shark', scientificName: 'Carcharodon carcharias', tagline: 'The ocean\'s apex predator.',
    category: 'Fish', habitat: 'Ocean', diet: 'Carnivore', lifespan: '70 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('shark'), gallery: [getImg('shark')],
    description: 'A large mackerel shark found in the coastal surface waters of all the major oceans.',
    funFacts: ['They can detect a single drop of blood in 100 liters of water.', 'They have rows of teeth that constantly replace themselves.']
  },
  {
    id: '41', name: 'Clownfish', scientificName: 'Amphiprioninae', tagline: 'The anemone\'s best friend.',
    category: 'Fish', habitat: 'Coral Reefs', diet: 'Omnivore', lifespan: '6-10 years', conservationStatus: 'Least Concern',
    thumbnail: getImg('clownfish'), gallery: [getImg('clownfish')],
    description: 'Small, brightly colored fish that form symbiotic mutualisms with sea anemones.',
    funFacts: ['They are all born male and can change sex to female later in life.', 'A layer of mucus protects them from the anemone\'s sting.']
  },
  {
    id: '42', name: 'Manta Ray', scientificName: 'Mobula birostris', tagline: 'The flying carpet of the sea.',
    category: 'Fish', habitat: 'Ocean', diet: 'Carnivore', lifespan: '50 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('mantaray'), gallery: [getImg('mantaray')],
    description: 'Large rays belonging to the genus Mobula. They are filter feeders and consume large quantities of zooplankton.',
    funFacts: ['They have the largest brain-to-body ratio of any cold-blooded fish.', 'They often leap entirely out of the water.']
  },
  {
    id: '43', name: 'Seahorse', scientificName: 'Hippocampus', tagline: 'The upright swimmer.',
    category: 'Fish', habitat: 'Coral Reefs and Seagrass', diet: 'Carnivore', lifespan: '1-5 years', conservationStatus: 'Vulnerable',
    thumbnail: getImg('seahorse'), gallery: [getImg('seahorse')],
    description: 'Small marine fishes named for their equine appearance. They swim upright and have prehensile tails.',
    funFacts: ['The males carry the eggs in a pouch and give birth.', 'They do not have a stomach; food passes right through them.']
  },
  {
    id: '44', name: 'Whale Shark', scientificName: 'Rhincodon typus', tagline: 'The gentle spotted giant.',
    category: 'Fish', habitat: 'Ocean', diet: 'Carnivore', lifespan: '70-100 years', conservationStatus: 'Endangered',
    thumbnail: getImg('whaleshark'), gallery: [getImg('whaleshark')],
    description: 'A slow-moving, filter-feeding carpet shark and the largest known extant fish species.',
    funFacts: ['Their spots are unique to each individual, like a fingerprint.', 'Their mouths can be up to 5 feet wide.']
  },

  // --- INSECTS ---
  {
    id: '45', name: 'Monarch Butterfly', scientificName: 'Danaus plexippus', tagline: 'The great migrator.',
    category: 'Insect', habitat: 'Meadows and Forests', diet: 'Herbivore', lifespan: '2-6 weeks', conservationStatus: 'Endangered',
    thumbnail: getImg('butterfly'), gallery: [getImg('butterfly')],
    description: 'A milkweed butterfly known for its distinctive orange and black pattern and incredible migration.',
    funFacts: ['They migrate up to 3,000 miles to wintering grounds in Mexico.', 'Caterpillars eat toxic milkweed to make themselves poisonous to predators.']
  },
  {
    id: '46', name: 'Honey Bee', scientificName: 'Apis mellifera', tagline: 'The vital pollinator.',
    category: 'Insect', habitat: 'Meadows', diet: 'Herbivore', lifespan: '1-6 months', conservationStatus: 'Least Concern',
    thumbnail: getImg('bee'), gallery: [getImg('bee')],
    description: 'Flying insects known for their role in pollination and for producing honey and beeswax.',
    funFacts: ['They communicate the location of flowers through a "waggle dance".', 'A single bee produces 1/12th of a teaspoon of honey in her lifetime.']
  },
  {
    id: '47', name: 'Praying Mantis', scientificName: 'Mantodea', tagline: 'The patient ambush predator.',
    category: 'Insect', habitat: 'Forests and Gardens', diet: 'Carnivore', lifespan: '1 year', conservationStatus: 'Least Concern',
    thumbnail: getImg('mantis'), gallery: [getImg('mantis')],
    description: 'Predatory insects named for their prominent front legs, which are bent and held together at an angle.',
    funFacts: ['They are the only insects capable of turning their heads 180 degrees.', 'They have stereoscopic vision, like humans.']
  },
  {
    id: '48', name: 'Hercules Beetle', scientificName: 'Dynastes hercules', tagline: 'The powerhouse bug.',
    category: 'Insect', habitat: 'Rainforest', diet: 'Herbivore', lifespan: '3-6 months', conservationStatus: 'Least Concern',
    thumbnail: getImg('beetle'), gallery: [getImg('beetle')],
    description: 'A species of rhinoceros beetle native to the rainforests of Central and South America.',
    funFacts: ['They can carry up to 850 times their own body weight.', 'Males have enormous horns used for wrestling other males.']
  },
  {
    id: '49', name: 'Leaf Insect', scientificName: 'Phylliidae', tagline: 'The ultimate camouflage.',
    category: 'Insect', habitat: 'Forest', diet: 'Herbivore', lifespan: '1 year', conservationStatus: 'Least Concern',
    thumbnail: getImg('leafinsect'), gallery: [getImg('leafinsect')],
    description: 'Insects whose bodies so closely resemble leaves that predators often fail to distinguish them.',
    funFacts: ['They even sway back and forth in the wind to look like a real leaf.', 'Females are completely flightless.']
  },
  {
    id: '50', name: 'Bumblebee', scientificName: 'Bombus', tagline: 'The fuzzy flier.',
    category: 'Insect', habitat: 'Meadows and Gardens', diet: 'Herbivore', lifespan: '1 year', conservationStatus: 'Least Concern',
    thumbnail: getImg('bumblebee'), gallery: [getImg('bumblebee')],
    description: 'Large, fuzzy bees that are essential pollinators for many wild plants and crops.',
    funFacts: ['They use "buzz pollination" by vibrating their bodies to shake pollen loose.', 'They don\'t die when they sting, unlike honey bees.']
  }
];