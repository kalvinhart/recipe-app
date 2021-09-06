export interface NutritionValues {
  Protein?: {
    amount: number;
    unit: string;
  };
  Carbohydrates?: {
    amount: number;
    unit: string;
  };
  Fat?: {
    amount: number;
    unit: string;
  };
  Calories?: {
    amount: number;
    unit: string;
  };
}

export interface RecipeProps {
  analyzedInstructions: AnalyzedInstructions[];
  dairyFree: boolean;
  expanded: boolean;
  glutenFree: boolean;
  id: number;
  image: string;
  nutrition?: {
    nutrients: any[];
  };
  readyInMinutes: number;
  servings: number;
  title: string;
  vegan: boolean;
}

export interface Steps {
  number: number;
  step: string;
  ingredients: any[];
  equipment: any[];
}

interface AnalyzedInstructions {
  name?: string;
  steps: Steps[];
}
