import { describe, it, expect } from 'vitest';
import { MathUtils } from './mathUtils';

describe('MathUtils', () => {

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(MathUtils.add(2, 3)).toBe(5);
      expect(MathUtils.add(-1, 1)).toBe(0);
      expect(MathUtils.add(-2, -3)).toBe(-5);
    });
  });

  describe('sum', () => {
    it('should return the sum of an array of numbers', () => {
      expect(MathUtils.sum([1, 2, 3, 4])).toBe(10);
      expect(MathUtils.sum([-1, -2, -3, -4])).toBe(-10);
      expect(MathUtils.sum([])).toBe(0);
    });

    it('should return 0 for null or undefined inputs', () => {
      expect(MathUtils.sum(null as any)).toBe(0);
      expect(MathUtils.sum(undefined as any)).toBe(0);
    });
  });

  describe('average', () => {
    it('should return the average of an array of numbers', () => {
      expect(MathUtils.average([1, 2, 3, 4])).toBe(2.5);
      expect(MathUtils.average([5, 10, 15])).toBe(10);
    });

    it('should return 0 for an empty array', () => {
      expect(MathUtils.average([])).toBe(0);
    });

    it('should return 0 for null or undefined inputs', () => {
      expect(MathUtils.average(null as any)).toBe(0);
      expect(MathUtils.average(undefined as any)).toBe(0);
    });
  });

  describe('findMax', () => {
    it('should return the maximum value in an array of numbers', () => {
      expect(MathUtils.findMax([1, 2, 3, 4])).toBe(4);
      expect(MathUtils.findMax([-1, -2, -3, -4])).toBe(-1);
    });

    it('should return null for an empty array', () => {
      expect(MathUtils.findMax([])).toBeNull();
    });

    it('should return null for null or undefined inputs', () => {
      expect(MathUtils.findMax(null as any)).toBeNull();
      expect(MathUtils.findMax(undefined as any)).toBeNull();
    });
  });

  describe('findMin', () => {
    it('should return the minimum value in an array of numbers', () => {
      expect(MathUtils.findMin([1, 2, 3, 4])).toBe(1);
      expect(MathUtils.findMin([-1, -2, -3, -4])).toBe(-4);
    });

    it('should return null for an empty array', () => {
      expect(MathUtils.findMin([])).toBeNull();
    });

    it('should return null for null or undefined inputs', () => {
      expect(MathUtils.findMin(null as any)).toBeNull();
      expect(MathUtils.findMin(undefined as any)).toBeNull();
    });
  });

});
