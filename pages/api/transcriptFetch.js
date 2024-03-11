import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      console.log("Connected to MongoDB");

      const database = client.db('my-magic-database');
      const collection = database.collection('my-magic-collection');
      
      const chats = await collection.find().toArray();
      console.log("Retrieved chats:", chats);
      
      res.status(200).json(chats);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ message: 'Something went wrong!' });
    } finally {
      await client.close();
      console.log("MongoDB connection closed");
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}
