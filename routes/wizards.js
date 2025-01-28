import express from "express";
import * as wizardsControls from "../controls/wizardsControls.js";

const router = express.Router();

router.get("/", wizardsControls.getAllWizards);

router.get("/:id", wizardsControls.getWizardById);

router.post("/", wizardsControls.createWizard);

router.put("/:id", wizardsControls.updateWizard);

router.delete("/:id", wizardsControls.deleteWizard);

export default router;
