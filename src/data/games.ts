export type Situation = "first_date" | "chatting" | "call" | "long_distance";

export interface MiniGame {
  id: number;
  title: string;
  description: string;
  suggestedSituations: Situation[];
}

export const miniGames: MiniGame[] = [
  {
    id: 1,
    title: "This or That",
    description:
      "Take turns asking each other ‘this or that’ questions. Example: city nights or nature getaways, sunrise or sunset, coffee or tea.",
    suggestedSituations: ["first_date", "chatting"],
  },
  {
    id: 2,
    title: "Three Emojis Story",
    description:
      "Ask them to describe their week or mood using only three emojis, then explain the story behind them.",
    suggestedSituations: ["chatting", "long_distance"],
  },
  {
    id: 3,
    title: "Red Flag / Green Flag",
    description:
      "Say random situations (sleeping with socks, putting ketchup on everything, never being on time) and decide if it’s a red flag, green flag, or yellow flag.",
    suggestedSituations: ["first_date", "chatting"],
  },
  {
    id: 4,
    title: "Never Have I Ever (Soft)",
    description:
      "Play a soft version of ‘never have I ever’ with funny or travel-related things only. Example: never have I ever missed a flight, never have I ever fallen asleep in class.",
    suggestedSituations: ["first_date", "call"],
  },
  {
    id: 5,
    title: "Two Truths and a Lie",
    description:
      "Each person says two true facts and one lie about themselves. The other has to guess which one is the lie.",
    suggestedSituations: ["first_date", "chatting", "call"],
  },
  {
    id: 6,
    title: "Pick One, Explain Why",
    description:
      "Give them two options (unlimited time vs unlimited money, always travel vs always stay home) and ask them to pick one and explain why.",
    suggestedSituations: ["first_date", "chatting", "call", "long_distance"],
  },
  {
    id: 7,
    title: "Future Snapshot",
    description:
      "Ask each other to describe a random normal day in your lives 5 years from now. Where do you wake up, what do you do, who is around you?",
    suggestedSituations: ["call", "long_distance", "chatting"],
  },
  {
    id: 8,
    title: "Memory Swap",
    description:
      "Each person shares a funny or awkward memory that still makes them laugh. Bonus: rate each other’s stories.",
    suggestedSituations: ["first_date", "chatting"],
  },
  {
    id: 9,
    title: "Dealbreaker or Not?",
    description:
      "Mention random habits (talking to plants, needing 3 alarms, always late) and ask if each one would be a dealbreaker or not.",
    suggestedSituations: ["chatting", "call"],
  },
  {
    id: 10,
    title: "Song Game",
    description:
      "Ask them to send a song that feels like them or their current mood, and both explain why you chose that song.",
    suggestedSituations: ["long_distance", "chatting", "call"],
  },
];
