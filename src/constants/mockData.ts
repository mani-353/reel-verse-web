
export interface Reel {
  caption: string;
  videoUrl: string;
  likes: number;
  comments: number;
  views: number;
  postedAt: string;
}

export interface User {
  username: string;
  name: string;
  reelsPage: string;
  profilePic: string;
  followers: number;
  reels: Reel[];
}

export const users: User[] = [
  {
    username: "khaby00",
    name: "Khaby Lame",
    reelsPage: "https://www.instagram.com/khaby00/reels/",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg", // Using placeholder image
    followers: 81000000,
    reels: [
      {
        caption: "Try it and let me know #learnfromkhaby #comedy",
        videoUrl: "https://www.instagram.com/reel/DBwmaCiv2bj/",
        likes: 2500000,
        comments: 60000,
        views: 40000000,
        postedAt: "2024-11-01T10:00:00Z"
      },
      {
        caption: "I may be coaching in the game @nbaallstar but I'm getting my jumper ready just in case my team needs me @lethalshooter",
        videoUrl: "https://www.instagram.com/reel/DFtDX1ATNhd/",
        likes: 3000000,
        comments: 75000,
        views: 45000000,
        postedAt: "2025-02-15T12:00:00Z"
      }
    ]
  },
  {
    username: "aliaabhatt",
    name: "Alia Bhatt",
    reelsPage: "https://www.instagram.com/aliaabhatt/reels/",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg", // Using placeholder image
    followers: 86000000,
    reels: [
      {
        caption: "First attempt at my favourite food - ft. Mama dearest",
        videoUrl: "https://www.instagram.com/reel/DGk1wYEM9-P/",
        likes: 631000,
        comments: 1391,
        views: 10000000,
        postedAt: "2025-02-27T08:00:00Z"
      },
      {
        caption: "Prettiest #aliabhatt #trendingreels ✨❤ #reelit #fyp",
        videoUrl: "https://www.instagram.com/reel/DIQbuKksPj9/",
        likes: 500000,
        comments: 1200,
        views: 8000000,
        postedAt: "2025-04-10T09:00:00Z"
      }
    ]
  },
  {
    username: "virat.kohli",
    name: "Virat Kohli",
    reelsPage: "https://www.instagram.com/virat.kohli/reels/",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg", // Using placeholder image
    followers: 271000000,
    reels: [
      {
        caption: "I suggest drinking O'cean Fruit Water cause it could help win you some cool gear too. Watch the reel for details. 50 Winners will be announced",
        videoUrl: "https://www.instagram.com/reel/C6YM1PNtPib/",
        likes: 1800000,
        comments: 45000,
        views: 30000000,
        postedAt: "2024-05-20T11:00:00Z"
      },
      {
        caption: "Virat Kohli signing off ✍ #cricket #cricketreels #CWC23 #INDvBAN",
        videoUrl: "https://www.instagram.com/reel/CylwVXCyjxu/",
        likes: 3000000,
        comments: 5892,
        views: 50000000,
        postedAt: "2023-10-19T15:00:00Z"
      }
    ]
  },
  {
    username: "avneetkaur_13",
    name: "Avneet Kaur",
    reelsPage: "https://www.instagram.com/avneetkaur_13/reels/",
    profilePic: "https://randomuser.me/api/portraits/women/68.jpg", // Using placeholder image
    followers: 31700000,
    reels: [
      {
        caption: "Dance vibes with @varundvn 💃🕺",
        videoUrl: "https://www.instagram.com/reel/CwYBz4itJaz/",
        likes: 1100000,
        comments: 30000,
        views: 15000000,
        postedAt: "2024-10-05T13:00:00Z"
      },
      {
        caption: "Behind the scenes of my latest shoot ✨",
        videoUrl: "https://www.instagram.com/reel/CxBvkmNJd3r/",
        likes: 950000,
        comments: 25000,
        views: 13000000,
        postedAt: "2024-09-15T09:30:00Z"
      }
    ]
  },
  {
    username: "bhuvan.bam22",
    name: "Bhuvan Bam",
    reelsPage: "https://www.instagram.com/bhuvan.bam22/reels/",
    profilePic: "https://randomuser.me/api/portraits/men/67.jpg", // Using placeholder image
    followers: 20600000,
    reels: [
      {
        caption: "New song 'Heer Ranjha' out now! 🎶",
        videoUrl: "https://www.instagram.com/reel/Czqm8zSMlhV/",
        likes: 2000000,
        comments: 50000,
        views: 25000000,
        postedAt: "2024-11-15T10:00:00Z"
      },
      {
        caption: "Comedy skit: When mom finds your report card 😂",
        videoUrl: "https://www.instagram.com/reel/CylwVXCyjxu/",
        likes: 1800000,
        comments: 45000,
        views: 22000000,
        postedAt: "2024-10-19T15:00:00Z"
      }
    ]
  }
];

// Function to format large numbers
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Format date to relative time (e.g., "2 days ago")
export const formatRelativeTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
};

// Generate combined feed of reels from all users
export const generateFeed = (): (Reel & { user: User })[] => {
  const feed: (Reel & { user: User })[] = [];
  
  users.forEach(user => {
    user.reels.forEach(reel => {
      feed.push({
        ...reel,
        user
      });
    });
  });
  
  // Sort by posted date, newest first
  return feed.sort((a, b) => 
    new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );
};
