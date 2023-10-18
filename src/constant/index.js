import {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
} from "../../assets/images";

export const userData = [
  {
    id: 1,
    name: "Peggie",
    age: 28,
    hobbies: ["Concerts", "Festivals", "Photography"],
    bio: "Hey there! My name is Peggie. I'm a passionate fashion photographer with a love for capturing the beauty in everyday life. When I'm not behind the lens, you'll find me immersing myself in the energy of live music at concerts and festivals. Exploring new cultures and cuisines is my idea of a perfect adventure. Let's share stories over a cup of coffee and see where our shared passions take us!",
    distance: "3 miles away",
    imgPath: user1,
  },
  {
    id: 2,
    name: "Diana",
    age: 30,
    hobbies: ["Hiking", "Cooking", "Music"],
    bio: "Hi there! I'm Diana, a nature lover who finds joy in the kitchen and the magic of music. Let's go on a hike and then cook up a storm together. Seeking someone to share adventures and good food with.",
    distance: "10 miles away",
    imgPath: user2,
  },
  {
    id: 3,
    name: "Sophie",
    age: 26,
    hobbies: ["Painting", "Yoga", "Traveling"],
    bio: "Greetings! I'm Sophie, a free-spirited artist who finds inspiration in the colors of life. Yoga keeps me grounded, and painting allows my imagination to soar. Let's embark on a journey of self-discovery together, exploring the world and creating masterpieces along the way.",
    distance: "2 miles away",
    imgPath: user3,
  },
  {
    id: 4,
    name: "Betty",
    age: 32,
    hobbies: ["Soccer", "Cooking", "Movies"],
    bio: "Hi there! I'm Betty, a soccer lover who finds joy in the kitchen and the magic of movies. Let's kick a ball around and then cook up a storm together. Seeking someone to share adventures and good food with.",
    distance: "5 miles away",
    imgPath: user4,
  },
  {
    id: 5,
    name: "Lily",
    age: 29,
    hobbies: ["Dancing", "Reading", "Hiking"],
    bio: "Hola! I'm Lily, a dance lover who finds joy in the rhythm of life. Books are my escape, and hiking fuels my spirit. Let's dance under the stars and get lost in stories over a cup of coffee. Eager to meet someone to share life's dance with.",
    distance: "7 miles away",
    imgPath: user5,
  },
  {
    id: 6,
    name: "Chiara",
    age: 28,
    hobbies: ["Singing", "Writing", "Sailing"],
    bio: "Ciao! I'm Chiara, a melody-maker who finds solace in writing and the serenity of sailing. Let's harmonize our voices and create music together. A poetic soul searching for someone to sail through life's highs and lows.",
    distance: "4 miles away",
    imgPath: user6,
  },
  {
    id: 7,
    name: "Emma",
    age: 27,
    hobbies: ["Singing", "Writing", "Sailing"],
    bio: "Hi there! I'm Emma, a melody-maker who finds solace in writing and the serenity of sailing. Let's harmonize our voices and create music together. A poetic soul searching for someone to sail through life's highs and lows.",
    distance: "4 miles away",
    imgPath: user7,
  },
  {
    id: 8,
    name: "Sarah",
    age: 29,
    hobbies: ["Surfing", "Gardening", "Painting"],
    bio: "Hi there! I'm Sarah, a surfer who finds joy in the garden and the magic of painting. Let's ride the waves and then paint up a storm together. Seeking someone to share adventures and good food with.",
    distance: "8 miles away",
    imgPath: user8,
  },
  {
    id: 9,
    name: "Olivia",
    age: 28,
    hobbies: ["Yoga", "Hiking", "Photography"],
    bio: "Hello, I'm Olivia, a yoga enthusiast who finds peace in the serenity of nature and expression through photography. Let's go on a hike and then strike a pose together. Looking for someone to share adventures and good food with.",
    distance: "9 miles away",
    imgPath: user9,
  },
];

