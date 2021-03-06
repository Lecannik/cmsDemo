let poolDB = require('./ConnectDBService');
const {Int32, ObjectId, Decimal128, Double} = require('mongodb');
const validator = require('validator');


class CRUDService {

    constructor(objParams) {

        let arrPropsForThisClass = ['login', 'pass', 'postName', 'postText', 'postId', 'colName'];

            this.objParams = objParams;


    }


    async createPost(){

        let formattedDate = new Date( new Date().getTime() - ( new Date().getTimezoneOffset() * 60000 ) );

        console.log("\x1b[42m",formattedDate);

        let dbPool = poolDB.getConnect();
        let collectionPost = dbPool.collection("posts");

        let result = await collectionPost.insertOne({
            postName: this.objParams.postName,
            postText: this.objParams.postText,
            postDate: formattedDate
        });


    }

    async createOneUser() {

        try {


            let dbPool = poolDB.getConnect();



            let col = dbPool.collection("users");
            col.createIndex({ login : 1 }, {unique: true});

            let result = await col.insertOne({

                login: this.objParams.login,
                pass: this.objParams.pass


            });

            return result;







        } catch (err){


            return err;


        }


    }

    async getAllCollection() {

        try {


            let dbPool = poolDB.getConnect();



            let col = dbPool.collection(this.objParams.colName);

            let result = await col.find({}).toArray();

            return result;


        } catch (err) {


            return err;


        }


    }


    async findOne(){

    }

    async updateOne(){


        let dbPool = poolDB.getConnect();

        let lastValue = {postName: "test name for post"};



        let newvalues = {$set: {postName: "Canyon 123"} };
        dbPool.collection("posts").updateOne(lastValue, newvalues, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");

        });



    }


}

module.exports = CRUDService;