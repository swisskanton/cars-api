import User from "../models/user.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getUserById = async (req, res) => {
	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const createUser = async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		if (!firstName || !lastName || !email || !password) {
			return res.status(400).json({ message: "Missing data" });
		}
		const newUser = await User.create({
			firstName,
			lastName,
			email,
			password: `${await bcrypt.hash(password, 10)}`,
		});
		if (!newUser) {
			return res.status(500).json({ message: "Database error" });
		}
		res.status(201).json(newUser.toJSON());
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateUser = async (req, res) => {
	try {
    if (req.params.id <= 5) {
			return res.status(405).json({ message: "Protected base data" });
		}
		const user = await User.findByPk(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const { firstName, lastName, email, password } = req.body;
		if (!firstName || !lastName || !email || !password) {
			return res.status(400).json({ message: "Missing data" });
		}
		const newUser = await user.update({
			firstName,
			lastName,
			email,
			password: `${await bcrypt.hash(password, 10)}`,
		});
		if (!newUser) {
			return res.status(500).json({ message: "Database error" });
		}
		res.status(200).json(newUser.toJSON());
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteUser = async (req, res) => {
	try {
		if (req.params.id <= 5) {
			return res.status(405).json({ message: "Protected base data" });
		}
		const user = await User.findByPk(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const result = await user.destroy();
		if (!result) {
			return res.status(500).json({ message: "Database error" });
		}
		res.status(200).json({ message: "Delete successful" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
