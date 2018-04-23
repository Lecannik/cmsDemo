let express = require('express');
let router = express.Router();
let connect = require("../service/ConnectDBService");


/* GET users listing. */
router.post('/users', function(req, res, next) {
    console.log("\x1b[42m", "tetstsetsdfgesfsgsdggergfgs" + req.body);
    return req.body;

});


router.get('/getall', async(req, res, next) =>{

    console.log("\x1b[42m", req.body);
    let CRUDService = require("../service/CRUDService");
    let result  = await CRUDService.getAll("users");

    res.json({"code": 0, "resultFromDb": result});

    }
);


module.exports = router;
