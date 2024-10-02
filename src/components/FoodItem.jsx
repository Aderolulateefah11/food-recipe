import styles from "./fooditem.module.css"
export default function FoodItem({food ,setFoodId}){
    return (
    <div className={styles.itemcontainer}>
        <img  className={styles.itemimage} src={food.image} alt=""/>
        <div className={styles.itemcontent}>
            <p className={styles.itemName}>{food.title}</p>
        </div>

        <div className={styles.buttonContainer}>
        <button onClick={() =>{console.log(food.id)
            setFoodId(food.id)
        }} className={styles.itembutton}>view recipe</button>
        </div>
         
    </div>
)}