module.exports = (app) => {
  const tag = require('../controller/tag_controller.js');
  const router = require('express').Router();

  router.post('/', tag.create);
  router.get('/', tag.findAll);
  router.get('/:id', tag.findByPk);
  // router.put('/:id', tag.update);
  // router.delete('/:id', tag.delete);
  // router.delete('/', tag.deleteAll);

  app.use('/tag', router);
};
