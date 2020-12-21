import React from 'react'
import axiosWithAuth from '../utils/AxiosWithAuth'


function EditRecipes() {


    const [editRecipe, setEditRecipe] = useState({
        user_id:"",
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: ""
    })

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


export default EditRecipes
