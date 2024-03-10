import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const transcripts = req.body; // Access transcripts directly from req.body
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db('my-magic-database'); // Choose a name for your database
      const collection = database.collection('my-magic-collection'); // Choose a name for your collection
      
      // Insert transcripts directly without nesting
      await collection.insertOne({transcripts});

      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error('Error saving data to MongoDB:', error);
      res.status(500).json({ message: 'Something went wrong!' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}
