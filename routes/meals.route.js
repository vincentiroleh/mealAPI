// imported express and our dummy database
import express from 'express';

// Import mealsController
import mealController from '../controllers/meals.controllers';

// Initialized express router
const router = express.Router();


// TODO: OUR ENDPOINTS

// get all meals
router.get("/", mealController.getAllMeals);

// Get a single meal
router.get('/:id', mealController.getMeal);

// post a meal
router.post('/', mealController.createMeal);

// Update a meal
router.put('/:id', mealController.updateMeal);

// Delete a single meal
router.delete('/:id', mealController.deleteMeal);


// TODO: Endpoints ends here

// Export router
export default router;