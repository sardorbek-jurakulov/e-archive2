const app = require('express')();

app.get('/', (req, res, next) => {
  res.json({
    status: 200,
    data: 'Hello world from e-archive2'
  });
});

app.listen(3001, () => {
  console.log('Server is running on 3001 port');
});