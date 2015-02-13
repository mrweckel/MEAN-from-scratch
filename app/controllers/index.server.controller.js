exports.render = function(req, res) {
  res.render('index',{
    title: 'MEAN from Scratch',
    user: req.user ? req.user.username : ''
  });
};

