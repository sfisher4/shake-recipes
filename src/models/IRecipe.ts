export interface IRecipe {
  id?: number;
  title: string;
  // TODO: we could potentially store this as string[]
  ingredients: string;
  instructions: string;
}