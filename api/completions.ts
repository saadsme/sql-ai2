
import { Configuration, OpenAIApi } from 'openai';

const API_KEY: string = process.env.API_KEY as string;

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      console.log('creating chat completion');
      console.log("Request is: ",req.body.message);
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
      console.log("Response is: ",completion.data.choices[0].message);
      res.status(200).send(completion.data.choices[0].message);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
