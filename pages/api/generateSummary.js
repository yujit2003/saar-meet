import { exec } from 'child_process';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { roomId } = req.body; // Extract roomId from request body
            const pythonPromise = new Promise((resolve, reject) => {
                exec(`python3 summaryGenerator.py "${roomId}"`, (err, stdout, stderr) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }

                    resolve(stdout);
                });
            });

            const output = await pythonPromise;
            res.status(200).json({ output });
        } catch (error) {
            console.error("API encountered an error:", error);
            res.status(500).json({ message: 'Something went wrong!' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed!' });
    }
}
