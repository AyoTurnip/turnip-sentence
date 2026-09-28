export default function handler(req, res)
{
  // each row is 10 words
  const words = [
    // streamer specific terms
    'turnip', 'drongostache', 'zek', 'arc', 'bilete', 'kaden', 'kermit', 'dangernator', 'juberoni', 'nubsy',
    'justintoucour', 'bepil', 'zodycoder', 'brian_cheese', 'wakegd', 'biggoobermonkey', 'catto', 'yuka', 'dice',
  
    // geometry dash terms
    'grief', 'heliopolis', 'tidal wave', 'vehemence', 'angelicide', 'aeternus', 'thinking space ii', 'ts2', 'nullscapes', 'killbot',
    'nhelv', 'snowing in las vegas', 'snowfall storm', 'robtop', 'doggie', 'zoink', 'wpopoff', 'trick', 'viprin', 'pauze',
    'whizkid', 'slaughter', 'guitarherostyles', 'crazen', 'cherry team', 'vernam', 'cuatrocientos', 'kaiguy', 'dorami', 'ericvanwilderman',
    'vortrox', 'kingsammelot', 'juniper', 'colon', 'wulzy', 'npesta', 'technical', 'mindcap', 'krmal', 'fernanfloo',
    'nexus', 'rust', 'bloom', 'ship', 'wave', 'cube', 'spider', 'ball', 'swing', 'ufo',
    'level', 'geometry', 'dash', 'cbf', 'amethyst', 'flamewall', 'wooting', 'portal', 'orb', 'pointercrate',
    'aredl', 'global list', 'noclip', 'hitbox', 'speedhack', 'rate advisor', 'cp', 'frame perfect', 'epic', 'legendary',
    'mythic', '60 hz', '144 hz', '240 hz', '360 hz', 'spaceuk', 'bot',

    // other people
    'kirk', 'charlie', 'elon musk', 'mrbeast', 'epstein', 'john', 'paul', 'jerome', 'chud', 'mori calliope',
    'shirakami fubuki', 'god', 'jesus', 'tokoyami towa', 'diddy', 'hitler', 'stalin', 'trump',

    // funnies
    'sus', 'baka', 'tuff', 'bitch', 'moron', 'idiot', 'lmao', 'lol', 'gg', 'ez',
    'frick', 'w', 'l', 'go', 'goooooo', 'tung tung tung sahur', 'among us', '100%', 'bruh', 'probably',
    'arigato', 'sugoi', 'konnichiwa', 'hello', 'hi', 'yo', 'sup', 'boo', 'hah', 'haha',
    'hahahaha', 'hahahaha', 'teehee', 'ayo', 'wut', 'reveal', 'shitty', 'low', 'taper', 'dank',
    'jerk', 'masturbate', 'larp', 'verity', 'cruelty', 'lovity', 'falsity', 'goon', 'jack', 'fuck',
    'rngdle', 'penis', 'vagina', 'pussy', 'furry', 'vtuber', 'hololive', 'dick', 'freak', 'testicles',
    'brainrot', 'tung', 'sahur', 'deez', 'nut', 'boob', 'tits', 'tiddy', 'breast', 'butt',
    'ass', 'bum', 'booty', 'cheek', 'boobie', 'n word', 'hawk', 'tuah', 'wordle', 'boi',
    'hentai', 'porn', 'racism', 'phonk', 'fucker', 'femboy', 'tiki', 'die', 'love', 'kill',
    'israeli', 'bang', 'smash', 'stupid', 'dumb', 'sussy', 'chud', 'slop', 'ahh', 'ur',
    '67', 'onlyfans', 'nude', 'leak', 'file', 'gassy', 'fart',

    // regular ass words
    'wake', 'help', 'jump', 'click', 'live', 'stream', 'shot', 'suck', 'predict', 'attempt',
    'sub', 'subscribe', 'gift', 'run', 'sleep', 'wash', 'walk', 'wanna', 'gonna', 'get',
    'gotta', 'is', 'mute', 'shoot', 'stab', 'blow', 'blew', 'cancel', 'expose', 'draw',
    'drew', 'fall', 'send', 'rub', 'accept', 'slip', 'drink', 'eat', 'read', 'verify',
    'beat', 'learn', 'hate', 'slap', 'kick', 'punch', 'lick', 'moan', 'gag', 'say',
    'said', 'tell', 'told', 'scream', 'finish', 'begin', 'reject', 'would', 'should', 'could',
    'to', 'from', 'by', 'before', 'after', 'then', 'than', 'instead', 'or', 'either',
    'rather', 'of', 'off', 'on', 'aside', 'out', 'here', 'there', 'every', 'any',
    'inside', 'outside', 'extreme', 'easy', 'hard', 'insane', 'normal', 'hardest', 'sorry', 'red',
    'yellow', 'orange', 'green', 'cyan', 'blue', 'pink', 'purple', 'black', 'really', 'holy',
    'free', 'chinese', 'complete', 'absolute', 'good', 'bad', 'evil', 'bald', 'new', 'old',
    'young', 'next', 'last', 'first', 'gay', 'homosexual', 'lesbian', 'transgender', 'trans', 'queer',
    'bisexual', 'sexual', 'wrong', 'hang', 'big', 'huge', 'small', 'tiny', 'fat', 'skinny',
    'impossible', 'anti', 'pro', 'high', 'drunk', 'future', 'past', 'spooky', 'type', 'super',
    'ultra', 'ultimate', 'mega', 'short', 'tall', 'north', 'east', 'south', 'west', 'far',
    'close', 'fast', 'slower', 'faster', 'viral', 'crazy', 'favorite', 'most', 'least', 'great',
    'can', 'cant', 'want', 'how', 'what', 'when', 'where', 'yourself', 'i', 'my',
    'us', 'me', 'our', 'you', 'all', 'a', 'the', 'this', 'that', 'it',
    'he', 'his', 'him', 'she', 'her', 'they', 'them', 'cat', 'dog', 'command',
    'eater', 'collab', 'song', 'music', 'name', 'computer', 'keyboard', 'monitor', 'frame', 'pixel',
    'editor', 'pedophile', 'groomer', 'ai', 'drop', 'rate', 'icon', 'chat', 'follow', 'sub',
    'whore', 'shit', 'poop', 'pee', 'piss', 'shower', 'word', 'light', 'list', 'mic',
    'bomb', 'culture', 'anime', 'twitter', 'x', 'billionare', 'money', 'drama', 'controversy', 'aura',
    'farm', 'game', 'school', 'tax', 'hack', 'block', 'alert', 'mod', 'moderator', 'party',
    'cinema', 'slope', 'physics', 'gravity', 'minecraft', 'star', 'moon', 'creator', 'point', 'leaderboard',
    'top', 'mouth', 'chest', 'finger', 'hand', 'toe', 'feet', 'foot', 'inch', 'mile',
    'kilometer', 'hair', 'thing', 'stuff', 'joke', 'prank', 'moment', 'bro', 'girl', 'son',
    'day', 'today', 'yesterday', 'week', 'month', 'year', 'decade', 'reddit', 'discord', 'man',
    'men', 'boy', 'pride', 'affair', 'intercourse', 'pirate', 'coin', 'back', 'front', 'chungus',
    'belly', 'challenge', 'placement', 'place', 'record', 'world', 'speedrun', 'rip', 'mcdonalds', 'burger',
    'king', 'wendys', 'walmart', 'target', 'costco', 'gang', 'friend', 'buddy', 'pal', 'folk',
    'brick', 'bed', 'crib', 'oomf', 'pronoun', 'liberal', 'conservative', 'wing', 'abortion', 'noob',
    'meat', 'crack', 'meth', 'alcohol', 'gpt', 'test', 'speed', 'show', 'desk', 'table',
    'mouse', 'santa', 'christmas', 'halloween', 'mom', 'dad', 'mama', 'papa', 'mommy', 'loser',
    'baby', 'girlfriend', 'boyfriend', 'rock', 'paper', 'scissors', 'book', 'bunny', 'fox', 'city',
    'war', 'determination', 'hater', 'team', 'ninja', 'fade', 'meme', 'reel', 'tiktok', 'video',
    'english', 'spanish', 'french', 'german', 'showcase', 'request', 'ban', 'timeout', 'face', 'nose',
    'ear', 'nipple', 'arm', 'leg', 'thigh', 'teeth', 'start', 'end', 'tongue', 'america',
    'united states', 'japan', 'canada', 'uk', 'united kingdom', 'africa', 'china', 'one', 'two', 'three',
    'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'can', 'cant', 'want',
    'how', 'what', 'when', 'where', 'korea', 'education', 'special', 'korea', 'massive', 'remember',
    'dono', 'donate', 'sponsor', 'sell', 'greed', 'obese', 'obesity', 'scam', 'hungry', 'space',
    'just', 'play', 'player', 'never', 'ever', 'forever'
];
  
  const count = Math.floor(Math.random() * 12) + 2;
  const result = [];
  
  for (let i = 0; i < count; i++)
  {
    let word = words[Math.floor(Math.random() * words.length)];

    // 10% chance to add 'ing'
    if (Math.random() < 0.1)
    {
      if (word.endsWith('e'))
      {
        word = word.slice(0, -1) + 'ing';
      }
      else
      {
        word += "ing";
      }
    }

    // 10% chance to add 'y'
    if (Math.random() < 0.1)
    {
      if (!word.endsWith('y'))
      {
        word += "y";
      }
    }
    
    // 10% chance to add pass tense
    if (Math.random() < 0.1)
    {
      if (word.endsWith('e'))
      {
        word += "d";
      }
      else if (word.endsWith('y'))
      {
        word = word.slice(0, -1) + 'ied';
      }
      else
      {
        word += "ed";
      }
    }
    
    // 10% chance to plural
    if (Math.random() < 0.1)
    {
      if (word.endsWith('s') || word.endsWith('h') || word.endsWith('x'))
      {
        word += 'es';
      }
      else if (word.endsWith('y'))
      {
        word = word.slice(0, -1) + 'ies';
      }
      else
      {
        word += 's';
      }
    }
    
    // 10% chance to add possessive
    if (Math.random() < 0.1)
    {
      if (word.endsWith('s'))
      {
        word += "'";
      }
      else {
        word += "'s";
      }
    }

    // 25% chance to capitalize the first letter
    if (Math.random() < 0.25)
    {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    // 10% chance to fully capitalize
    if (Math.random() < 0.1) {
      word = word.toUpperCase();
    }

    result.push(word);
  }

  // Generate joined sentence
  let finalMessage = result.join(' ');

  // List of ending characters
  const endings = ['.', '?', '!', '-', '~', ''];
  const ending = endings[Math.floor(Math.random() * endings.length)];

  finalMessage += ending;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(finalMessage);
}
