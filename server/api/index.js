'use strict';
const express = require('express');
const router = express.Router();
const Note = require("../model/note");

router.get('/notes', (req, res, next) => {
  let note = new Note(req.db);
  note.getNotes().then((note) => res.send(note));
});

router.post('/addNote', (req, res, next) => {
  if (!req.body.text) {
    res.send({error: true, text: 'No text field'});
    return;
  }
  if (!req.body.date || !(typeof req.body.date.getMonth === 'function')) {
    req.body.date = new Date();
  }
  let note = new Note(req.db);
  note.addNote(req.body).then((r) => res.send(r));
});

router.post('/deleteNote', (req, res, next) => {
  let note = new Note(req.db);
  note.deleteNote(req.body).then(() => res.send({"delete": true}));
});

module.exports = router;