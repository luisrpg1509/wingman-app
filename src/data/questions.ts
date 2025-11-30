export type QuestionType = "light" | "flirty" | "deep";

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  situation: "first_date" | "chatting" | "long_distance" | "any";
  language: "en" | "es";
}

export const questions: Question[] = [
  // --- LIGHT (1–10) ---
  {
    id: 1,
    text: "What’s your perfect lazy Sunday?",
    type: "light",
    situation: "any",
    language: "en",
  },
  {
    id: 2,
    text: "What’s something small that instantly makes you like someone more?",
    type: "light",
    situation: "any",
    language: "en",
  },
  {
    id: 3,
    text: "What’s your go-to ‘this is so me’ movie or series?",
    type: "light",
    situation: "chatting",
    language: "en",
  },
  {
    id: 4,
    text: "Are you more of a sunrise or sunset person?",
    type: "light",
    situation: "any",
    language: "en",
  },
  {
    id: 5,
    text: "What’s a simple thing that makes your day better instantly?",
    type: "light",
    situation: "any",
    language: "en",
  },
  {
    id: 6,
    text: "What’s your comfort food when you’ve had a long day?",
    type: "light",
    situation: "any",
    language: "en",
  },
  {
    id: 7,
    text: "If you could teleport anywhere for one day, where would you go?",
    type: "light",
    situation: "any",
    language: "en",
  },
  {
    id: 8,
    text: "What song never fails to put you in a good mood?",
    type: "light",
    situation: "any",
    language: "en",
  },
  {
    id: 9,
    text: "Are you more chaotic plans or super organized plans?",
    type: "light",
    situation: "first_date",
    language: "en",
  },
  {
    id: 10,
    text: "What’s something you could talk about for hours?",
    type: "light",
    situation: "any",
    language: "en",
  },

  // --- FLIRTY (11–20) ---
  {
    id: 11,
    text: "What’s something you find attractive that people don’t usually mention?",
    type: "flirty",
    situation: "first_date",
    language: "en",
  },
  {
    id: 12,
    text: "What’s your love language, or what makes you feel really appreciated?",
    type: "flirty",
    situation: "any",
    language: "en",
  },
  {
    id: 13,
    text: "Do you remember the first time someone gave you butterflies?",
    type: "flirty",
    situation: "chatting",
    language: "en",
  },
  {
    id: 14,
    text: "What’s your favorite way to spend time with someone you like?",
    type: "flirty",
    situation: "any",
    language: "en",
  },
  {
    id: 15,
    text: "Are you more “slow burn” or “instant chemistry” when you like someone?",
    type: "flirty",
    situation: "any",
    language: "en",
  },
  {
    id: 16,
    text: "What’s a subtle way you flirt with someone you like?",
    type: "flirty",
    situation: "chatting",
    language: "en",
  },
  {
    id: 17,
    text: "What’s your ideal first date vibe: chill coffee, fun activity, or fancy dinner?",
    type: "flirty",
    situation: "first_date",
    language: "en",
  },
  {
    id: 18,
    text: "What’s a green flag you really appreciate in someone?",
    type: "flirty",
    situation: "any",
    language: "en",
  },
  {
    id: 19,
    text: "What kind of message makes you think, “okay, I like this person”?",
    type: "flirty",
    situation: "chatting",
    language: "en",
  },
  {
    id: 20,
    text: "Do you believe in “right person, wrong time” or is it all about effort?",
    type: "flirty",
    situation: "deep",
    language: "en",
  },

  // --- DEEP (21–30) ---
  {
    id: 21,
    text: "What’s a moment in your life you’ll never forget?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 22,
    text: "What’s something you’re proud of but don’t talk about much?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 23,
    text: "When do you feel most like yourself?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 24,
    text: "What’s something that changed the way you see life?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 25,
    text: "What’s a lesson you learned the hard way but are now grateful for?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 26,
    text: "How do you know you can really trust someone?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 27,
    text: "What’s something you’re working on improving about yourself right now?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 28,
    text: "When you imagine your future, what’s one thing that has to be there?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 29,
    text: "What’s a fear you’ve managed to overcome or are trying to overcome?",
    type: "deep",
    situation: "any",
    language: "en",
  },
  {
    id: 30,
    text: "If you could give your younger self one piece of advice, what would it be?",
    type: "deep",
    situation: "any",
    language: "en",
  },
];
