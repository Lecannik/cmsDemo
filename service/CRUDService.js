let poolDB = require('./ConnectDBService');
const {Int32, ObjectId, Decimal128, Double} = require('mongodb');
const validator = require('validator');


class CRUDService {

    constructor(objParams) {

        let arrPropsForThisClass = ['login', 'pass'];

            this.objParams = objParams;





    }


    async createOne() {

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

    async getAll(collectionName) {

        try {


            let dbPool = ConnectDB.getDBPool();


            let col = dbPool.collection(collectionName);

            let result = await col.find({}).toArray();

            return result;


        } catch (err) {


            return err;


        }


    }

}

module.exports = CRUDService;