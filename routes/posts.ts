const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');
const cors = require('cors')
// THIS WONT WORK IF YOU VPN IS ON
// Make sure the link is correct


router.get('/', async (req, res) => {
  // Be aware that the posts obejct is inside an array
  try {
    console.log("Trying to get")
    const posts: object = await Post.find().limit()
    console.log("Got it")
    res.json(posts[0])
    // console.log(posts[0])
    // res.send("<html><body><h1>hi</h1></body></html>")
  } catch (err) {
    res.json({ message: err })
  }
});

router.post('/getwithfilter', cors("http://192.168.0.16:5000"), async (req, res) => {
  // Be aware that the posts obejct is inside an array
  try {
    console.log(req.body.filter)
    const filterReceiver: string = req.body.filter.receiver
    const filterSender: string = req.body.filter.sender
    console.log("Trying to get")
    const posts: object[] = await Post.find({
      $or: [
        {
          sender: filterSender,
          receiver: filterReceiver
        },
        {
          sender: "Himynameisjonny",
          receiver: "Someone else"
        }
      ]
    }).limit(20)
    console.log(posts)
    console.log("Got it")
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
});

router.get('/getall', async (req, res) => {
  // Be aware that the posts obejct is inside an array
  try {
    let params = new URLSearchParams("localhost:5000/?id=2");
    const filterReceiver: string = params.get('filterReceiver')
    console.log(filterReceiver)
    console.log("Trying to get")
    const posts: object[] = await Post.find({ sender: "jonny" }).limit(20)
    console.log("Got it")
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
});
// Dont forget sending something back
router.post('/', cors("http://192.168.0.16:5000"), async (req, res) => {
  console.log(typeof req.body)
  console.log(req.body)
  const post = new Post({
    sender: req.body.sender,
    receiver: req.body.receiver,
    textContent: req.body.textContent
  }
  );
  console.log("New")
  console.log(mongoose.connection.readyState)
  console.log(post)
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  }
  catch (err) {
    res.json(err)
  }
});

module.exports = router;
