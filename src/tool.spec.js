const assert = require('assert');
import { sum } from './tool';

describe('sum', () => {
    it('should return 5 for sum(2, 3)', () => {
        assert.equal(sum(2, 3), 5);
    });

    it('should return 2 for sum(2, 0)', () => {
        assert.equal(sum(2, 0), 2);
    });
});
