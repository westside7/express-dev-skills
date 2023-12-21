const Racket = require('../models/racket')


module.exports = {
    index,
    show,
    new: newRacket,
    delete: deleteRacket,
    create,
    edit,
    update,
};

function index(req, res) {
  res.render('rackets/index', {
    rackets: Racket.getAll(),
  });
};

function show(req, res) {
  res.render('rackets/show', {
    racket: racket.getOne(req.params.id),
  });
};

function newRacket(req, res) {
  res.render('rackets/new', { title: 'New Racket'})
};

function deleteRacket(req, res) {
  Racket.delete(req.params.id)
  res.redirect('/')
};

function create(req, res) {
  Racket.create(req.body)
  res.redirect('/')
};

function update(req, res) {
  Racket.update(req.params.id, req.body);
  res.redirect(`/cars/${req.params.id}`);
};

function edit(req, res) {
  const racket = Racket.getOne(req.params.id);
  res.render('rackets/edit', {
    title: 'Edit Rackets',
    racket,
  });
};