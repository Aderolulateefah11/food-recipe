
import { useEffect, useState } from "react"
import styles from "./foodDetails.module.css"
import ItemList from "./ItemList"

export default function FoodDetails({foodId}){
    const[food,setFood]=useState("")
    const [isLoading,getLoading]=useState(true)
    const URL =`https://api.spoonacular.com/recipes/${foodId}/information`
     const API_KEY="1dd2f40f66b643dbb66948882ed81a34"
     useEffect (() =>{
       async function fetchFood(){
            const res = await fetch (`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
           setFood(data)
           getLoading (false)
        }
        fetchFood()
     },[foodId])

     
    return (
        <div>
           <div className={styles.recipeCard}>
         <h1 className={styles.recipeName}> {food.title}</h1> 
           <img className={styles.recipeImage} src={food.image} alt=""/>
           <div className={styles.recipeDetails}>
           
           <span>
           👩‍👧‍👦<strong> Serves {food.servings} </strong>
           </span>
           <span>
           <strong> ⏱{food.readyInMinutes} Minutes</strong>
           </span>
           <span>
           <strong>{food.vegetarian? " 🥕Vegetarian" : " 🍖non-vegetarian"}</strong> 
           </span>
          <span> <strong>{food.vegan ? "🐮 Vegan" : ""}</strong> </span> 
           </div>
           <div> 
           $ {" "}
           <span> 
            
            <strong>{food.pricePerServing / 100} per Serving </strong></span>
           </div>
           </div>
            
          <h2>Ingredients</h2>
          
        <ItemList food={food} isLoading={isLoading}/>
           <h2>Instuctions</h2>
           <div className={styles.recipeInstruction}>
            <ol >
           {isLoading? (
           <p>Loading...</p>
           ) : (
            food.analyzedInstructions[0].steps.map((step) =>  
              <li>{step.step}</li>  ))}
               </ol>
             </div>
            
           </div>
      
       
    )
}