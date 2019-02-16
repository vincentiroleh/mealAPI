// imported express and our dummy database
import express from 'express';

// Import mealsController
import mealController from '../controllers/meals.controllers';

// Initialized express router
const router = express.Router();


// TODO: OUR ENDPOINTS

// Default URL message
router.get("/", mealController.defaultURL);

// get all meals
router.get("/api/v1/meals", mealController.getAllMeals);

// Get a single meal
router.get('/api/v1/meals/:id', mealController.getMeal);

// post a meal
router.post("/api/v1/meals", mealController.createMeal);

// Update a meal
router.put('/api/v1/meals/:id', mealController.updateMeal);

// Delete a single meal
router.delete('/api/v1/meals/:id', mealController.deleteMeal);


// TODO: Endpoints ends here

// Export router
export default router;