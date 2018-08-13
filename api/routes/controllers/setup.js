/*  eslint-disable no-restricted-imports */
/*  eslint-disable no-magic-numbers */

import express from 'express';
import { User, Message, Thread } from '../models';

const router = express.Router();

router.get('/', async (req, res) => {
  await User.truncate();
  await Thread.truncate();
  await Message.truncate();

  let user = {
    dob: '1989-05-30',
    email: 'sawyer@gmail.com',
    lat: 46.528999,
    long: 6.5,
    name: 'Virgil Sawyer',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg',
    username: 'admin',
  };
  await User.insert(user);
  user = {
    dob: '1990-05-30',
    email: 'esparrow@gmail.com',
    lat: 46.52899,
    long: 6.562,
    name: 'Elliot Sparrow',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg',
    username: 'esparrow',
  };
  await User.insert(user);
  user = {
    dob: '1994-05-30 ',
    email: 'bjerry@gmail.com ',
    lat: 46.528,
    long: 6.5626,
    name: 'Buck Jerry ',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg ',
    username: 'bjerry ',
  };
  await User.insert(user);
  user = {
    dob: '1994-05-30 ',
    email: 'eruss@gmail.com ',
    lat: 46.528,
    long: 6.5626,
    name: 'Eustace Russ ',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg ',
    username: 'eruss ',
  };
  await User.insert(user);
  user = {
    dob: '1992-05-30 ',
    email: 'cmartin@gmail.com ',
    lat: 46.528,
    long: 6.5626,
    name: 'Connor Martin ',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg ',
    username: 'cmartin ',
  };
  await User.insert(user);
  user = {
    dob: '1995-05-30 ',
    email: 'kherb@gmail.com ',
    lat: 46.528,
    long: 6.5626,
    name: 'Kristopher Herb ',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg ',
    username: 'kherb ',
  };
  await User.insert(user);
  user = {
    dob: '1995-05-30 ',
    email: 'sedgar@gmail.com ',
    lat: 46.528,
    long: 6.5626,
    name: 'Stacy Edgar ',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg ',
    username: 'sedgar ',
  };
  await User.insert(user);
  user = {
    dob: '1995-05-30 ',
    email: 'brian@gmail.com ',
    lat: 46.528,
    long: 6.5626,
    name: 'Bazza Rian ',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg ',
    username: 'brian ',
  };
  await User.insert(user);
  user = {
    dob: '1995-05-30 ',
    email: 'jisiah@gmail.com ',
    lat: 46.528,
    long: 6.5626,
    name: 'Jerald Isiah ',
    password: '7Scc9aFsz8VAesq63cLMSIOJvqsO66N4aEnW4uQTvcuMULISPbAxm67LComY8edI7lscrw2IoNGdUjgnYpsnZQ==',
    picture: '/img/profiles/no-pic.jpg ',
    username: 'jisiah ',
  };
  await User.insert(user);

  // Insert Match and Message

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let thread = { user1: 1, user2: 2 };
  thread = await Thread.match(thread);
  thread = { user1: 2, user2: 1 };
  thread = await Thread.match(thread);
  await sleep(1000);

  let message = {
    from: thread.user1,
    message: 'Hello',
    thread: thread.id,
    to: thread.user2,
  };
  await Message.insert(message);
  await sleep(1000);

  message = {
    from: thread.user2,
    message: 'Hi There',
    thread: thread.id,
    to: thread.user1,
  };
  await Message.insert(message);
  await sleep(1000);

  thread = { user1: 1, user2: 3 };
  thread = await Thread.match(thread);
  thread = { user1: 3, user2: 1 };
  thread = await Thread.match(thread);
  await sleep(1000);

  message = {
    from: thread.user1,
    message: 'Hello',
    thread: thread.id,
    to: thread.user2,
  };
  await Message.insert(message);
  await sleep(1000);

  message = {
    from: thread.user2,
    message: 'Hello! How are you',
    thread: thread.id,
    to: thread.user1,
  };
  await Message.insert(message);
  await sleep(1000);

  thread = { user1: 1, user2: 4 };
  thread = await Thread.match(thread);
  thread = { user1: 4, user2: 1 };
  thread = await Thread.match(thread);
  await sleep(1000);

  message = {
    from: thread.user1,
    message: 'Hello',
    thread: thread.id,
    to: thread.user2,
  };
  await Message.insert(message);
  await sleep(1000);

  message = {
    from: thread.user2,
    message: 'Hi! Nice to meet you',
    thread: thread.id,
    to: thread.user1,
  };
  await Message.insert(message);
  await sleep(1000);

  thread = { user1: 1, user2: 5 };
  thread = await Thread.match(thread);
  thread = { user1: 5, user2: 1 };
  thread = await Thread.match(thread);
  await sleep(1000);

  message = {
    from: thread.user1,
    message: 'Hello',
    thread: thread.id,
    to: thread.user2,
  };
  await Message.insert(message);
  await sleep(1000);

  message = {
    from: thread.user2,
    message: 'Bonjour!',
    thread: thread.id,
    to: thread.user1,
  };
  await Message.insert(message);
  await sleep(1000);

  thread = { user1: 1, user2: 6 };
  thread = await Thread.match(thread);
  thread = { user1: 6, user2: 1 };
  thread = await Thread.match(thread);
  thread = { user1: 1, user2: 7 };
  thread = await Thread.match(thread);
  thread = { user1: 7, user2: 1 };
  thread = await Thread.match(thread);
  thread = { user1: 1, user2: 8 };
  thread = await Thread.match(thread);
  thread = { user1: 8, user2: 1 };
  thread = await Thread.match(thread);
  thread = { user1: 1, user2: 9 };
  thread = await Thread.match(thread);
  thread = { user1: 9, user2: 1 };
  thread = await Thread.match(thread);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Done\n');
});

export default router;
