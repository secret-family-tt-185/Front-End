import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";
// need to import add & edit functions later


function Recipes() {
    const [recipes, setRecipes] = useState([])

    const renderRecipes = () => {
        axiosWithAuth()
        .get('fakeurl/recipes') //3. /recipes GET
        .then(res => {
            console.log('AL, renderRecipes: works', res);
            setRecipes(res.data)
        })
        .catch((err) => {
            console.error('Error!!', err )
        })
    };

    useEffect(() => {
        renderRecipes();
    }, [])


    return (
        <div>
            <h2>Title</h2>
            <h3>Source</h3>
            <p>ingredients</p>
            <p>instructions</p>
            <p>category</p>
            <Link to="/add">Add Recipe Here!</Link>
            <Link to="/edit">Edit Recipes Here!</Link>


        </div>
    )
}

export default Recipes

//need to add edit & add functions
