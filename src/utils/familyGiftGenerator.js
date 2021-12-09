export const giftList = familyToMatch => {
  const selectedMatch = [];
  const trackingFamily = [...familyToMatch];
  familyToMatch.forEach((child, index) => {
    let count = 0;
    while (count < 20) { // if count gets to 20, there are no more matches
      const randomSelection = Math.floor(Math.random() * trackingFamily.length);
      console.log('DH - trackingFamily', trackingFamily)
      console.log('DH - randomSelection', randomSelection);
      if (trackingFamily[randomSelection].family !== child.family) {
        selectedMatch.push(
          child.name + " => " + trackingFamily[randomSelection].name
        );
        trackingFamily.splice(randomSelection, 1);
        break;
      }
      count++; // keeps track of how many times the logic is tried
    }
    if (count >= 20) {
      selectedMatch.push(child.name + " doesn't have a match.");
    }
  });
  return selectedMatch;
};
