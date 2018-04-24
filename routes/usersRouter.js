let express = require('express');
let router = express.Router();
let connect = require("../service/ConnectDBService");
let CRUDService = require("../service/CRUDService");

// TODO Вселенная Стивена Хоккинга
// TODO книга Генри


/* GET users listing. */
router.post('/createpost', function(req, res, next) {

         console.log("\x1b[42m", "Testing API 'createpost' req " + req.body);
         console.log("\x1b[42m", "Testing API 'createpost' res " + res.body);
    try {




        let result = new CRUDService({postName: "test name for post", postText: "test description for post"});
        result.createPost();

        res.json({"code": 0, "resultFromDb": result});


    }
    catch (err) {

        res.json({"code": 0, "resultFromDb": err});

    }
});


router.get('/getall', async(req, res, next) =>{

    try {

        let CRUD = new CRUDService({});
        let result  = await CRUD.getAllCollection("users");
        console.log("\x1b[42m",result);
        res.json({"code": 0, "resultFromDb": result});


    }
    catch (err) {

        console.log("\x1b[42m",err);

        res.json({"code": 1, "resultErrorFromDb": err});

    }

    }
);



router.post('/updatepost', async(req, res, next) =>{

    try{
        let result  = new CRUDService({postId: "5adf07be187b011528bf8f78"});
        result.updateOne();

        res.json({"code": 0});
    }
    catch (err) {
        res.json({"code": 1});
    }

});

module.exports = router;
