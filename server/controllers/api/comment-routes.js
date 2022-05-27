const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll()
    .then(db => res.json(db))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  if (req.session.loggedIn) {
    Comment.create()
      .then((db) => res.json(db))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(db => {
      if (!db) {
        res.status(404).json({ message: 'No comment found with id!' });
        return;
      }
      res.json(db);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;