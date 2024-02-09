exports.hello = (req, res) => {
  res.json({ message: 'Welcome to REST API application.' })
    .then((tag) => {
      console.log(`Created Tag: ${JSON.stringify(tag, null, 2)}`);
    })
    .catch((err) => {
      console.log('>> Error while creating Tag: ', err);
    });
};
