export const parseIngredients = (ingredients: string): string[] => {
  return textAreaToList(ingredients);
};

export const parseInstructions = (instructions: string): string[] => {
  return textAreaToList(instructions);
};

const textAreaToList = (areaContents: string): string[] => {
  return areaContents.split('\n').filter((item) => item.length !== 0);
};
