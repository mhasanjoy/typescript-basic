"use strict";
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "Md. Mehedi Hasan",
    experience: 6,
};
console.log(newDeveloper);
const developer = {
    name: "Md. Mehedi Hasan",
    expertise: "TypeScript",
    experience: 1,
    leadershipExperience: 6,
    //   level: "junior",
    level: Level.junior,
};
