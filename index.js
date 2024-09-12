// connect.js

const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB connection string
const uri = 'mongodb://localhost:27017'; // Local MongoDB server
const dbName = 'Event Management'; // Name of the database

async function main() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connected to MongoDB successfully.');

        // Get the database
        const db = client.db(dbName);

        // Perform operations (e.g., listing collections)
        const collections = await db.listCollections().toArray();
        console.log('Collections:', collections);
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);
