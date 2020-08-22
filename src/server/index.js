import express from 'express';
import path from 'path';
import cors from 'cors';

const __dirname = path.resolve();

const PUBLIC_URL = process.env.PUBLIC_URL || '';
const PORT = process.env.PORT || '3000';

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, './dist'), {
    maxAge: Infinity
  })
);

app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, './public'), {
    maxAge: '30 days'
  })
);

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
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

// module.exports = app;

export default app;
