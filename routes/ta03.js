//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

//const reqest = require('request');
//let url = "https://byui-cse.github.io/cse341-course/lesson03/items.json"

const Item = require('../public/json/items.json'); 

router.get('/',(req, res, next) => {

    const items = [
        {
            "tags": [
              "Trees"
            ],
            "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/1.jpg",
            "price": 10.99,
            "name": "Handcrafted Trees Tech",
            "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur"
          }
    ]
    
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        items: items
    });
});

module.exports = router;