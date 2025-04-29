/**
 * @typedef {Object} Test
 * @property {string} name - Name of the test, which will be displayed
 * @property {Function} fn - Function that should be executed without throwing any error if the test is ok
 */

/**
 * An array to store all registered tests.
 * @type {Array<Test>}
 */
const tests = [];

/**
 * Registers a test case.
 *
 * @param {string} name - The name of the test case.
 * @param {Function} fn - The function containing the test logic.
 */
export const test = (name, fn) => tests.push({ name, fn });

/**
 * Assertion utility for writing test expectations.
 */
export const assert = {
  /**
   * Asserts that two values are strictly equal (using `===`).
   *
   * @param {*} actual - The actual value.
   * @param {*} expected - The expected value.
   * @throws Will throw an error if the values are not strictly equal.
   */
  equal(actual, expected) {
    if (actual !== expected) {
      throw new Error(`Expected ${actual} === ${expected}`);
    }
  },
  /**
   * Asserts that two values are not strictly equal (using `!==`).
   *
   * @param {*} actual - The actual value.
   * @param {*} expected - The value that `actual` should not equal.
   * @throws Will throw an error if the values are strictly equal.
   */
  notEqual(actual, expected) {
    if (actual === expected) {
      throw new Error(`Expected ${actual} !== ${expected}`);
    }
  },
  /**
   * Asserts that a value is truthy.
   *
   * @param {*} value - The value to check.
   * @throws Will throw an error if the value is falsy.
   */
  truthy(value) {
    if (!value) {
      throw new Error(`Expected value to be truthy, but got: ${value}`);
    }
  },
};

/**
 * Executes all registered test cases and reports results.
 * If any test fails, exits the process with a non-zero code.
 */
export const run = () => {
  let failed = 0;

  for (const { name, fn } of tests) {
    try {
      fn();
      console.log(`✅ '${name}' passed`);
    } catch (err) {
      failed++;
      console.error(`❌ '${name}' failed`);
      console.error(err.stack || err);
    }
  }

  if (failed > 0) {
    console.error(`${failed} test(s) failed.`);
    process.exit(1);
  } else {
    console.log(`All tests passed.`);
  }
};
