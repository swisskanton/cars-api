import DataTypes from "sequelize";
import sequelize from "../util/database.js";

const Wizard = sequelize.define(
	"wizards",
	{
		name: DataTypes.STRING,
		house: DataTypes.STRING,
		boggart: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

try {
	await Wizard.sync({ force: true });
	await Wizard.bulkCreate([
		{ name: "Harry Potter", house: "Gryffindor", boggart: "Dementor" },
		{
			name: "Ronald Bilius Weasley",
			house: "Gryffindor",
			boggart: "a giant spider",
		},
		{
			name: "Hermione Jean Granger",
			house: "Gryffindor",
			boggart: "feel of failure",
		},
		{
			name: "Draco Malfoy",
			house: "Slytherin",
			boggart: "personal failure",
		},
		{
			name: "Cedric Diggory",
			house: "Hufflepuff",
			boggart: "letting others down",
		},
		{
			name: "Luna Lovegood",
			house: "Ravenclaw",
			boggart: "the loss of her friends",
		},
	]);
} catch (error) {
	console.log(error.message);
}

export default Wizard;
