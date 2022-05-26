const router = require("express").Router();
const { } = require("../../models");

// The `/api/products` endpoint

// get all Catelog
router.get("/", (req, res) => {
  // find all Catelog
  Catelog.findAll({})
    .then((db) => {
      res.json(db);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// create new Catelog
router.post("/", (req, res) => {
  
    Catelog.create(req.body)
    .then(() => {

      // if no Catelog just respond
      res.status(200).json();
    })
    .then(() => res.status(200).json())
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update Catelog 
router.put('/:id', (req, res) => {
  // update Catelog data
  Catelog.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.json())
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one Catelog by its `id` value
  Catelog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((db) => {
      if (!db) {
        res.status(404).json({ message: "No catelog found with this id!" });
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