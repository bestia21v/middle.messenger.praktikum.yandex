import { router } from './index';

test('Роутер должен создавать роуты', () => {
  router
    .use('/test', undefined)
    .use('/test2', undefined)
    .use('/test3', undefined);
  expect(router.routes.length).toEqual(3);
});
