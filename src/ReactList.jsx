export  function ReactList() {


     const recipes = [{
        id: 'greek-salad',
        name: 'Greek Salad',
        ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
    }, {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
    }, {
        id: 'hummus',
        name: 'Hummus',
        ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
    }];

    // listg of recipe

  return  ( recipes.map(recipes =>
    <div key={recipes.id}>
        <ol>
            {recipes.name}
            {recipes.ingredients.map(
                ingredients =>
                   <li key={ingredients}>

                       {ingredients}
                   </li>
            )}

        </ol>
    </div>)


    )
}