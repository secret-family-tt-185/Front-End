import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {axiosWithAuth} from "../utils/AxiosWithAuth";
import SearchBar from './SearchBar';
// need to import add & edit functions later


function Recipes() {
    const [input, setInput] = useState('')
    const [recipes, setRecipes] = useState([])
    console.log(recipes)


    const renderRecipes = () => {
        axiosWithAuth()
        .get('/recipes') //3. /recipes GET
        .then(res => {
            console.log('AL, renderRecipes: works', res);
            setRecipes(res.data)
        })
        .catch((err) => {
            console.error('Error!!', err )
        })
    };

    const searchRecipes = async (input) => {
        const filtered = recipes.filter(item => {
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setRecipes(filtered)
    }

    useEffect(() => {
        renderRecipes();
    }, [])


    return (
        <div>
        <SearchBar
        input={input}
        onChange={searchRecipes}
        />
        <div className="recipes">

            <h2 className="card-style">Grilled Cheese</h2>
            <h3 className="card-style">Grandma</h3>
            <p className="instructions">Instructions: Spread 1/2 tablespoon of butter on one side of each piece of bread. Lie the slices of Cheddar on one of the slices of bread on the unbuttered side.Sandwich the two slices of bread together with the buttered sides facing outwards.Heat a skillet over medium heat. When skillet is hot, gently lie the sandwich in the skillet; cook on each side for 3 minutes until cheese has melted.</p>
        </div>

        <div>
            {recipes.length ? recipes.map(item => {
                return(
                    <div key={item.id}>
                        <h2>{recipes.title}</h2>
                        <h3>{recipes.source}</h3>
                        <p>Instructions: {recipes.instructions}</p>
                        </div>
                )
            }) :null}
        </div>

        <div className="recipe-page-buttons">
            <Link  to="/add">Add Recipe Here!</Link>
            <Link to="/edit">Edit Recipes Here!</Link>
       
        </div>
        </div>
    )
}

export default Recipes

//need to add edit & add functions

// {id: 1,
//     title: 'Grilled Cheese',
//     source: 'Grandma',
//     instructions: 'Spread 1/2 tablespoon of butter on one side of each piece of bread. Lie the slices of Cheddar on one of the slices of bread on the unbuttered side.Sandwich the two slices of bread together with the buttered sides facing outwards.Heat a skillet over medium heat. When skillet is hot, gently lie the sandwich in the skillet; cook on each side for 3 minutes until cheese has melted.',
//     category_id: 1,
//     ingredient_id: (1,2,3),}

