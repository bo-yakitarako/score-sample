import express from 'express';
import { Data } from './entity/Data';
import { find, save } from './utility';

const app = express();

const PUBLIC_ROOT = `${__dirname}/../../public`;

app.use(express.static(PUBLIC_ROOT));

app.get('/', (req, res) => {
  res.sendFile(`${PUBLIC_ROOT}/index.html`);
});

app.get('/api/data', async (req, res) => {
  const datas = await find(Data, { order: { dataId: 'DESC' } });
  res.send(datas);
});

type PostData = {
  userNameText: string;
  scoreText: string;
};

app.get<PostData>('/api/post/data', async (req, res) => {
  const { userNameText, scoreText } = req.query;
  const userName = userNameText as string;
  const score = parseInt(scoreText as string, 10);
  await save(Data, { userName, score });
  res.send({ isOk: true });
});

app.listen(8080, () => {
  console.log('8080をlistenします！');
});
