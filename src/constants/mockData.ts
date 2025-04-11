export interface User {
  id: string;
  username: string;
  name: string;
  profilePic: string;
  followers: number;
  following: number;
  bio: string;
  posts: number;
}

export interface Reel {
  id: string;
  caption: string;
  videoId: string;
  likes: number;
  comments: number;
  views: number;
  postedAt: string;
  user: User;
}

export const users: User[] = [
  {
    id: '1',
    username: "khaby00",
    name: "Khaby Lame",
    profilePic: "https://i.pravatar.cc/150?img=11",
    followers: 81000000,
    following: 100,
    bio: "Life is simple, so are my solutions.",
    posts: 200
  },
  {
    id: '2',
    username: "aliaabhatt",
    name: "Alia Bhatt",
    profilePic: "https://i.pravatar.cc/150?img=5",
    followers: 86000000,
    following: 200,
    bio: "Actress. Dreamer. Creator.",
    posts: 500
  },
  {
    id: '3',
    username: "virat.kohli",
    name: "Virat Kohli",
    profilePic: "https://i.pravatar.cc/150?img=3",
    followers: 271000000,
    following: 50,
    bio: "Cricket is life. Nothing else matters.",
    posts: 1000
  },
  {
    id: '4',
    username: "avneetkaur_13",
    name: "Avneet Kaur",
    profilePic: "https://i.pravatar.cc/150?img=9",
    followers: 31700000,
    following: 150,
    bio: "Dancer. Actor. Dreamer.",
    posts: 450
  },
  {
    id: '5',
    username: "bhuvan.bam22",
    name: "Bhuvan Bam",
    profilePic: "https://i.pravatar.cc/150?img=8",
    followers: 20600000,
    following: 80,
    bio: "Content creator. Musician. Storyteller.",
    posts: 300
  }
];

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
}

export function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'Just now';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} weeks ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} months ago`;
  }

  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} years ago`;
}

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
  
  const users = [
    {
      id: '1',
      username: "khaby00",
      name: "Khaby Lame",
      profilePic: "https://i.pravatar.cc/150?img=11",
      followers: 81000000,
      following: 100,
      bio: "Life is simple, so are my solutions.",
      posts: 200
    },
    {
      id: '2',
      username: "aliaabhatt",
      name: "Alia Bhatt",
      profilePic: "https://i.pravatar.cc/150?img=5",
      followers: 86000000,
      following: 200,
      bio: "Actress. Dreamer. Creator.",
      posts: 500
    },
    {
      id: '3',
      username: "virat.kohli",
      name: "Virat Kohli",
      profilePic: "https://i.pravatar.cc/150?img=3",
      followers: 271000000,
      following: 50,
      bio: "Cricket is life. Nothing else matters.",
      posts: 1000
    },
    {
      id: '4',
      username: "avneetkaur_13",
      name: "Avneet Kaur",
      profilePic: "https://i.pravatar.cc/150?img=9",
      followers: 31700000,
      following: 150,
      bio: "Dancer. Actor. Dreamer.",
      posts: 450
    },
    {
      id: '5',
      username: "bhuvan.bam22",
      name: "Bhuvan Bam",
      profilePic: "https://i.pravatar.cc/150?img=8",
      followers: 20600000,
      following: 80,
      bio: "Content creator. Musician. Storyteller.",
      posts: 300
    }
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
