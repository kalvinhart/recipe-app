const fetchData = async (url: string) => {
  if (!url) throw new Error("Please provide a URL to fetch data from.");

  const apiURL = `${url}&apiKey=${process.env.REACT_APP_API_KEY}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getRandomRecipe = () => {
  const baseUrl = `https://api.spoonacular.com/recipes/random?number=4`;
  return fetchData(baseUrl);
};

export const getRecipeInfo = (id: string) => {
  if (!id) return;
  const baseUrl = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true`;
  return fetchData(baseUrl);
};

export const searchForRecipe = (term: string) => {
  if (term === "") return;
  const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=5&addRecipeInformation=true`;
  return fetchData(baseUrl);
};
