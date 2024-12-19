import { describe, it, expect } from 'vitest';
import { ArrayUtils } from './arrayUtils';

describe('ArrayUtils', () => {
  describe('sort', () => {
    it('should return an empty array when input is empty', () => {
      expect(ArrayUtils.sort([])).toEqual([]);
    });

    it('should sort an array of numbers in ascending order by default', () => {
      expect(ArrayUtils.sort([3, 1, 2])).toEqual([1, 2, 3]);
    });

    it('should sort an array of numbers in descending order when a compare function is provided', () => {
      const compareFunc = (a: number, b: number) => b - a;
      expect(ArrayUtils.sort([3, 1, 2], compareFunc)).toEqual([3, 2, 1]);
    });

    it('should not modify the original array', () => {
      const originalArray = [3, 1, 2];
      ArrayUtils.sort(originalArray);
      expect(originalArray).toEqual([3, 1, 2]);
    });
  });

  describe('unique', () => {
    it('should return an empty array when input is empty', () => {
      expect(ArrayUtils.unique([])).toEqual([]);
    });

    it('should remove duplicate numbers from an array', () => {
      expect(ArrayUtils.unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    });

    it('should remove duplicate strings from an array', () => {
      expect(ArrayUtils.unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });
  });

  describe('filter', () => {
    it('should return an empty array when input is empty', () => {
      expect(ArrayUtils.filter([], () => true)).toEqual([]);
    });

    it('should filter an array based on a predicate function', () => {
      const isEven = (num: number) => num % 2 === 0;
      expect(ArrayUtils.filter([1, 2, 3, 4], isEven)).toEqual([2, 4]);
    });
  });

  describe('chunk', () => {
    it('should return an empty array when input is empty', () => {
      expect(ArrayUtils.chunk([], 2)).toEqual([]);
    });

    it('should return an empty array when chunk size is less than 1', () => {
      expect(ArrayUtils.chunk([1, 2, 3], 0)).toEqual([]);
    });

    it('should split an array into chunks of given size', () => {
      expect(ArrayUtils.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should handle chunk sizes larger than the array length', () => {
      expect(ArrayUtils.chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });
  });
});
