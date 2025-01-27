import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";
import bcrypt from "bcrypt";

const User = sequelize.define(
	"users",
	{
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

try {
	await User.sync({ force: true });
	await User.bulkCreate([
		{
			firstName: "Joe",
			lastName: "Dalton",
			email: "joe@daltons.com",
			password: `${await bcrypt.hash("joe", 10)}`,
		},
		{
			firstName: "William",
			lastName: "Dalton",
			email: "william@daltons.com",
			password: `${await bcrypt.hash("william", 10)}`,
		},
		{
			firstName: "Jack",
			lastName: "Dalton",
			email: "jack@daltons.com",
			password: `${await bcrypt.hash("jack", 10)}`,
		},
		{
			firstName: "Averell",
			lastName: "Dalton",
			email: "averell@daltons.com",
			password: `${await bcrypt.hash("averell", 10)}`,
		},
		{
			firstName: "Lucky",
			lastName: "Luke",
			email: "lucky@luke.com",
			password: `${await bcrypt.hash("lucky", 10)}`,
		},
	]);
} catch (error) {
	console.log(error.message);
}

export default User;
