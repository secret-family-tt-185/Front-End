import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/AxiosWithAuth'


function EditRecipes(props) {


    const [editRecipe, setEditRecipe] = useState({
        id:"",
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    })


    const putRecipe = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/recipes/${editRecipe.id}`, editRecipe )
        .then((res) => {
            console.log("Put works", res)
            setEditRecipe(res.data)
            props.renderRecipes()

        })
        .catch(err => {
            console.error("Put fails!", err)
            
        })
    }


    const deleteRecipe = (e) => {
        axiosWithAuth()
        .delete(`/recipes/${editRecipe.id}`)
        .then((res) => {
            setEditRecipe(res.data)
            props.renderRecipes()
        })
        .catch(err => {
            console.error("Delete fails!", err)
        })
    }


    const inputChange = (e) => {

        setEditRecipe({
          ...editRecipe,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={putRecipe}>
                <input
                placeholder="Title"
                name="title"
                type="text"
                value={editRecipe.title}
                onChange={inputChange}
                />
                <input
                placeholder="Source"                
                name="source"
                type="text"
                value={editRecipe.source}
                onChange={inputChange}
                />
                <input
                placeholder="Ingredients" 
                name="ingredients"
                type="text"
                value={editRecipe.ingredients}
                onChange={inputChange}
                />
                <input
                placeholder="Instructions"
                name="instructions"
                type="text"
                value={editRecipe.instructions}
                onChange={inputChange}
                />
                <input
                placeholder="Category"
                name="category"
                type="text"
                value={editRecipe.category}
                onChange={inputChange}
                />
                <button>Edit Recipe!</button>
            </form>
            <button className="delete-button" onClick={() => deleteRecipe()}>Delete Recipe!</button>
            
        </div>
    )
}


export default EditRecipes


// 1.. /auth/login POST
// 2. /auth/register/POST
// 3. /recipes GET
// 4. /recipes POST
// 5. /recipes/:id GET
// 6. /recipes/:id PUT
// 7. /recipes/:id DELETE