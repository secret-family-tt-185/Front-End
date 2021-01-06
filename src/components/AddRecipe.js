import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/AxiosWithAuth'

function AddRecipe() {

    const [addRecipe, setAddRecipe] = useState({
        user_id:"",
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    })


    const postRecipe = (add) => {
        axiosWithAuth()
        .post(`/recipes/${addRecipe.user_id}`, add )
        .then(res => {
            console.log("AL: postRecipe: AddRecipe.js: success!", res)
        })
        .catch(err => {
            console.log("Failed to post recipe", err)
        })
    }


    const postSubmit = (e) => {
        e.preventDefault();
        postRecipe(addRecipe)
    }

    const inputChange = (e) => {

        setAddRecipe({
          ...addRecipe,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={postSubmit}>
                <input
                placeholder="Title"
                name="title"
                type="text"
                value={addRecipe.title}
                onChange={inputChange}
                />
                <input
                placeholder="Source"                
                name="source"
                type="text"
                value={addRecipe.source}
                onChange={inputChange}
                />
                <input
                placeholder="Ingredients" 
                name="ingredients"
                type="text"
                value={addRecipe.ingredients}
                onChange={inputChange}
                />
                <input
                placeholder="Instructions"
                name="instructions"
                type="text"
                value={addRecipe.instructions}
                onChange={inputChange}
                />
                <input
                placeholder="Category"
                name="category"
                type="text"
                value={addRecipe.category}
                onChange={inputChange}
                />
                <button>Add Recipe!</button>
            </form>
            
        </div>
    )
}

export default AddRecipe
