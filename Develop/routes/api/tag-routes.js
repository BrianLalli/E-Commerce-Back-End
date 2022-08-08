const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
  // be sure to include its associated Product data
    include: [{
      model: Product, 
      through: ProductTag
    }]
  }).then(results => {
    res.json(results)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
  // be sure to include its associated Product data
    include: [{
      model: Product, 
      through: ProductTag
    }],
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.json(results)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(results => {
    res.json(results)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
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
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.json(results)
  })
});

module.exports = router;
