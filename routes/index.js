var express = require('express');
const member = require('../models/member');
var router = express.Router();
var Member = require('../models/member')
var Priority = require('../models/priority')

/* GET home page. */




router.post("/member", async (request, response) => {
  console.log(request.body);
  const member = new Member(request.body);

  try {
    await member.save();
    response.json(member);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.get("/member", async (request, response) => {
  //const member = await Member.find({});
  const member = await Member.find({})
  .populate('priority')

  try {
    response.send(member);
  } catch (error) {
    response.status(500).send(error);
  }
});


router.get("/priority", async (request, response) => {
  const priority = await Priority.find({});

  try {
    response.send(priority);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/member/:id", async (request, response) => {

  try {
   const res= await Member.findByIdAndUpdate(request.params.id, request.body);
    response.send(res);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/getMember", async (request, response) => {
  const member = await Member.find({})
  try {
    response.send(member);
  } catch (error) {
    response.status(500).send(error);
  }
});




module.exports = router;
