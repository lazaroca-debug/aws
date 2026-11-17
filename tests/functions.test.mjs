import test from 'node:test';
import assert from 'node:assert/strict';

import { showTime, loadReviews, renderReviews } from '../functions.mjs';

test('functions should be exported for the website', () => {
  assert.strictEqual(typeof showTime, 'function');
  assert.strictEqual(typeof loadReviews, 'function');
  assert.strictEqual(typeof renderReviews, 'function');
});
