import express from 'express';
import path from 'path';
import cors from 'cors';

const __dirname = path.resolve();

const PUBLIC_URL = process.env.PUBLIC_URL || '';
const PORT = process.env.PORT || '3000';

export const app = express();

app.use(express.json());
app.use(cors());

app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, './dist'), {
    maxAge: Infinity
  })
);

app.get('/api/test', (_, res) => {
  console.log('request received at the API/test endpoint');
  res.send('this is great woooop :D');
});

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.listen(PORT, () => {
  console.log(
    '\x1b[34m',
    `${String.fromCodePoint(
      0x1f680
    )} Server has started running at http://localhost:${PORT}/ ${String.fromCodePoint(
      0x1f680
    )}`
  );
});
