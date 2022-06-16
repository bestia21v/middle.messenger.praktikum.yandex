import { router } from './index';
import { Title } from '../components/title';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

beforeEach(() => {
  router
    .use('/', new Title({ title: 'Логин' }))
    .use('/chat', new Title({ title: 'Чат' }))
    .use('/profile', new Title({ title: 'Профиль' }))
    .use('/404', new Title({ title: '404' }))
    .start();
});

test('Роутер должен создавать роуты', () => {
  expect(router.routes.length).toEqual(4);
});

test('Роутер должен переходить по роутам', () => {
  router.go('./chat');
  expect(window.location.pathname).toContain('chat');
});
