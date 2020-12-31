export const giftList = familyToMatch => {
  const selectedMatch = [];
  familyToMatch.forEach((child, index) => {
    while (true) {
      const randomSelection = Math.floor(Math.random() * familyToMatch.length);
      if (
        familyToMatch[randomSelection].family !== child.family &&
        !familyToMatch[randomSelection].selected
      ) {
        selectedMatch.push(
          `${child.name ?? "Anonymous"} => ${
            familyToMatch[randomSelection].name ?? "Anonymous"
          }`
        );
        familyToMatch[randomSelection].selected = true;
        break;
      }
    }
  });
  return selectedMatch;
};
