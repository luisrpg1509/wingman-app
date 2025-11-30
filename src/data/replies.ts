export type Tone = "playful" | "cute" | "bold" | "sarcastic";

export interface Reply {
  id: number;
  text: string;
  tone: Tone;
  category: "reply" | "ask_date" | "banter";
  context: "dating_app" | "in_person" | "both";
  language: "en" | "es";
}

export const replies: Reply[] = [
  // --- originales / similares a los que ya tenías ---
  {
    id: 1,
    text: "Already playing hard to get? I like your style 😌",
    tone: "playful",
    category: "reply",
    context: "dating_app",
    language: "en",
  },
  {
    id: 2,
    text: "Challenge accepted. But first, hi, I’m Luis.",
    tone: "cute",
    category: "reply",
    context: "dating_app",
    language: "en",
  },
  {
    id: 3,
    text: "We have a winner then. What if we remove the ‘hypothetically’ and actually go?",
    tone: "bold",
    category: "ask_date",
    context: "dating_app",
    language: "en",
  },
  {
    id: 4,
    text: "Already playing hard to get, bonita? I like it.",
    tone: "playful",
    category: "reply",
    context: "dating_app",
    language: "en",
  },
  {
    id: 5,
    text: "Let’s see if I can change your mind over a coffee.",
    tone: "cute",
    category: "ask_date",
    context: "dating_app",
    language: "en",
  },

  // --- flirty replies (para chat / apps) ---
  {
    id: 6,
    text: "You do realize you’re kind of distracting, right? 😏",
    tone: "playful",
    category: "reply",
    context: "both",
    language: "en",
  },
  {
    id: 7,
    text: "Wow, okay, now I’m curious… tell me more 👀",
    tone: "cute",
    category: "reply",
    context: "both",
    language: "en",
  },
  {
    id: 8,
    text: "Is this you flirting or are you always like this? 😌",
    tone: "playful",
    category: "reply",
    context: "dating_app",
    language: "en",
  },
  {
    id: 9,
    text: "Careful, you keep talking like that and I might actually like you.",
    tone: "sarcastic",
    category: "reply",
    context: "both",
    language: "en",
  },
  {
    id: 10,
    text: "That’s cute. I kind of like your brain already.",
    tone: "cute",
    category: "reply",
    context: "both",
    language: "en",
  },
  {
    id: 11,
    text: "So is this your mysterious side or just the warm-up?",
    tone: "playful",
    category: "reply",
    context: "dating_app",
    language: "en",
  },
  {
    id: 12,
    text: "Bold of you to say that and expect me not to flirt back.",
    tone: "bold",
    category: "reply",
    context: "both",
    language: "en",
  },
  {
    id: 13,
    text: "I see you’re not only good-looking but also trouble.",
    tone: "playful",
    category: "reply",
    context: "both",
    language: "en",
  },
  {
    id: 14,
    text: "Okay but… you’re low-key my type, not gonna lie.",
    tone: "cute",
    category: "reply",
    context: "both",
    language: "en",
  },
  {
    id: 15,
    text: "This conversation is suspiciously fun. I like it.",
    tone: "cute",
    category: "reply",
    context: "both",
    language: "en",
  },

  // --- líneas para invitar a salir (ask_date) ---
  {
    id: 16,
    text: "This is fun, but I vote we upgrade from chat to real life. Coffee sometime?",
    tone: "bold",
    category: "ask_date",
    context: "dating_app",
    language: "en",
  },
  {
    id: 17,
    text: "I like this vibe. Want to continue it over a coffee this week?",
    tone: "cute",
    category: "ask_date",
    context: "both",
    language: "en",
  },
  {
    id: 18,
    text: "You seem like someone I’d actually enjoy meeting. Drinks or coffee soon?",
    tone: "bold",
    category: "ask_date",
    context: "both",
    language: "en",
  },
  {
    id: 19,
    text: "We clearly text well. Should we see if we get along in person too?",
    tone: "playful",
    category: "ask_date",
    context: "dating_app",
    language: "en",
  },
  {
    id: 20,
    text: "Okay, your personality passed the vibe check. Coffee, park, or something chill this week?",
    tone: "playful",
    category: "ask_date",
    context: "both",
    language: "en",
  },
  {
    id: 21,
    text: "I’d be down to turn this into an actual plan. What’s your schedule like?",
    tone: "cute",
    category: "ask_date",
    context: "both",
    language: "en",
  },
  {
    id: 22,
    text: "Hot take: we’d be even more fun in person. Prove me right?",
    tone: "sarcastic",
    category: "ask_date",
    context: "dating_app",
    language: "en",
  },
  {
    id: 23,
    text: "Let’s make a deal: I pick the place, you bring that personality.",
    tone: "playful",
    category: "ask_date",
    context: "both",
    language: "en",
  },
  {
    id: 24,
    text: "I don’t invite just anyone, but I feel like we’d have a good time. Coffee or a drink?",
    tone: "bold",
    category: "ask_date",
    context: "both",
    language: "en",
  },
  {
    id: 25,
    text: "We can keep flirting here… or we can do it over tacos/coffee. Your call 😌",
    tone: "playful",
    category: "ask_date",
    context: "both",
    language: "en",
  },
];
