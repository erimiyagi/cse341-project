//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/ta02.ejs', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });


const users = ['user1', 'User2', 'User3'];

router.get('/',(req, res, next) =>{
    res.render('page/ta02', {

    });
});

router.post('/addUser', (req, res, next) => {
    const username = req.body.username;
    users.push(username);
    res.statusCode = 302;
    res.setHeader('Location', '/ta02');
    res.redirect('/ta02/');
});

router.delete('/removeUser', (req, res, next) => {
    const username = req.body.username;

    users.splice(users.indexOf(username), [1]);
    users = users.filter(e => e !== username);

    res.statusCode = 302;
    res.setHeader('Location', '/ta02');
    res.redirect('/ta02/');

});

});

module.exports = router;




module.exports = router;


