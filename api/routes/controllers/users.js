/*  eslint-disable no-restricted-imports */

import express from 'express';
import nodemailer from 'nodemailer';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import User from '../models/User';


const router = express.Router();
const transporter = nodemailer.createTransport({
  auth: {
    pass: 'Paris2018',
    user: 'camagru.rizky@gmail.com',
  },
  service: 'gmail',
});

const mailOptions = {
  from: 'matcha.rizky@gmail.com',
  subject: 'Matcha Account Verification',
};

router.get('/:id?', (req, res) => {
  if (req.params.id) {
    User.findOne(req.params.id, (err, rows) =>
      (err) ? res.json(err) : res.json(rows));
  } else {
    User.findAll(null, null, (err, rows) =>
      (err) ? res.json(err) : res.json(rows));
  }
});

router.post('/', (req, res) => {
  if (req.body.id === undefined) {
    const tokenValidated = Base64.stringify(hmacSHA512(req.body.email, req.body.username));
    User.insert({ ...req.body, tokenValidated }, (err, count) => {
      if (err) {
        res.json(err);
      } else {
        transporter.sendMail({
          ...mailOptions,
          text: `Here is you code verification ${tokenValidated}`,
          to: req.body.email,
        }, (error, info) => {
          if (error) {
            res.json(error);
          } else {
            console.log(info.response);
            res.json(count);
          }
        });
      }
    });
  } else {
    User.update(req.body, (err, count) =>
      (err) ? res.json(err) : res.json(count));
  }
});

router.post('/login/', (req, res) => {
  if (req.body.username && req.body.password) {
    User.findAll({ password: req.body.password, username: req.body.username }, null, (err, rows) => {
      if (err) {
        res.json(err);
      } else if (rows.length === 0) {
        res.json({ code: 'USER_NOT_FOUND' });
      } else {
        const { password, ...user } = rows[0];
        res.json({ user });
      }
    });
  } else {
    res.json({ code: 'INVALID_REQUEST' });
  }
});

router.post('/confirmation/', (req, res) => {
  if (req.body.email && req.body.tokenValidated) {
    User.findAll({ email: req.body.email, tokenValidated: req.body.tokenValidated }, null, (err, rows) => {
      if (err) {
        res.json(err);
      } else if (rows.length === 0) {
        res.json({ code: 'USER_NOT_FOUND' });
      } else {
        const { password, tokenValidated, ...user } = rows[0];
        User.update({ id: user.id, tokenValidated: '' });
        res.json({ user });
      }
    });
  } else {
    res.json({ code: 'INVALID_REQUEST' });
  }
});

export default router;
