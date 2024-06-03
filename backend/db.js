const mongoose = require('mongoose');
const mongoURI = // change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority  //--> from mogodb drive
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
 });
        console.log('Connected to MongoDB');

        const fetch_data = mongoose.connection.db.collection("food_items");
        try {
            const data = await fetch_data.find({}).toArray();
            const foodCategory = await mongoose.connection.db.collection("foodCategory")
            const catData = await foodCategory.find({}).toArray();

            global.food_items = data;
            global.foodCategory = catData;
                    
                
            
           //global.food_items = data;

        } catch (err) {
            console.error(err);
        }
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }

      
};

module.exports = connectToMongoDB;

