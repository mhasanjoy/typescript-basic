type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

// type NextLevelDeveloper = JuniorDeveloper & {
//   leadershipExperience: number;
//   level: "junior" | "mid" | "senior";
// };
type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: Level;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Md. Mehedi Hasan",
  experience: 6,
};

console.log(newDeveloper);

const developer: NextLevelDeveloper = {
  name: "Md. Mehedi Hasan",
  expertise: "TypeScript",
  experience: 1,
  leadershipExperience: 6,
  //   level: "junior",
  level: Level.junior,
};
