const MAX_BLOX_ID = 493;

export const getRandomBlox: (notThisOne?: number) => number = (notThisOne) => {
  const bloxNumber = Math.floor(Math.random() * MAX_BLOX_ID) + 1;
  if (bloxNumber !== notThisOne) return bloxNumber;
  return getRandomBlox(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomBlox();
  const secondId = getRandomBlox(firstId);

  return [firstId, secondId];
};
