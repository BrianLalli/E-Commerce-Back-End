const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
  // be sure to include its associated Products
    include: [Product]
  }).then(results => {
    res.json(results)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
  // be sure to include its associated Products
      include: [Product],
      where: {
        id: req.params.id
      }
    }).then(results => {
      res.json(results)
    })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(results => {
    res.json(results)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  },{
    new: true
  }).then(results => {
    res.json(results)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(results => {
      res.json(results)
    })
    // .catch(err => {
    //   console.log(err)
    // });
    // res.status(500).json(err);
});

module.exports = router;
