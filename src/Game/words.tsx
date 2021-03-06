import { Random } from "random-js";

class Words {
    english_words: string[];
    constructor() {
        this.english_words = ['access', 'action', 'addition', 'adventure', 'advisor', 'airline', 'airport', 'alien', 'american', 'angel', 'ankle', 'apollo', 'archer', 'arena', 'ares', 'arm', 'arrow', 'assassin', 'astronaut', 'author', 'bacon', 'bag', 'ball', 'ballet', 'band', 'banner', 'bar', 'barrel', 'bartender', 'beam', 'bear', 'bell', 'belt', 'bench', 'bet', 'bigfoot', 'bird', 'bite', 'black', 'blade', 'blog', 'boat', 'bolt', 'bomb', 'bone', 'bow', 'bowling', 'box', 'boy', 'break', 'breath', 'bronze', 'brownie', 'browser', 'brush', 'bull', 'bullet', 'butter', 'cable', 'cafe', 'cage', 'cake', 'camera', 'canon', 'cap', 'capitol', 'care', 'carrier', 'cereal', 'ceremony', 'chain', 'character', 'cheek', 'chicken', 'cinema', 'circus', 'city', 'class', 'clone', 'club', 'cod', 'coffee', 'comic', 'connection', 'corn', 'corner', 'corpse', 'cosmos', 'cotton', 'course', 'cow', 'crab', 'cracker', 'crew', 'cross', 'crown', 'crystal', 'cupcake', 'current', 'customer', 'czech', 'dagger', 'death', 'demon', 'devil', 'dinner', 'director', 'directory', 'dolphin', 'dragon', 'drain', 'drive', 'drop', 'eagle', 'egypt', 'elephant', 'elf', 'episode', 'equator', 'face', 'faith', 'fan', 'fantasy', 'farm', 'feather', 'fiction', 'field', 'fight', 'file', 'fire', 'fist', 'floor', 'fly', 'forearm', 'forehead', 'forest', 'fox', 'freezer', 'french', 'frog', 'funeral', 'fur', 'future', 'game', 'garden', 'gate', 'ghost', 'ginger', 'glass', 'glove', 'goat', 'gold', 'golf', 'government', 'gown', 'grill', 'guitar', 'hall', 'hammer', 'hamster', 'hand', 'handle', 'hell', 'hill', 'hole', 'hood', 'hook', 'hose', 'hospital', 'house', 'hunt', 'hymn', 'ice', 'inch', 'inverse', 'italy', 'japan', 'jar', 'jaw', 'jellyfish', 'jersey', 'jerusalem', 'jug', 'jump', 'kennel', 'key', 'kiss', 'kite', 'kitten', 'knight', 'kolkata', 'lake', 'lamp', 'latvia', 'left', 'lid', 'lincoln', 'lion', 'lip', 'lithuania', 'lock', 'lodge', 'london', 'luck', 'magic', 'mango', 'manhattan', 'market', 'martian', 'mathematics', 'maze', 'mermaid', 'mesh', 'meter', 'mind', 'mirror', 'monopoly', 'month', 'moon', 'moose', 'motorcycle', 'mountain', 'movie', 'musical', 'nepal', 'network', 'news', 'night', 'nose', 'note', 'ocean', 'octopus', 'officer', 'opening', 'order', 'oval', 'oven', 'owl', 'pack', 'panda', 'paris', 'park', 'paw', 'paws', 'peach', 'peanut', 'pearl', 'pen', 'pepper', 'performer', 'pharmacist', 'physician', 'pink', 'pirate', 'pit', 'pittsburgh', 'pizza', 'plane', 'plant', 'play', 'pocket', 'poem', 'poker', 'police', 'poodle', 'prayer', 'present', 'priest', 'prince', 'prometheus', 'puppy', 'purple', 'puzzle', 'raccoon', 'radar', 'radio', 'rainbow', 'raptor', 'rat', 'reef', 'reference', 'reindeer', 'report', 'rice', 'river', 'romance', 'room', 'rose', 'round', 'rune', 'salmon', 'salt', 'sand', 'sandals', 'scandinavia', 'scientist', 'screen', 'screw', 'script', 'scuba', 'sea', 'seat', 'second', 'security', 'seoul', 'serpent', 'set', 'shaman', 'shepherd', 'shoe', 'shrimp', 'silk', 'singer', 'single', 'skull', 'sky', 'smile', 'snail', 'sniper', 'soldier', 'soprano', 'soup', 'spaniel', 'spice', 'spider', 'spiderman', 'spoon', 'spring', 'star', 'step', 'stomach', 'stone', 'store', 'storm', 'story', 'student', 'sugar', 'summit', 'surface', 'surgery', 'swan', 'swing', 'syria', 'system', 'tail', 'tea', 'team', 'technician', 'television', 'temperature', 'terrier', 'third', 'throw', 'ticket', 'tie', 'time', 'tissue', 'toe', 'toilet', 'tournament', 'tower', 'track', 'trained', 'trap', 'truck', 'tube', 'tune', 'turtle', 'twilight', 'underwear', 'unit', 'universe', 'update', 'usa', 'vampire', 'vehicle', 'venus', 'violin', 'voice', 'waiter', 'wales', 'war', 'website', 'wedding', 'week', 'well', 'western', 'wind', 'window', 'wing', 'winter', 'wizard', 'wolf', 'world', 'writer', 'yacht', 'year', 'zurich'];
    }
    getRandom(count) {
        const random = new Random(); // uses the nativeMath engine
        const uniqueWords = new Set();
        while(count > 0) {
            const wordIndex = random.integer(0, this.english_words.length - 1);
            const word = this.english_words[wordIndex];
            if(!uniqueWords.has(word)) {
                uniqueWords.add(word);
                count--;
            }
        }
        return new Array(...uniqueWords);
    }

}

export default Words;
