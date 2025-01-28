import Wizard from "../models/wizard.js";

export const getAllWizards = async (req, res) => {
	try {
		const wizards = await Wizard.findAll();
		res.status(200).json(wizards);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getWizardById = async (req, res) => {
	try {
		const wizard = await Wizard.findByPk(req.params.id);
		if (!wizard) {
			return res.status(404).json({ message: "Wizard not found" });
		}
		res.status(200).json(wizard);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const createWizard = async (req, res) => {
	try {
		const { name, house, boggart } = req.body;
		if (!name || !house || !boggart) {
			return res.status(400).json({ message: "Missing data" });
		}
		const wizard = await Wizard.findOne({
			where: { name, house, boggart },
		});
		if (wizard) {
			return res.status(409).json({ message: "Wizard already exists" });
		}
		const newWizard = await Wizard.create({ name, house, boggart });
		if (!newWizard) {
			return res.status(500).json({ message: "Database error" });
		}
		res.status(200).json(newWizard.toJSON());
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateWizard = async (req, res) => {
	try {
		if (req.params.id <= 6) {
			return res.status(405).json({ message: "Protected base data" });
		}
		const wizard = await Wizard.findByPk(req.params.id);
		if (!wizard) {
			return res.status(404).json({ message: "Wizard not found" });
		}
		const { name, house, boggart } = req.body;
		if (!name || !house || !boggart) {
			return res.status(400).json({ message: "Missing data" });
		}
		const updatedWizard = await wizard.update({ name, house, boggart });
		if (!updatedWizard) {
			return res.status(500).json({ message: "Database error" });
		}
		res.status(200).json(updatedWizard.toJSON());
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteWizard = async (req, res) => {
	try {
		if (req.params.id <= 6) {
			return res.status(405).json({ message: "Protected base data" });
		}
		const wizard = await Wizard.findByPk(req.params.id);
		if (!wizard) {
			return res.status(404).json({ message: "Wizard not found" });
		}
		const result = await wizard.destroy();
		if (!result) {
			return res.status(500).json({ message: "Database error" });
		}
		res.status(200).json({ message: "Delete successful" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
