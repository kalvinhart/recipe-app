import React from "react";

import { NutritionWrapper, MacroWrapper } from "./shared/Recipe.styles";
import { SpanBold } from "../styles/fontStyles";
import { NutritionValues } from "../interfaces";

const RecipeNutrition: React.FC<NutritionValues> = ({
  Calories,
  Protein,
  Carbohydrates,
  Fat,
}) => {
  return (
    <NutritionWrapper>
      <MacroWrapper>
        <SpanBold>Calories</SpanBold>
        <p>
          {Calories?.amount ?? "N/A"}
          {Calories?.unit ?? "N/A"}
        </p>
      </MacroWrapper>
      <MacroWrapper>
        <SpanBold>Protein</SpanBold>
        <p>
          {Protein?.amount ?? "N/A"}
          {Protein?.unit ?? "N/A"}
        </p>
      </MacroWrapper>
      <MacroWrapper>
        <SpanBold>Carbohydrates</SpanBold>
        <p>
          {Carbohydrates?.amount ?? "N/A"}
          {Carbohydrates?.unit ?? "N/A"}
        </p>
      </MacroWrapper>
      <MacroWrapper>
        <SpanBold>Fat</SpanBold>
        <p>
          {Fat?.amount ?? "N/A"}
          {Fat?.unit ?? "N/A"}
        </p>
      </MacroWrapper>
    </NutritionWrapper>
  );
};

export default RecipeNutrition;
