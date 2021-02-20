const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
	Workout.create({}).then(workoutdb => { 
		console.log(workoutdb)
		res.json(workoutdb)
	 }).catch(err => res.json(err))
})

router.put("/api/workouts/:id", (req, res) => {
	Workout.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}, {new:true, runValidators:true})
	.then(workoutdb => res.json(workoutdb)).catch(err => res.json(err))
})
/*
router.get("/api/workouts", async (req, res) => {
	try {
		const workouts = await Workout.aggregate([
			{
				$addFields: {
					totalDuration: {
						$sum: "$exercises.duration",
					},
				},
			},
			{
				$sort: {
					day: 1,
				},
			},
		]).exec();

		res.json(workouts);
	} catch (e) {
		res.status(500).send("Error: ", e.message);
	}
});

router.get("/api/workouts/range", async (req, res) => {
	try {
		const workouts = await Workout.aggregate([
			{
				$addFields: {
					totalDuration: {
						$sum: "$exercises.duration",
					},
				},
			},
			{
				$sort: {
					day: -1,
				},
			},
			{
				$limit: 7,
			},
			{
				$sort: {
					day: 1,
				},
			},
		]).exec();

		res.json(workouts);
	} catch (e) {
		res.status(500).send("Error: ", e.message);
	}
});

router.post("/api/workouts", async (req, res) => {
	try {
		const workout = await Workout.create(req.body);

		res.json(workout);
	} catch (e) {
		res.status(500).send("Error: ", e.message);
	}
});

router.put("/api/workouts/:id", async (req, res) => {
	try {
		const id = req.params.id;

		const workout = await Workout.findByIdAndUpdate(id, {
			$push: { exercises: req.body },
		});

		res.json(workout);
	} catch (e) {
		res.status(500).send("Error: ", e.message);
	}
});
*/


module.exports = router;