const router = require("express").Router();
const { } = require("../../models");
 
router.get("/:id", (req, res) => {
  // find one orders by its `id` value
  Order.findOne({
    where: {
      id: req.params.id,
    },
    include: [
     
    ],
  }).then((db) => {
    if (!db) {
      res.status(404).json({ message: "No order with this id!" });
      return;
    }
    res.json(db);
  });
});

router.post("/", (req, res) => {
  // create a new category
  Order.create({
    
  })
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Order.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((db) => {
      if (!db) {
        res.status(404).json({ message: "No category found with this id!" });
        return;
      }
      res.json(db);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Order.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((db) => {
      if (!db) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      res.json(db);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;