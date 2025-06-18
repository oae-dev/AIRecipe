


  const GENERATE_OPTION_RECIPE_PROMPT = `
Based on the user's instruction, create 3 different recipe variants with:
- Recipe Name (include an emoji),
- 2-line description,
- main ingredient list (ingredients only, no sizes).

Provide the response in JSON format with these fields:
recipeName, description, ingredients (without size).
`;


  const GENERATE_COMPLETE_RECIPE_PROMPT = `Given the recipe name and description, provide:
  -emoji icons for each ingredient as icon,
- full list of ingredients as "ingredient",
- emoji icon for each ingredient as "icon",
- quantity as "quantity",
- detailed step-by-step recipe as "steps" without numbering,
- total calories as number in "calories",
- cooking time in minutes as number in "cookTime",
- number of servings as "serveTo",
- realistic image text prompt based on the recipe as "imagePrompt".
- search imagePrompt on googleImages and give any image url important

Please respond in JSON format only.`
;


export {
  GENERATE_OPTION_RECIPE_PROMPT,
  GENERATE_COMPLETE_RECIPE_PROMPT,
};
