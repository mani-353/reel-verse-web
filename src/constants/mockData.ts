
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
  videoUrl: string;
  likes: number;
  comments: number;
  views: number;
  postedAt: string;
  user: User;
}

// Added users array that was missing
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
  const videoUrls = [
    "https://collection.cloudinary.com/dr3ksoifa/3174872804f44d7b1eeb306d245f592a",
    "https://collection.cloudinary.com/dr3ksoifa/0fc6f355e93d08851d3a113ccb3d2d95",
    "https://collection.cloudinary.com/dr3ksoifa/0aca85adc7643bfe343f42942fed7887",
    "https://collection.cloudinary.com/dr3ksoifa/4347b1cbd3f150fa2493bc4ca2663a69",
    "https://collection.cloudinary.com/dr3ksoifa/d50336ff6a7034548baf293edb6ce634"
  ];

  return [
    {
      id: '1',
      caption: "Try it and let me know #learnfromkhaby #comedy",
      videoUrl: videoUrls[0],
      likes: 2500000,
      comments: 60000,
      views: 40000000,
      postedAt: new Date('2024-11-01T10:00:00Z').toISOString(),
      user: {
        id: '1',
        username: "khaby00",
        name: "Khaby Lame",
        profilePic: "https://i.pravatar.cc/150?img=11",
        followers: 81000000,
        following: 100,
        bio: "Life is simple, so are my solutions.",
        posts: 200
      }
    },
    {
      id: '2',
      caption: "I may be coaching in the game @nbaallstar but I'm getting my jumper ready just in case my team needs me",
      videoUrl: videoUrls[1],
      likes: 3000000,
      comments: 75000,
      views: 45000000,
      postedAt: new Date('2025-02-15T12:00:00Z').toISOString(),
      user: {
        id: '2',
        username: "aliaabhatt",
        name: "Alia Bhatt",
        profilePic: "https://i.pravatar.cc/150?img=5",
        followers: 86000000,
        following: 200,
        bio: "Actress. Dreamer. Creator.",
        posts: 500
      }
    },
    {
      id: '3',
      caption: "First attempt at my favourite food - ft. Mama dearest",
      videoUrl: videoUrls[2],
      likes: 631000,
      comments: 1391,
      views: 10000000,
      postedAt: new Date('2025-02-27T08:00:00Z').toISOString(),
      user: {
        id: '3',
        username: "virat.kohli",
        name: "Virat Kohli",
        profilePic: "https://i.pravatar.cc/150?img=3",
        followers: 271000000,
        following: 50,
        bio: "Cricket is life. Nothing else matters.",
        posts: 1000
      }
    },
    {
      id: '4',
      caption: "Dance vibes 💃🕺",
      videoUrl: videoUrls[3],
      likes: 1100000,
      comments: 30000,
      views: 15000000,
      postedAt: new Date('2024-10-05T13:00:00Z').toISOString(),
      user: {
        id: '4',
        username: "avneetkaur_13",
        name: "Avneet Kaur",
        profilePic: "https://i.pravatar.cc/150?img=9",
        followers: 31700000,
        following: 150,
        bio: "Dancer. Actor. Dreamer.",
        posts: 450
      }
    },
    {
      id: '5',
      caption: "New song out now! 🎶",
      videoUrl: videoUrls[4],
      likes: 2000000,
      comments: 50000,
      views: 25000000,
      postedAt: new Date('2024-11-15T10:00:00Z').toISOString(),
      user: {
        id: '5',
        username: "bhuvan.bam22",
        name: "Bhuvan Bam",
        profilePic: "https://i.pravatar.cc/150?img=8",
        followers: 20600000,
        following: 80,
        bio: "Content creator. Musician. Storyteller.",
        posts: 300
      }
    }
  ];
}
