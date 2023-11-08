const randomAnimalsNames = [

    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Reddeer",
    "Redpanda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "SandDollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra",
];

const animalHints = {

    "ardvark": "African burrowing mammal with a long tongue.",

    "albatross": "Large seabird known for its impressive wingspan.",

    "alligator": "Found in freshwater habitats, it has a broad snout, powerful jaws, and lives in the southeastern United States.",

    "alpaca": "A domesticated relative of the llama, it's prized for its soft fleece used in making warm clothing.",

    "ant": "These tiny insects are known for their   complex underground colonies and teamwork.",

    "anteater": "With a long, tube-like snout, it feasts on ants and termites, making it a master of insect hunting.",

    "antelope": "This animal is known for its grace and speed, with many different species found in Africa.",

    "ape": "These primates are our closest relatives and include species like chimpanzees and gorillas.",

    "armadillo": "It's a small mammal with a bony armored shell and is often found in the Americas.",


    "baboon": "These primates are large and powerful, known for their distinctive dog-like faces.",

    "badger": "This animal is known for its strong digging abilities and distinctive black and white facial markings.",

    "barracuda": "A fearsome predator of the sea, it's known for its sharp teeth and swift swimming.",

    "bat": "The only mammals capable of sustained flight, they play a vital role in pollination and insect control.",

    "bear": "These large mammals come in various species, including polar bears and grizzly bears.",

    "beaver": "Known for building dams and lodges, they are expert engineers of the animal kingdom.",

    "bee": "These industrious insects are vital for pollinating plants and producing honey.",

    "bison": " Often called buffalo, these massive mammals once roamed the American prairies in vast herds.",
    "boar": "Wild relatives of domestic pigs, they are known for their tusks and can be quite aggressive.",

    "buffalo": " A large and powerful herbivore, it's often seen in herds on the African savannah.",

    "butterfly": "These colorful insects undergo a remarkable transformation from caterpillar to their final, delicate form.",

    "camel": "Adapted for desert life, they are known for their humps and their ability to endure long journeys  without water.",

    "capybara": "The world's largest rodent, it's often seen in groups near water and is quite sociable.",

    "caribou": "Also known as reindeer, they are known for their long migrations and are an important part of Arctic ecosystems.",

    "cassowary": "A flightless bird with striking blue skin and a helmet-like casque on its head.",

    "cat": "A popular household pet known for its agility and independent nature.",

    "caterpillar": "The larval stage of a butterfly, they often have colorful patterns and transform into butterflies.",

    "cattle": " Domesticated bovines raised for milk, meat, and various agricultural purposes.",

    "chamois": " These agile mountain goats are known for their ability to navigate steep and rocky terrain.",

    "cheetah": "The fastest land animal, known for its incredible speed and distinctive black (tear tracks) on its face.",

    "chicken": "A common farm bird, known for laying eggs and providing meat.",

    "chimpanzee": " Our closest relatives in the animal kingdom, known for their intelligence and social behavior.",

    "chinchilla": "A small, adorable rodent often kept as a pet and known for its soft fur.",

    "chough": "A type of crow with distinctive red legs and beak, often seen in coastal areas.",

    "clam": "These bivalve mollusks live in shells and are often enjoyed as seafood.",

    "cobra": "A venomous snake known for its hood and deadly bite.",

    "cockroach": "These resilient insects can survive in various environments and are often associated with household pests.",

    "cod": "A popular fish in seafood cuisine, known for its flaky white flesh.",

    "cormorant": "Water birds known for their diving abilities and excellent fishing skills.",

    "coyote": "A clever and adaptable canid found in North and Central America.",

    "crab": " This animal is a crustacean with a hard exoskeleton, pincers, and is often found along coastlines.",
    "crane": " It's a tall wading bird known for its long legs and graceful appearance, often seen in wetlands.",
    "crocodile": " A large reptile with a powerful jaw, it's often found in tropical regions and near water.",
    "crow": "A common black bird known for its intelligence and cawing calls, often seen in urban areas.",
    "curlew": " A wading bird with a long, curved bill, it's often found in coastal and marshy areas.",
    "deer": "Graceful herbivores with antlers, they are often found in forests and meadows.",
    "dinosaur": "These ancient reptiles roamed the Earth millions of years ago and include famous species like Tyrannosaurus rex.",
    "dog": " Man's best friend, this domesticated animal comes in various breeds and is known for loyalty and companionship.",
    "dogfish": "A type of small shark often found in temperate waters, with spiny dorsal fins.",
    "dolphin": " Highly intelligent marine mammals known for their playful behavior and echolocation abilities.",
    "donkey": "Often seen as a hardworking farm animal, it's known for its braying sound and is related to horses.",
    "dotterel": "A small plover-like bird often found in rocky and mountainous habitats.",
    "dove": "A symbol of peace, these birds are known for their gentle cooing sounds and white plumage.",
    "dragonfly": "Graceful insects with large transparent wings, they are skilled fliers and often seen near water bodies.",
    "duck": "Waterfowl with webbed feet, they are commonly found in ponds, rivers, and lakes.",
    "dugong": "A large marine mammal known for its herbivorous diet and found in coastal waters.",
    "dunlin": "A small wading bird often seen in mudflats and estuaries.",
    "eagle": "This bird of prey has incredible vision and powerful talons, making it a symbol of strength and freedom.",
    "echidna": "An egg-laying mammal with spiky spines, it's one of only a few monotremes in the world.",
    "eel": "A long, snake-like fish that's known for its slippery and slimy appearance.",
    "eland": "One of the largest antelopes, it has long, twisted horns and is found in African grasslands.",
    "elephant": "The world's largest land animal, known for its trunk and large ears. It's highly intelligent and social.",
    "elk": "A large and majestic deer species with impressive antlers, often seen in North American forests.",
    "emu": "A flightless bird native to Australia, known for its speed and long legs.",
    "falcon": "A swift and agile bird of prey used in falconry for hunting other birds.",
    "ferret": "A domesticated carnivorous mammal known for its playful and inquisitive nature.",
    "finch": "A small, colorful songbird often kept as a pet, known for its melodious songs.",
    "fish": "A diverse group of aquatic vertebrates with scales and gills, found in various water bodies.",
    "flamingo": "A tall, wading bird with pink plumage and long, skinny legs, often found in groups near water.",
    "fly": "Small insects with transparent wings, known for their ability to fly quickly and land on various surfaces.",
    "fox": "A clever and adaptable carnivorous mammal with a bushy tail, known for its cunning behavior.",
    "frog": "Amphibians that have moist skin and are known for their jumping ability and croaking sounds.",
    "gaur": "This is a large and powerful wild ox native to South Asia, known for its distinctive high-ridged hump on the back.",
    "gazelle": "A graceful and fast-running antelope often found in African savannahs.",
    "gerbil": "A small rodent known for its burrowing behavior and long tail.",
    "giraffe": "This tall African mammal has a long neck and a distinctive spotted coat pattern.",
    "gnat": "Tiny flying insects known for their irritating bites.",
    "gnu": "Also known as wildebeest, it's a large antelope with a shaggy mane and curved horns.",
    "goat": "A domesticated farm animal known for its horns and often kept for milk and meat.",
    "goldfinch": "A small songbird with bright yellow plumage often found in gardens.",
    "goldfish": " A popular pet fish known for its shiny, golden scales.",
    "goose": "These waterfowl are recognized by their distinctive honking sounds and V-shaped flight formation.",
    "gorilla": " A large and powerful ape native to Africa, known for its strength and social behavior.",
    "goshawk": "A fast and agile bird of prey often found in wooded areas.",
    "grasshopper": " Insects known for their ability to jump great distances and produce a characteristic chirping sound.",
    "grouse": " These game birds are known for their elaborate courtship displays.",
    "guanaco": "A relative of the llama, it's found in South America and known for its soft wool.",
    "gull": "Sea birds often seen near coastlines and beaches, known for their distinctive calls.",
    "hamster": "A small, nocturnal rodent often kept as a pet, known for its cheek pouches.",
    "hare": " A fast-running, long-eared mammal often found in open fields and meadows.",
    "hawk": " Birds of prey known for their keen eyesight and sharp talons, used for hunting.",
    "hedgehog": "Small, spiky mammals that roll into a ball for protection when threatened.",
    "heron": "Long-legged wading birds often seen near water, known for their graceful appearance.",
    "herring": "A popular fish used in various culinary dishes and often found in the North Atlantic.",
    "hippopotamus": "Large, semi-aquatic mammals known for their massive size and powerful jaws.",
    "hornet": "A large and aggressive species of wasp, recognized by its distinctive black and white markings.",
    "horse": "Domesticated equines known for their strength, speed, and close relationship with humans.",
    "human": "The most intelligent and widespread species on Earth, capable of diverse cultures, languages, and achievements.",
    "hummingbird": "Tiny, colorful birds capable of hovering in mid-air and known for their rapid wingbeats.",
    "hyena": "Carnivorous mammals with distinctive laughter-like vocalizations, often seen in African savannahs.",
    "ibex": "This mountain-dwelling animal is known for its long, curved horns and is an expert climber.",
    "ibis": "A long-legged wading bird often seen near water, known for its distinctive curved bill.",
    "jackal": "A cunning carnivore often found in Africa and Asia, known for its scavenging habits.",
    "jaguar": "This big cat is a powerful predator with a distinctive rosette pattern on its coat.",
    "jay": "A colorful bird known for its noisy and chatty behavior, often seen in woodlands.",
    "jellyfish": "A gelatinous sea creature with stinging tentacles, found in oceans worldwide.",
    "kangaroo": " An iconic marsupial from Australia known for its powerful hind legs and hopping locomotion.",
    "kingfisher": "A small, colorful bird often seen near water bodies, known for its swift dives to catch fish.",
    "koala": "A marsupial with a preference for eucalyptus leaves, known for its cuddly appearance.",
    "kookabura": "A large kingfisher native to Australia, known for its distinctive laughing call.",
    "kouprey": " A rare and critically endangered wild ox native to Southeast Asia.",
    "kudu": "A large antelope with impressive spiraled horns, often found in African savannahs.",
    "lapwing": "A bird known for its distinctive crest and characteristic 'peewit' call.",
    "lark": " A small songbird known for its melodious and cheerful singing.",
    "lemur": "A primate found only in Madagascar, known for its large, expressive eyes and long, bushy tail.",
    "leopard": "A big cat with striking rosette patterns on its coat, known for its stealth and strength.",
    "lion": "The 'king of the jungle,' known for its majestic mane and powerful roars.",
    "llama": "A domesticated South American camelid often used as a pack animal.",
    "lobster": "A marine crustacean prized for its meat, often found in the ocean.",
    "locust": " A type of grasshopper known for forming swarms that can cause agricultural damage.",
    "loris": "A small, slow-moving primate with large, round eyes, found in tropical forests.",
    "louse": "A tiny, wingless insect often associated with infestations in hair or clothing.",
    "lyrebird": "A superb songbird known for its remarkable ability to mimic sounds in its environment.",
    "magpie": " A black and white bird known for its intelligence and melodious song.",
    "mallard": "A common duck species with distinctive iridescent green heads among males.",
    "manatee": " Also known as sea cows, these gentle marine mammals are found in warm waters.",
    "mandrill": "A colorful and large monkey known for its striking facial colors and prominent nose.",
    "mantis": " A predatory insect with spiky forelimbs often seen in a praying posture.",
    "marten": " A small carnivorous mammal known for its sleek appearance and bushy tail.",
    "meerkat": "A small mongoose known for its social behavior and standing upright to scan for predators.",
    "mink": " A semi-aquatic mammal known for its valuable fur and sleek, dark coat.",
    "mole": "A small, burrowing mammal with specialized front paws for digging.",
    "mongoose": " A carnivorous mammal often used to control pests and known for its agility.",
    "monkey": "Intelligent and agile primates found in various parts of the world.",
    "moose": "The largest species of deer, known for their massive size and impressive antlers.",
    "mosquito": "Small, blood-sucking insects often seen as pests and carriers of diseases.",
    "mouse": "A small rodent often found in various habitats, known for its adaptability.",
    "mule": "A hybrid animal resulting from the crossbreeding of a donkey and a horse.",
    "narwhal": "This Arctic-dwelling marine mammal is known for its long, spiral tusk.",
    "newt": "This amphibian is often found near water and can regenerate lost body parts.",
    "nightingale": "A small songbird known for its beautiful and melodious nighttime songs.",
    "octopus": "This intelligent sea creature has eight arms and can change colors and textures.",
    "okapi": "Resembling a mix between a horse and a zebra, it's native to the rainforests of Central Africa.",
    "opossum": "A marsupial known for its prehensile tail and playing dead when threatened.",
    "oryx": "A large antelope with long, straight horns that is adapted to arid desert environments.",
    "ostrich": "The world's largest and fastest-running bird with long legs and a long neck.",
    "otter": "These playful and aquatic mammals are known for their sleek bodies and webbed feet.",
    "owl": " A nocturnal bird of prey with large eyes and the ability to rotate its head almost 270 degrees.",
    "oyster": "A bivalve mollusk that forms pearls and is often enjoyed as seafood.",
    "panther": "A powerful and elusive big cat, often referred to as a black leopard or jaguar.",
    "parrot": "Colorful birds known for their ability to mimic human speech and sounds.",
    "partridge": "A game bird known for its short legs and the famous song 'The Twelve Days of Christmas.'",
    "peafowl": "A large and colorful bird, the male is famous for its iridescent tail feathers or 'train.'",
    "pelican": " Water birds with a large bill that can hold a lot of fish, often seen near coastlines.",
    "penguin": "Flightless birds that are excellent swimmers and live in the Southern Hemisphere.",
    "pheasant": "A game bird known for its vibrant plumage and is often hunted for sport and food.",
    "pig": "Domesticated animals raised for meat, known for their snouts and squeals.",
    "pigeon": "These birds are known for their cooing sound and are found in cities around the world.",
    "pony": " Smaller horses, often favored by children for riding and equestrian activities.",
    "porcupine": " A rodent covered in sharp quills, they can release them as a defense mechanism.",
    "porpoise": " Small marine mammals similar to dolphins, known for their playful behavior.",
    "quail": "Small game birds known for their distinctive calls and delicious meat.",
    "quelea": "A small, highly social bird often seen in large flocks in Africa.",
    "quetzal": "A brilliantly colored bird found in Central and South America, considered sacred in Mayan culture.",
    "rabbit": "Small mammals known for their long ears and hopping locomotion.",
    "raccoon": "These masked critters are known for their dexterity and love of scavenging.",
    "rail": "Small wetland birds with secretive behavior and often seen in marshes and reeds.",
    "ram": "A male sheep known for its curved horns, often symbolizing determination and strength.",
    "rat": " A common rodent found worldwide, known for its adaptability and rapid reproduction.",
    "raven": "Large and intelligent birds often associated with mythology and symbolism.",
    "reddeer": "One of the largest deer species in the world, native to Europe and Asia.",
    "redpanda": "A small, tree-dwelling mammal known for its rust-colored fur and bushy tail.",
    "reindeer": "Also known as caribou, these Arctic deer are known for their annual migrations and antlers.",
    "rhinoceros": "Large herbivores with thick skin and one or two horns on their noses.",
    "rook": "A black-plumaged member of the crow family known for its distinctive beak.",
    "salamander": "This amphibian has a long tail, moist skin, and can be found near water.",
    "salmon": "A fish known for its distinctive journey from freshwater to the ocean and back.",
    "sand Dollar": "A flat and round sea urchin with a beautiful pattern on its shell.",
    "sandpiper": "A shorebird often seen along coastlines, known for its quick, darting movements.",
    //   "sardine": "Hint: A small, oily fish often packed in cans and used in various dishes.",
    //   "scorpion": "Hint: An arachnid with a venomous sting and a segmented tail.",
    //   "seahorse": "Hint: A unique fish with a horse-like head and a tendency to swim upright.",
    //   "seal": "Hint: Semi-aquatic mammals known for their playful behavior and blubber for insulation.",
    //   "shark": "Hint: Apex predators of the ocean, with sharp teeth and a keen sense of smell.",
    //   "sheep": "Hint: Domesticated for their wool and meat, often seen grazing in pastures.",
    //   "shrew": "Hint: Tiny mammals with a high metabolism and an elongated, pointed snout.",
    //   "skunk": "Hint: Easily recognizable by their black and white coloration and the ability to emit a foul odor when   treatened.",
    //   "snail": "Hint: A slow-moving gastropod known for its coiled shell and slimy trail.",
    //   "snake": "Hint: Legless reptiles with a wide range of species, some of which are venomous.",
    //   "sparrow": "Hint: Small birds known for their cheerful chirping and adaptability to urban environments.",
    //   "spider": "Hint: Arachnids with eight legs, spinning webs to catch prey and often portrayed in folklore.",
    //   "spoonbill": "Hint: Wading birds with distinctive spoon-shaped bills, often seen in wetlands.",
    //   "squid": "Hint: Cephalopods with a soft body, tentacles, and a beak-like mouth.",
    //   "squirrel": "Hint: Small, agile mammals often seen in trees and known for gathering and storing nuts.",
    //   "starling": "Hint: Songbirds with iridescent feathers and the ability to mimic other bird calls.",
    //   "stingray": "Hint: Cartilaginous fish known for their flat bodies and the potential to deliver painful stings.",
    //   "stinkbug": "Hint: Insects known for their strong odor when disturbed or crushed.",
    //   "stork": "Hint: Large wading birds often associated with delivering babies in folklore.",
    //   "swallow": "Hint: Agile birds known for their acrobatic flight and distinctive forked tails.",
    //   "swan": "Hint: Graceful waterfowl known for their elegant necks and white plumage.",
    //   "tapir": "Hint: Large, herbivorous mammals with distinctive trunk-like snouts.",
    //   "tarsier": "Hint: Small primates with enormous eyes and the ability to rotate their heads almost 180 degrees.",
    //   "termite": "Hint: Social insects known for their wood-eating habits and the construction of intricate mounds.",
    //   "tiger": "Hint: Majestic big cats with distinctive orange fur and black stripes.",
    //   "toad": "Hint: Amphibians often found in damp environments, with warty skin and a preference for hopping.",
    //   "trout": "Hint: Freshwater fish known for their delicious taste and popularity in angling.",
    //   "turkey": "Hint: Large birds known for their gobbling calls and association with Thanksgiving feasts.",
    //   "turtle": "Hint: Reptiles with protective shells that come in various species and sizes.",
    //   "viper": "Hint: Venomous snakes often characterized by their triangular-shaped heads and vertical pupils.",
    //   "vulture": "Hint: Birds of prey that feed on carrion, with a keen sense of smell for locating food.",
    //   "wallaby": "Hint: Marsupials resembling small kangaroos, often found in Australia.",
    //   "walrus": "Hint: Marine mammals known for their tusks and ability to haul out on ice and rocks.",
    //   "wasp": "Hint: Social insects with a painful sting and a role in pollination and pest control.",
    //   "weasel": "Hint: Small carnivorous mammals known for their agility and ability to hunt small prey.",
    //   "whale": "Hint: Enormous marine mammals with species like humpbacks and orcas, known for their aquatic lifestyles.",
    //   "wildcat": "Hint: Small to medium-sized feline predators, often found in various habitats.",
    "wolf": " Apex predators with a strong pack mentality and a vital role in ecosystems.",
    "wolverine": "Robust and fearless mammals known for their tenacity and strength.",
    "wombat": " Short-legged marsupials with a love for digging burrows and nocturnal habits.",
    "woodcock": " A plump bird known for its distinctive courtship display flights.",
    "woodpecker": " Birds with specialized beaks for drumming on trees and finding insects under bark.",
    "worm": " Legless invertebrates found in the soil, often beneficial for composting and soil health.",
    "wren": " Small, lively birds with melodious songs, often nesting in shrubs and gardens.",
    "yak": "Large, shaggy-haired mammals adapted to high-altitude regions, often used for milk, meat, and transportation.",
    "zebra": "Striped equids known for their distinctive black-and-white coat patterns."

};

