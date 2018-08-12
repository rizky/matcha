/*  eslint-disable no-restricted-imports */

import express from 'express';
import Message from '../models/Message';

const router = express.Router();

router.get('/:id?', (req, res) => {
  if (req.params.id) {
    Message.find({ id: req.params.id }, null, (err, rows) =>
      (err) ? res.json(err) : res.json(rows));
  } else {
    Message.findAll(null, null, (err, rows) =>
      (err) ? res.json(err) : res.json(rows));
  }
});

router.get('/thread/:thread', (req, res) => {
  Message.find({ thread: req.params.thread }, null, (err, rows) =>
    (err) ? res.json(err) : res.json(rows));
});

router.get('/to/:to', (req, res) => {
  Message.find({ to: req.params.to }, ['createdAt', 'DESC'], (err, rows) =>
    (err) ? res.json(err) : res.json(rows));
});

router.post('/', (req, res) => {
  if (req.body.id === undefined) {
    Message.insert(req.body, (err, count) =>
      (err) ? res.json(err) : res.json(count));
  } else {
    Message.update(req.body, (err, count) =>
      (err) ? res.json(err) : res.json(count));
  }
});

export default router;
