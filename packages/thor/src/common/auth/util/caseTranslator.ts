import camelCase = require('lodash/camelCase');
import snakeCase = require('lodash/snakeCase');

function camelCaseTranslator(x: Array<unknown>): Array<unknown>;
function camelCaseTranslator(x: Record<string, unknown>): Record<string, unknown>;
function camelCaseTranslator(x: unknown): unknown;
function camelCaseTranslator(x: Array<unknown> | Record<string, unknown> | unknown): Array<unknown> | Record<string, unknown> | unknown {
  if (x instanceof Array) {
    return x.map(v => camelCaseTranslator(v));
  } if (x instanceof Object) {
    return Object.keys(x).reduce((acc, key) => ({
      ...acc,
      [camelCase(key)]: camelCaseTranslator(x[key]),
    }), {});
  }
  return x;
}

function snakeCaseTranslator(x: Array<unknown>): Array<unknown>;
function snakeCaseTranslator(x: Record<string, unknown>): Record<string, unknown>;
function snakeCaseTranslator(x: unknown): unknown;
function snakeCaseTranslator(x: Array<unknown> | Record<string, unknown> | unknown): Array<unknown> | Record<string, unknown> | unknown {
  if (x instanceof Array) {
    return x.map(v => snakeCaseTranslator(v));
  } if (x instanceof Object) {
    return Object.keys(x).reduce((acc, key) => ({
      ...acc,
      [snakeCase(key)]: snakeCaseTranslator(x[key]),
    }), {});
  }
  return x;
}

export {
  camelCaseTranslator,
  snakeCaseTranslator,
};