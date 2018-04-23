const {MongoClient, Logger } = require('mongodb');
Logger.setLevel(process.env.LEVEL_DB_LOG);


let state = {
    db: null
};


module.exports = {


    connect: async () => {


        try {


            let client = await MongoClient.connect(process.env.DB_HOST);

            state.db = client.db(process.env.DB_NAME);






        } catch (err) {



            state.db = err;


        }


    },


    getConnect: () => {


        console.log("\x1b[42m", state.db);
        return state.db;


    }


};