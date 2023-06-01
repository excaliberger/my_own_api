import express from "express";
import recipe from "../../controllers/recipe.controller.js"

const router = express.Router();

// placeholder code
router.get("/:id?", async (req, res, next) => {
  console.log("get works")
  
  let { id } = req.params;
  let data;

  if (id) {
    data = await recipe.findOne(id);
  } else {
    data = await recipe.findAll();
  }
  res.json(data);
});

router.post("/", async (req, res, next) => {
  let body = req.body;
  let data = await recipe.addOne(body);
  res.json({"message": "successfully inserted one value"});
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let body = req.body;
  let data = await recipe.updateOne(id, body);
  res.json({"message": "entry sucessfully updated"});
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await recipe.removeOne(id);
  res.json({"message": "entry now deleted"});
});

export default router;
