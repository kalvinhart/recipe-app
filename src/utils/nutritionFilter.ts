import { NutritionValues } from "../interfaces";

export const filterNutrients = (nutrition: { nutrients: any[] }): NutritionValues => {
  interface Item {
    name: string;
    amount: number;
    unit: string;
  }

  const filteredNutrition = nutrition.nutrients.filter((item: Item) =>
    ["Calories", "Protein", "Carbohydrates", "Fat"].includes(item.name)
  );

  let nutritionObject = {};

  filteredNutrition.forEach((item) => {
    nutritionObject = {
      ...nutritionObject,
      [item.name]: {
        amount: item.amount,
        unit: item.unit,
      },
    };
  });

  return nutritionObject;
};
