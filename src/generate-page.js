const Manager = require("../lib/Manager");
const Programmer = require("../lib/Programmer");
const Intern = require("../lib/Intern");

function generateCards(team) {
  let cards = [];
  for (let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch (teamArray.getRole()) {
      case "Manager":
        const manager = new Manager(
          teamArray.id,
          teamArray.name,
          teamArray.email,
          teamArray.officeNumber
        );
        cards.push(generateManagerCard(manager));
        break;
      case "Programmer":
        const programmer = new Programmer(
          teamArray.id,
          teamArray.name,
          teamArray.email,
          teamArray.github
        );
        cards.push(generateProgrammerCard(programmer));
        break;
      case "Intern":
        const intern = new Intern(
          teamArray.id,
          teamArray.name,
          teamArray.email,
          teamArray.school
        );
        cards.push(generateInternCard(intern));
        break;
    }
  }
  return cards.join(``);
}
let generateManagerCard = (Manager) => {
  return;
};
module.exports = generateTeam;
