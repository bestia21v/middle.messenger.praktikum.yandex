import { HTTPRequests } from './HTTPRequests';

const posts = new HTTPRequests('/posts', 'https://jsonplaceholder.typicode.com');

test('Http транспорт должен отправлять get запрос', async () => {
  const res: any = await posts.get('/1');
  expect(res.status).toEqual(200);
  expect(res.response).toHaveProperty('id', 1);
});

test('Http транспорт должен отправлять post запрос', async () => {
  const res: any = await posts.post('', {
    data: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  expect(res.status).toEqual(201);
  expect(res.response).toHaveProperty('title', 'foo');
  expect(res.response).toHaveProperty('body', 'bar');
  expect(res.response).toHaveProperty('userId', 1);
});

test('Http транспорт должен отправлять put запрос', async () => {
  const res: any = await posts.put('/1', {
    data: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  expect(res.status).toEqual(200);
  expect(res.response).toHaveProperty('title', 'foo');
  expect(res.response).toHaveProperty('body', 'bar');
  expect(res.response).toHaveProperty('userId', 1);
});

test('Http транспорт должен отправлять delete запрос', async () => {
  const res: any = await posts.delete('/1');
  expect(res.status).toEqual(200);
});