//Hint Button..
const hintButton = document.getElementById("hintButton");
const hintText = document.getElementById("hintText");


// Function to show a hint...
function showHint() {
    console.log("Hint button clicked.");
    const currentAnimal = randomAnimalName.toLowerCase(); // Convert the animal name to lowercase
    const hint = animalHints[currentAnimal]; // to get  hint from  animalHints obj mentioned above: 

    if (hint) {
        hintText.textContent = `${hint}`;
    } else {
        hintText.textContent = "Sorry! No hint available for this animal. Guessss~~😁";
    }

    // hintText.textContent = `${hint}`;


    hintText.classList.remove("hidden");

}
// Event listener for the hint button to make it respond..
hintButton.addEventListener("click", showHint);



let totalChances = 0;
let score = 0;

const hangStandChildren = document.querySelector(".hangstand").children;
const backButton = document.getElementById('back');
const scoreText = document.getElementById('score');

for (let index = 0; index < hangStandChildren.length; index++) {
    const element = hangStandChildren[index];
    element.classList.add("display-none");
}

let randomAnimalName = null;

// Function to get random value
function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

// function to create alphabets button
function giveMeButtonsOnScreen() {
    const rootEl = document.querySelector(".buttons-parent");
    let buttonsDataArray = Array(26).fill(null);
    let i = 65;
    buttonsDataArray = buttonsDataArray.map((value) => {
        return String.fromCharCode(i++);
    });

    buttonsDataArray.forEach((el) => {
        const btn = document.createElement("button");
        btn.textContent = el;
        rootEl.appendChild(btn);
        btn.style.fontSize = "1rem";
        btn.style.width = "40px";
        btn.style.height = "40px";
        btn.style.margin = "5px";
    });
}

