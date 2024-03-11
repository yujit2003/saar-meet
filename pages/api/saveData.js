import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { transcripts, roomId } = req.body; // Access transcripts directly from req.body
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db('my-magic-database'); // Choose a name for your database
      const collection = database.collection('my-magic-collection'); // Choose a name for your collection
      
      // Push the transcripts object into the 'transcripts' array field within the document with the specified roomId
      if(collection){

        await collection.updateOne(
          { roomId },
          { $push: { transcripts: transcripts } },
          { upsert: true } // Create a new document if it doesn't exist
          );
        }else{
          await collection.insertOne({ roomId, transcripts });
          res.status(201).json({ message: 'Data saved successfully!' });
        }

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
