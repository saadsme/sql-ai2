
import { Configuration, OpenAIApi } from 'openai';

const API_KEY: string = process.env.API_KEY as string;

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: 'Return ONLY SQL for ' + req.body.message,
          },
        ],
      });
      console.log(completion);
      res.status(200).json(completion.data.choices[0].message);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
