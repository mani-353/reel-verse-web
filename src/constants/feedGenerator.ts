
import { Reel } from './types';
import { users } from './userData';

export function generateFeed(): Reel[] {
  const vimeoIds = [
    "1074629687", // Original video
    "1074633267", // New video 1
    "1074633306", // New video 2
    "1074633328", // New video 3
    "1074633171", // New video 4
    "1074633209", // New video 5
    "1074633234"  // New video 6
  ];
  
  const captions = [
    "Try it and let me know #learnfromkhaby #comedy",
    "I may be coaching in the game @nbaallstar but I'm getting my jumper ready just in case my team needs me",
    "First attempt at my favourite food - ft. Mama dearest",
    "Dance vibes 💃🕺",
    "New song out now! 🎶",
    "Just vibing with the beat 🎵",
    "Watch till the end for a surprise 😂"
  ];
  
  return vimeoIds.map((videoId, index) => ({
    id: (index + 1).toString(),
    caption: captions[index % captions.length],
    videoId: videoId,
    likes: Math.floor(Math.random() * 3000000) + 500000,
    comments: Math.floor(Math.random() * 75000) + 1000,
    views: Math.floor(Math.random() * 45000000) + 5000000,
    postedAt: new Date(2025 - Math.floor(Math.random() * 2), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toISOString(),
    user: users[index % users.length]
  }));
}
