const gowanFamily = [
  {
    id: 1,
    name: "Leila",
    family: 1,
    selected: false,
  },
  {
    id: 2,
    name: "Lyrik",
    family: 1,
    selected: false,
  },
  {
    id: 3,
    name: "Eloise",
    family: 1,
    selected: false,
  },
  {
    id: 4,
    name: "Gavin",
    family: 2,
    selected: false,
  },
  {
    id: 5,
    name: "Jonah",
    family: 3,
    selected: false,
  },
  {
    id: 6,
    name: "Henry",
    family: 3,
    selected: false,
  },
  {
    id: 7,
    name: "Ava",
    family: 4,
    selected: false,
  },
  {
    id: 8,
    name: "Oliver",
    family: 4,
    selected: false,
  },
];

export const giftList = familyToMatch => {
  const selectedMatch = [];
  familyToMatch.map(child => {
    while (true) {
      const randomSelection = Math.floor(Math.random() * familyToMatch.length);
      if (
        familyToMatch[randomSelection].family !== child.family &&
        !familyToMatch[randomSelection].selected
      ) {
        selectedMatch.push(
          `${child.name} => ${familyToMatch[randomSelection].name}`
        );
        familyToMatch[randomSelection].selected = true;
        break;
      }
    }
  });
  return selectedMatch;
};
