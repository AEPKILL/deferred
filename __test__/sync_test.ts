import { deferred } from '../lib/index';
test('defferrd is work with sync call', async () => {
  const deffer = deferred<{ name: string }>();
  deffer.resolve({ name: 'aepkill' });
  const result = await deffer.promise;
  expect(result.name).toBe('aepkill');
});
