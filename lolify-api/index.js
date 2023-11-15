const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('sequelize');

// 서버를 초기화하고
// 시작하는 코드를 launchServer 라는 비동기 함수로 감쌌어요.
async function launchServer() {
  const app = express();
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.json({ message: 'hello lolify' });
  });

  try {
    // sequelize 에 정의된 객체 모델을 기준을 실제 데이터베이스와 동기화를 수행해 테이블을 생성 또는 변경하는 역할을 해요.
    await sequelize.sync();
    console.log('Database is ready!');
  } catch {
    console.log('Unable to connect to the databases: ');
    console.log(error);
    process.exit(1);
  }
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`${port} 번 포트에서 대기중`);
  });
}
