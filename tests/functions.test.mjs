import test from 'node:test';
import assert from 'node:assert/strict';

import { loadfunctions } from '../functions.mjs';

test ('loadfunctions should return an object with the expected functions', () => {
  const functions = loadfunctions();
  assert.strictEqual(typeof functions.showTime, 'function');
  assert.strictEqual(typeof functions.loadReviews, 'function');
  assert.strictEqual(typeof functions.renderReviews, 'function');
});