export const chatData = [
  {
    id: 1,
    name: "Betty",
    imgUrl: user4,
    age: 32,
    isOnline: true,
    lastMessage:
      "That sounds like a lot of fun. Would you like to go together sometime?",
    date: "2023-10-15",
    timeSent: "5 mins",
    chat: [
      {
        sender: "me",
        message: "Hi there! How's it going?",
        timestamp: "10:00 AM",
      },
      {
        sender: "Betty",
        message: "I am doing great, thanks!",
        timestamp: "10:05 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Charlie",
    imgUrl: user5,
    age: 28,
    isOnline: false,
    lastMessage: "Sure, let's do that. When are you free?",
    date: "2023-10-14",
    timeSent: "10 mins",
    chat: [
      {
        sender: "me",
        message: "Hey Charlie, how have you been?",
        timestamp: "11:00 AM",
      },
      {
        sender: "Charlie",
        message: "I've been good. How about you?",
        timestamp: "11:05 AM",
      },
    ],
  },
  // Additional entries:
  {
    id: 3,
    name: "Oliver",
    imgUrl: user8,
    age: 30,
    isOnline: true,
    lastMessage: "Sounds like a plan! Let's make it happen.",
    date: "2023-10-11",
    timeSent: "25 mins",
    chat: [
      {
        sender: "me",
        message: "Hi Oliver, how's your day going?",
        timestamp: "2:00 PM",
      },
      {
        sender: "Oliver",
        message: "It's going great! Enjoying the sunshine. How about you?",
        timestamp: "2:05 PM",
      },
    ],
  },
  {
    id: 4,
    name: "Sophie",
    imgUrl: user9,
    age: 27,
    isOnline: true,
    lastMessage: "Definitely! Looking forward to it.",
    date: "2023-10-10",
    timeSent: "30 mins",
    chat: [
      {
        sender: "me",
        message: "Hey Sophie, how's your week been?",
        timestamp: "3:00 PM",
      },

      {
        sender: "Sophie",
        message: "It's been busy but good. How about you?",
        timestamp: "3:05 PM",
      },
      {
        sender: "Sophie",
        message: "And also tired",
        timestamp: "3:05 PM",
      },
      {
        sender: "me",
        message: "Mine's been quite hectic too, but managing.",
        timestamp: "3:10 PM",
      },
      {
        sender: "Sophie",
        message: "That's good to hear. Any exciting plans for the weekend?",
        timestamp: "3:15 PM",
      },
      {
        sender: "me",
        message:
          "Not yet, but I'm thinking of checking out that new restaurant downtown. You?",
        timestamp: "3:20 PM",
      },
      {
        sender: "Sophie",
        message:
          "I'm planning to go hiking with some friends. You should join us sometime!",
        timestamp: "3:25 PM",
      },
      {
        sender: "me",
        message:
          "Not yet, but I'm thinking of checking out that new restaurant downtown. You?",
        timestamp: "3:20 PM",
      },
      {
        sender: "Sophie",
        message:
          "I'm planning to go hiking with some friends. You should join us sometime!",
        timestamp: "3:25 PM",
      },
      {
        sender: "me",
        message:
          "Not yet, but I'm thinking of checking out that new restaurant downtown. You?",
        timestamp: "3:20 PM",
      },
      {
        sender: "Sophie",
        message:
          "I'm planning to go hiking with some friends. You should join us sometime!",
        timestamp: "3:25 PM",
      },
    ],
  },

  {
    id: 5,
    name: "William",
    imgUrl: user1,
    age: 29,
    isOnline: false,
    lastMessage: "Let me check my schedule and get back to you.",
    date: "2023-10-09",
    timeSent: "35 mins",
    chat: [
      {
        sender: "me",
        message: "Hi William, how's everything going?",
        timestamp: "4:00 PM",
      },
      {
        sender: "William",
        message: "Things are going well. How about you?",
        timestamp: "4:05 PM",
      },
    ],
  },
  {
    id: 6,
    name: "Jack",
    imgUrl: user3,
    age: 30,
    isOnline: true,
    lastMessage: "Sounds like a great idea. Let's make it happen.",
    date: "2023-10-07",
    timeSent: "45 mins",
    chat: [
      {
        sender: "me",
        message: "Hey Jack, how's your week been?",
        timestamp: "6:00 PM",
      },
      {
        sender: "Jack",
        message: "It's been busy but good. How about you?",
        timestamp: "6:05 PM",
      },
    ],
  },
];

export const datesData = [
  {
    id: 1,
    imgUrl: user1,
    name: "Dianna",
    age: 25,
  },
  {
    id: 2,
    imgUrl: user2,
    name: "Jane",
    age: 28,
  },
  {
    id: 3,
    imgUrl: user3,
    name: "John",
    age: 26,
  },
  {
    id: 4,
    imgUrl: user4,
    name: "Ella",
    age: 29,
  },
  {
    id: 5,
    imgUrl: user5,
    name: "Jullie",
    age: 30,
  },
  {
    id: 6,
    imgUrl: user6,
    name: "Olivia",
    age: 27,
  },
  {
    id: 7,
    imgUrl: user7,
    name: "William",
    age: 31,
  },
  {
    id: 8,
    imgUrl: user8,
    name: "Sophia",
    age: 29,
  },
  // Include similar objects for 2 more matches
];

export const profileData = [
  {
    name: "Jacob Jones",
    age: 30,
    imgUrl: user1,
    hobbies: ["Hiking", "Photography", "Cooking"],
    bio: "I'm an adventurous person who loves exploring new places, trying out different cuisines, capturing moments through photography, and spending time in nature. I enjoy hiking on weekends and experimenting with new recipes in the kitchen. Traveling and experiencing different cultures are some of my greatest passions, and I'm always looking for my next adventure.",
  },
];
