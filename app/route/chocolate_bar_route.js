module.exports = (app) => {
  const chocolateBar = require('../controller/chocolate_bar_controller.js');
  const router = require('express').Router();

  router.post('/', chocolateBar.create);
  router.get('/', chocolateBar.findAll);
  router.get('/:id', chocolateBar.findByPk);
  router.get('/:chocolate_bar_id/ :tag_id', chocolateBar.addTag);
  // router.put('/:id', chocolateBar.update);
  // router.delete('/:id', chocolateBar.delete);
  // router.delete('/', chocolateBar.deleteAll);

  app.use('/chocolate_bar', router);
};
