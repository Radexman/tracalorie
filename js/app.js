class CalorieTracker {
	constructor() {
		this._calorieLimit = 2000;
		this._totalCalories = 0;
		this._meals = [];
		this._workouts = [];

		this._displayCaloriesLimit();
		this._displayCaloriesTotal();
		this._displayCaloriesConsumed();
		this._displayCaloriesBurned();
		this._displayCaloriesRemaining();
	}

	// Public Methods
	addMeal(meal) {
		this._meals.push(meal);
		this._totalCalories += meal.calories;
		this._render();
	}

	addWorkout(workout) {
		this._workouts.push(workout);
		this._totalCalories -= workout.calories;
		this._render();
	}

	// Private Methods
	_displayCaloriesTotal() {
		const totalCaloriesEl = document.getElementById('calories-total');
		totalCaloriesEl.textContent = this._totalCalories;
	}
	_displayCaloriesLimit() {
		const calorieLimitEl = document.getElementById('calories-limit');
		calorieLimitEl.textContent = this._calorieLimit;
	}

	_displayCaloriesConsumed() {
		const caloriesConsumedEl = document.getElementById('calories-consumed');
		const consumed = this._meals.reduce((acc, meal) => acc + meal.calories, 0);
		caloriesConsumedEl.textContent = consumed;
	}

	_displayCaloriesBurned() {
		const caloriesBurnedEl = document.getElementById('calories-burned');
		const burned = this._workouts.reduce((acc, workout) => acc + workout.calories, 0);
		caloriesBurnedEl.textContent = burned;
	}

	_displayCaloriesRemaining() {
		const caloriesRemainingEl = document.getElementById('calories-remaining');
		const remaining = this._calorieLimit - this._totalCalories;
		caloriesRemainingEl.textContent = remaining;
	}

	_render() {
		this._displayCaloriesTotal();
		this._displayCaloriesConsumed();
		this._displayCaloriesBurned();
		this._displayCaloriesRemaining();
	}
}

class Meal {
	constructor(name, calories) {
		this.id = Math.random().toString(16).slice(2);
		this.name = name;
		this.calories = calories;
	}
}

class Workout {
	constructor(name, calories) {
		this.id = Math.random().toString(16).slice(2);
		this.name = name;
		this.calories = calories;
	}
}

const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfase', 400);
tracker.addMeal(breakfast);

const lunch = new Meal('Lunch', 720);
tracker.addMeal(lunch);

const dinner = new Meal('Dinner', 1200);
tracker.addMeal(dinner);

const run = new Workout('Run', 320);
tracker.addWorkout(run);
