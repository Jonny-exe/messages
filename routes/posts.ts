const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');
// THIS WONT WORK IF YOU VPN IS ON
// Make sure the link is correct
class Create {
  constructor () {
    this.create_span();
  }
  create_span() {
    var span = document.createElement('span');
    span.innerHTML = "Comment"
  }
}
var element = new Create
element.create_span()

router.get('/', async (req, res) => {
  // Be aware that the posts obejct is inside an array
  try {
    console.log("Trying to get")
    const posts: object = await Post.find()
    const post: string = posts[0].title
    res.sendFile(__dirname + '/index.html');
    // console.log(posts[0])
    // res.send("<html><body><h1>hi</h1></body></html>")
  } catch (err) {
    res.json({message: err})
  }
});


// Dont forget sending something back
router.post('/', async (req, res) => {
  console.log(req.body)
  const post = new Post({
    title: req.body.title,
    description: req.body.description
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
