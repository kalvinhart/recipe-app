const fetchData = async (url: string) => {
  if (!url) throw new Error("Please provide a URL to fetch data from.");

  const apiURL = `${url}&apiKey=${process.env.REACT_APP_API_KEY}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getRandomRecipe = () => {
  const baseUrl = `https://api.spoonacular.com/recipes/random?number=1`;
  return fetchData(baseUrl);
};

export const getRecipeInfo = async (id: number) => {
  if (!id) throw new Error("No recipe ID was specified.");
  const baseUrl = `https://api.spoonacular.com/recipes/${id}/information`;
  return await fetchData(baseUrl);
};

export const getRecipeInstructions = async (id: number) => {
  if (!id) throw new Error("No recipe ID was specified.");
  const baseUrl = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`;
  return await fetchData(baseUrl);
};