// Function to assign values to blank spaces from the list according to random value generated by getRandomNumber() function
function chooseRandomAnimalName() {
    const blankParentEl = document.querySelector(".blanks_parent");
    const randomNumber = getRandomNumber(0, randomAnimalsNames.length);
    randomAnimalName = randomAnimalsNames[randomNumber].toUpperCase();

    for (let index = 0; index < randomAnimalName.length; index++) {
        const letter = randomAnimalName[index];
        const alpha = document.createElement("p");
        alpha.id = "hyphen";
        const para = document.createElement("span");
        para.textContent = letter;
        alpha.appendChild(para);
        blankParentEl.appendChild(alpha);
        alpha.style.fontSize = "20px";
        alpha.style.margin = "5px";
    }
}

giveMeButtonsOnScreen();
chooseRandomAnimalName();

const buttonsParentEl = document.querySelector(".buttons-parent");

let checkStatusGlobal = 0;
// Function to disable and update the color of alphabet buttons and generate the alerts for end game
const buttonParentClickFunction = function(e) {
    let checkStatus = 0;
    if (e.target.textContent.length === 1) {
        const letterClicked = e.target.textContent;
        console.log(randomAnimalName);

        const allLettersEls = document.getElementsByTagName("span");

        for (let index = 0; index < allLettersEls.length; index++) {
            const spanEl = allLettersEls[index];

            if (letterClicked == spanEl.textContent) {
                spanEl.parentElement.textContent = letterClicked;

                checkStatus++;
                checkStatusGlobal++;
            }
        }

        if (checkStatus != 0) {
            e.target.classList.add("greenBtn");
        } else {
            totalChances++;
            const elementToRemoveClass = document.querySelector(
                `.class-${totalChances}`
            );
            elementToRemoveClass.classList.remove("display-none");
            e.target.classList.add("redBtn");
        }

        e.target.setAttribute("disabled", "disabled");
    }

    if (totalChances == 10) {
        alert("You Lost the Game");
        resetGame();
    }

    if (checkStatusGlobal == randomAnimalName.length) {
        score++;
        scoreText.textContent = `Score: ${score}`;
        alert("You won the Game");
        resetGame();
    }
};

//  FUNCTION TO RESET THE GAME WHEN PLAYER CLICKS "PLAY AGAIN" BUTTON..
function resetGame() {
    const blanksParent = document.querySelector(".blanks_parent");
    blanksParent.innerHTML = "";

    // Reset HG stand
    for (let index = 0; index < hangStandChildren.length; index++) {
        const element = hangStandChildren[index];
        element.classList.add("display-none");
    }


    //Re-enable the red nd green btn
    const alphabetButtons = document.querySelectorAll(".buttons-parent button");
    alphabetButtons.forEach((button) => {
        button.removeAttribute("disabled");
        button.classList.remove("greenBtn", "redBtn");
    })


    //Re-enable to choose again
    chooseRandomAnimalName();

    // Reset chances nd checkStatusGlobal
    totalChances = 0;
    checkStatusGlobal = 0;

}

// => to "playAgain" btn
const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", resetGame);




buttonsParentEl.addEventListener("click", buttonParentClickFunction);
// Event listeren for "Back" button
backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});






//Function for navbar games dropdown
var select = document.getElementById("games-dropdown");
select.addEventListener("change", function() {
    var selectedOption = select.options[select.selectedIndex].value;
    if (selectedOption) {
        window.location.href = selectedOption + ".html";
    }

});