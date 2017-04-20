import { deferred } from '../lib/index';
test('defferrd is work with async call', async () => {
  const deffer = deferred<{ name: string }>();
  setTimeout(() => {
    deffer.resolve({ name: 'aepkill' });
  }, 1000);
  const result = await deffer.promise;
  expect(result.name).toBe('aepkill');
});
