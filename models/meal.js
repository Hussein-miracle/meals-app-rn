class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imgUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegitarian,
    isLactoseFree
  ) {

    this.id =  id;
    this.categoryIds= categoryIds;
    this.title= title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imgUrl = imgUrl,
    this.duration = duration;
    this.steps= steps;
    this.isVegan = isVegan;
    this.ingredients = ingredients;
    this.isVegitarian = isVegitarian;
    this.isGlutenFree = isGlutenFree;
    this.isLactoseFree = isLactoseFree;
  }
}


export default Meal;