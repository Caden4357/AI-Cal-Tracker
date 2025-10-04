import { Alert } from "react-native"
import MealItem from "./MealItem"

export default function FoodIntake() {
    const handleAddMeal = (mealType: string) => {
        Alert.alert(`Adding ${mealType}`)
        // Add your logic here for adding meals
    }

    return (    
        <>
            <MealItem 
                iconName="bread-slice" 
                mealName="Breakfast" 
                onAddPress={() => handleAddMeal("breakfast")} 
            />
            <MealItem 
                iconName="food-fork-drink" 
                mealName="Lunch" 
                onAddPress={() => handleAddMeal("lunch")} 
            />
            <MealItem 
                iconName="food-drumstick" 
                mealName="Dinner" 
                onAddPress={() => handleAddMeal("dinner")} 
            />
            <MealItem 
                iconName="food-apple" 
                mealName="Snack" 
                onAddPress={() => handleAddMeal("snack")} 
            />
        </>
    )
};