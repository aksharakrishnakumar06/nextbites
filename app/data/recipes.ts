export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "paneer-tikka", title: "Paneer Tikka", emoji: "🧆", minutes: 40, difficulty: "Medium", cuisine: "Indian" },
  { id: "cold-brew", title: "Cold Brew Coffee", emoji: "☕", minutes: 10, difficulty: "Easy", cuisine: "Cafe" },
  { id: "avocado-toast", title: "Avocado Toast", emoji: "🥑", minutes: 10, difficulty: "Easy", cuisine: "Breakfast" },
];