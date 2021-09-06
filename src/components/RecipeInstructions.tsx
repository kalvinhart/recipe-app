import React from "react";

import {
  InstructionsWrapper,
  InstructionsList,
  InstructionsStep,
} from "./shared/Recipe.styles";
import { H2, SpanBold } from "../styles/fontStyles";

import { Steps } from "../interfaces";

interface InstructionsProps {
  instructions: Steps[];
}

const RecipeInstructions: React.FC<InstructionsProps> = ({ instructions }) => {
  console.log("From Instructions: ", instructions);
  return (
    <InstructionsWrapper>
      <H2>Instructions</H2>
      <InstructionsList>
        {instructions.map((item: Steps) => (
          <InstructionsStep>
            <SpanBold>Step {item.number}</SpanBold> - {item.step}
          </InstructionsStep>
        ))}
      </InstructionsList>
    </InstructionsWrapper>
  );
};

export default RecipeInstructions;
