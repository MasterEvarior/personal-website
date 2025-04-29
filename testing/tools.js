import { availableCommands } from "../src/index.js";

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
 * Registers a test case for a command, asserting that its output matches what is expected.
 *
 * @param {string} command - The command name to test (should match one of the available command aliases).
 * @param {*} expected - The expected output from the command when invoked with an empty string as input.
 */
export const commandTest = (command, expected) =>
  tests.push({
    name: `${command} should return the expected output`,
    fn: () => {
      const cmd = availableCommands.find((c) => c.names.includes(command));
      assert.equal(strip(cmd.output("")), strip(expected));
    },
  });

/**
 * Remove all whitepsaces and linebreaks from a test
 *
 * @param {string}} text - Text to remove whitespaces and linebreaks from
 * @returns - The input text but without whitespaces and linebreaks
 */
const strip = (text) => text.replace(/[\n\r\t]/gm, "").trim();

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
      throw new Error(`Expected ${actual} but got ${expected}`);
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
      throw new Error(`Expected ${actual} to no equal ${expected}`);
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
