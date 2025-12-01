export type Situation = "first_date" | "chatting" | "call" | "long_distance";

export interface MiniGame {
  id: number;
  title: string;
  description: string;
  suggestedSituations: Situation[];
  prompts?: string[]; // líneas/preguntas que se usan en el juego
}

export const miniGames: MiniGame[] = [
  {
    id: 1,
    title: "This or That",
    description:
      "Take turns asking each other ‘this or that’ questions. Example: city nights or nature getaways, sunrise or sunset, coffee or tea.",
    suggestedSituations: ["first_date", "chatting"],
    prompts: [
      "City nights 🏙️ or nature getaways 🌲?",
      "Sunrise ☀️ or sunset 🌅?",
      "Coffee ☕ or tea 🍵?",
      "Texting 💬 or phone calls 📞?",
      "Stay in 🛋️ or go out 🍹?",
      "Beach vacation 🏖️ or mountain cabin 🏔️?",
    ],
  },
  {
    id: 2,
    title: "Three Emojis Story",
    description:
      "Ask them to describe their week or mood using only three emojis, then explain the story behind them.",
    suggestedSituations: ["chatting", "long_distance"],
    prompts: [
      "Describe your week using only three emojis.",
      "Describe your ideal weekend using only three emojis.",
      "Describe our conversation so far with three emojis.",
      "Describe your last date (good or bad) using just three emojis.",
    ],
  },
  {
    id: 3,
    title: "Red Flag / Green Flag",
    description:
      "Say random situations (sleeping with socks, putting ketchup on everything, never being on time) and decide if it’s a red flag, green flag, or yellow flag.",
    suggestedSituations: ["first_date", "chatting"],
    prompts: [
      "Always late to everything by 20 minutes.",
      "Sleeps with socks on every single night.",
      "Needs to take a picture of the food before eating.",
      "Still friends with all of their exes.",
      "Never plans anything, always ‘you decide’.",
      "Sends memes instead of replying properly.",
    ],
  },
  {
    id: 4,
    title: "Never Have I Ever (Soft)",
    description:
      "Play a soft version of ‘never have I ever’ with funny or travel-related things only. Example: never have I ever missed a flight, never have I ever fallen asleep in class.",
    suggestedSituations: ["first_date", "call"],
    prompts: [
      "Never have I ever fallen asleep in class or in a meeting.",
      "Never have I ever missed a flight or a bus.",
      "Never have I ever texted the wrong person by accident.",
      "Never have I ever laughed so hard I cried.",
      "Never have I ever gone on a spontaneous trip.",
    ],
  },
  {
    id: 5,
    title: "Two Truths and a Lie",
    description:
      "Each person says two true facts and one lie about themselves. The other has to guess which one is the lie.",
    suggestedSituations: ["first_date", "chatting", "call"],
    prompts: [
      "Say three ‘facts’ about yourself: two truths and one lie. I’ll guess the lie.",
      "I’ll go first with two truths and a lie, then you go.",
      "Make your lie believable, not obvious.",
    ],
  },
  {
    id: 6,
    title: "Pick One, Explain Why",
    description:
      "Give them two options (unlimited time vs unlimited money, always travel vs always stay home) and ask them to pick one and explain why.",
    suggestedSituations: ["first_date", "chatting", "call", "long_distance"],
    prompts: [
      "Unlimited time ⏳ or unlimited money 💸?",
      "Always travel ✈️ or always stay in one place 🏡?",
      "Be famous but broke, or rich but unknown?",
      "Know your future or change one thing from your past?",
      "Always be 10 minutes late or 20 minutes early?",
    ],
  },
  {
    id: 7,
    title: "Future Snapshot",
    description:
      "Ask each other to describe a random normal day in your lives 5 years from now. Where do you wake up, what do you do, who is around you?",
    suggestedSituations: ["call", "long_distance", "chatting"],
    prompts: [
      "Describe a random normal day in your life 5 years from now.",
      "In 5 years, where do you imagine waking up most days?",
      "In 5 years, what’s one thing you definitely want to have in your life?",
    ],
  },
  {
    id: 8,
    title: "Memory Swap",
    description:
      "Each person shares a funny or awkward memory that still makes them laugh. Bonus: rate each other’s stories.",
    suggestedSituations: ["first_date", "chatting"],
    prompts: [
      "Tell me a funny or awkward memory that still makes you laugh.",
      "Tell me about a trip or moment that went totally wrong but is funny now.",
      "Tell me about a ‘this can’t be happening’ moment you survived.",
    ],
  },
  {
    id: 9,
    title: "Dealbreaker or Not?",
    description:
      "Mention random habits (talking to plants, needing 3 alarms, always late) and ask if each one would be a dealbreaker or not.",
    suggestedSituations: ["chatting", "call"],
    prompts: [
      "Needs 5 alarms to wake up every morning.",
      "Talks to their plants and gives them names.",
      "Never answers calls, only texts.",
      "Is glued to their phone during dates.",
      "Hates dogs or hates cats (pick one).",
    ],
  },
  {
    id: 10,
    title: "Song Game",
    description:
      "Ask them to send a song that feels like them or their current mood, and both explain why you chose that song.",
    suggestedSituations: ["long_distance", "chatting", "call"],
    prompts: [
      "Send me a song that feels like ‘you’ and tell me why.",
      "Send me a song that matches your mood right now.",
      "Send me a song you’d play on a late-night drive.",
      "Send me a song that reminds you of a good memory.",
    ],
  },
];
