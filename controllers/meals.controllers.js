import meals from '../db/db';

class MealController {

  getAllMeals(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'meals retrieved successfully',
      data: meals,
    });
  }

  // Get all meal
  getMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    meals.map((meal) => {

      if (meal.id === id) {

        return res.status(200).send({

          success: 'true',

          message: 'meal retrieved successfully',

          meal,

        });

      }

    });
    return res.status(404).send({

      success: 'false',

      message: 'meal does not exist',

    });
  }

  // Post a meal
  createMeal(req, res) {
    if (!req.body.name) {
      return res.status(400).send({
        success: "false",
        message: "name of food is required"
      });
    } else if (!req.body.size) {
      return res.status(400).send({
        success: "false",
        message: "size of food is required"
      });
    } else if (!req.body.price) {
      return res.status(400).send({
        success: "false",
        message: "price of food is required"
      });
    }
    const newMeal = {
      id: meals.length + 1,
      name: req.body.name,
      size: req.body.size,
      price: req.body.price
    }
    meals.push(newMeal);
    return res.status(201).send({
      success: "true",
      message: "meals added successfully",
      newMeal
    });
  }

  // Update meal
  updateMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    let mealFound;
    let itemIndex;

    meals.map((meal, index) => {
      if (meal.id === id) {

        mealFound = meal;

        itemIndex = index;

      }
    });

    if (!mealFound) {

      return res.status(404).send({

        success: 'false',

        message: 'meal not found',
      });
    }

    if (!req.body.name) {
      return res.status(400).send({

        success: 'false',

        message: 'name is required',
      });
    } else if (!req.body.size) {

      return res.status(400).send({

        success: 'false',

        message: 'size is required',

      });
    } else if (!req.body.price) {

      return res.status(400).send({

        success: 'false',

        message: 'price is required',
      });
    }

    const updatedMeal = {
      id: mealFound.id,

      name: req.body.name || mealFound.name,

      size: req.body.size || mealFound.size,

      price: req.body.price || mealFound.price,

    };

    meals.splice(itemIndex, 1, updatedMeal);

    return res.status(201).send({
      success: 'true',
      message: 'meal updated successfully',
      updatedMeal,
    });
  }

  // Delete neal
  deleteMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    let foundMeal;
    let itemIndex;

    meals.map((meal, index) => {
      if (meal.id === id) {
        foundMeal = meal;
        itemIndex = index;
      }
    });

    if (!foundMeal) {
      return res.status(404).send({
        success: 'false',
        message: 'meal not found',
      });
    }
    meals.splice(itemIndex, 1);

    return res.status(200).send({
      success: 'true',
      message: 'meal deleted successfully',
    });

  }
}

const mealController = new MealController();
export default mealController;