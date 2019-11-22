const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let ans = "";
  recipes.map(recipe => {
    if (
      (bakeryA.includes(recipe.ingredients[0]) &&
        bakeryB.includes(recipe.ingredients[1])) ||
      (bakeryA.includes(recipe.ingredients[1]) &&
        bakeryB.includes(recipe.ingredients[0]))
    ) {
      ans = recipe.name;
    }
  });
  return ans;
};
