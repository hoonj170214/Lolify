const { item } = require('../models/item.model');

// getAll 은 데이터베이스 관련 작업을 하는 함수예요.
// ORM에서 제공하는 기능이에요.
// getAll 함수에는 findAll 함수를 사용해요.
async function getAll(req, res) {
  const result = await item.findAll();
  res.status(200).json({ result }); // findAll 작업이 끝나면 200 (성공) 응답을 보내요.
}

// insertOrUpdate함수에에는 count 함수가 들어가요.
async function insertOrUpdate(req, res) {
  const { item } = req.body;

  if (!id) {
    res.status(400).json({ error: 'id is required' });
    return;
  }
  // champion 의 개수를 세요.
  const count = await item.count({ where: id });

  if (count === 0) {
    await item.create(req.body);
  } else {
    await item.update(req.body, { where: id });
  }
  res.status(200).json({ result: 'success' });
}

async function remove(req, res) {
  const { id } = req.body;
  if (!id) {
    res.status(400).json({ error: 'id is required' });
    return;
  }
  // destroy 안에 where 조건을 명시하지 않으면 모든 데이터를 삭제하니까 꼭 where을 적어야 해요.
  await item.destroy({
    where: id,
  });
  res.status(200).json({ result: 'success' });
}

module.exports = {
  getAll,
  insertOrUpdate,
  remove,
};
