const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');


router.post('/list', async function (req, res){
    var notes = await Note.find({userid: req.body.userid});
    res.json(notes);
});

// app routes add note route
router.post('/add', async function(req, res){
    
   await Note.deleteOne({id: req.body.id});
    
    const newNote = new Note ({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content : req.body.connect,
    });
    await newNote.save();
   
    const response = {
        message : 'New Note Created successfulluy!' +`id: ${req.body.id}` };
    res.json(response);
});
 
router.post('/delete', async function(req, res){
    await Note.deleteOne({id: req.body.id});

      const response = {
        message : 'New Note Deleted successfulluy!' +`id: ${req.body.id}` };
    res.json(response);
      });

      module.exports = router;