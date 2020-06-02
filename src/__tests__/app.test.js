
import GameSavingLoader from '../js/GameSavingLoader';

test('load возвращает данные асинхронно', async () => {
  const expected = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  const received = await GameSavingLoader.load();
  expect(received).toEqual(expected);
});
