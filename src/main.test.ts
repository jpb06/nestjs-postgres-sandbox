jest.mock('./bootstrap');

import { bootstrap } from './bootstrap';

describe('Main file', () => {
  it('should bootstrap', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('./main');

    expect(bootstrap).toHaveBeenCalledTimes(1);
  });
});
