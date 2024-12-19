import { describe, it, expect } from 'vitest';
import { StringUtils } from './stringUtils';

describe('StringUtils', () => {
  describe('reverse', () => {
    it('should reverse a non-empty string', () => {
      expect(StringUtils.reverse('hello')).toBe('olleh');
    });

    it('should return an empty string when input is empty', () => {
      expect(StringUtils.reverse('')).toBe('');
    });

    it('should return an empty string when input is null or undefined', () => {
      expect(StringUtils.reverse(null as unknown as string)).toBe('');
      expect(StringUtils.reverse(undefined as unknown as string)).toBe('');
    });
  });

  describe('slice', () => {
    it('should slice a string with positive indices', () => {
      expect(StringUtils.slice('hello', 1, 3)).toBe('el');
    });

    it('should slice a string with negative indices', () => {
      expect(StringUtils.slice('hello', -4, -1)).toBe('ell');
    });

    it('should slice a string with only start index', () => {
      expect(StringUtils.slice('hello', 2)).toBe('llo');
    });

    it('should return an empty string when input is empty', () => {
      expect(StringUtils.slice('', 1, 3)).toBe('');
    });

    it('should return an empty string when input is null or undefined', () => {
      expect(StringUtils.slice(null as unknown as string, 1, 3)).toBe('');
      expect(StringUtils.slice(undefined as unknown as string, 1, 3)).toBe('');
    });
  });

  describe('matchPattern', () => {
    it('should return true if string matches the pattern', () => {
      expect(StringUtils.matchPattern('hello123', /\d+/)).toBe(true);
    });

    it('should return false if string does not match the pattern', () => {
      expect(StringUtils.matchPattern('hello', /\d+/)).toBe(false);
    });

    it('should return false if input string is empty', () => {
      expect(StringUtils.matchPattern('', /\d+/)).toBe(false);
    });

    it('should return false if input string is null or undefined', () => {
      expect(StringUtils.matchPattern(null as unknown as string, /\d+/)).toBe(false);
      expect(StringUtils.matchPattern(undefined as unknown as string, /\d+/)).toBe(false);
    });

    it('should return false if pattern is null or undefined', () => {
      expect(StringUtils.matchPattern('hello123', null as unknown as RegExp)).toBe(false);
      expect(StringUtils.matchPattern('hello123', undefined as unknown as RegExp)).toBe(false);
    });
  });

  describe('toCamelCase', () => {
    it('should convert a string with spaces to camelCase', () => {
      expect(StringUtils.toCamelCase('hello world')).toBe('helloWorld');
    });

    it('should convert a string with dashes to camelCase', () => {
      expect(StringUtils.toCamelCase('hello-world')).toBe('helloWorld');
    });

    it('should convert a string with underscores to camelCase', () => {
      expect(StringUtils.toCamelCase('hello_world')).toBe('helloWorld');
    });

    it('should return an empty string when input is empty', () => {
      expect(StringUtils.toCamelCase('')).toBe('');
    });

    it('should return an empty string when input is null or undefined', () => {
      expect(StringUtils.toCamelCase(null as unknown as string)).toBe('');
      expect(StringUtils.toCamelCase(undefined as unknown as string)).toBe('');
    });
  });
});
