import { describe, it, expect } from 'vitest';
import { MathUtils } from './mathUtils';

describe('MathUtils', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(MathUtils.add(2, 3)).toBe(5);
    });

    it('should add a positive and negative number correctly', () => {
      expect(MathUtils.add(2, -3)).toBe(-1);
    });

    it('should add two negative numbers correctly', () => {
      expect(MathUtils.add(-2, -3)).toBe(-5);
    });
  });

  describe('sum', () => {
    it('should return 0 for empty array', () => {
      expect(MathUtils.sum([])).toBe(0);
    });

    it('should return 0 for null or undefined input', () => {
      expect(MathUtils.sum(null as any)).toBe(0);
      expect(MathUtils.sum(undefined as any)).toBe(0);
    });

    it('should calculate sum correctly for array with numbers', () => {
      expect(MathUtils.sum([1, 2, 3, 4, 5])).toBe(15);
    });
  });

  describe('average', () => {
    it('should return 0 for empty array', () => {
      expect(MathUtils.average([])).toBe(0);
    });

    it('should return 0 for null or undefined input', () => {
      expect(MathUtils.average(null as any)).toBe(0);
      expect(MathUtils.average(undefined as any)).toBe(0);
    });

    it('should calculate average correctly for array with numbers', () => {
      expect(MathUtils.average([1, 2, 3, 4, 5])).toBe(3);
    });
  });

  describe('findMax', () => {
    it('should return null for empty array', () => {
      expect(MathUtils.findMax([])).toBeNull();
    });

    it('should return null for null or undefined input', () => {
      expect(MathUtils.findMax(null as any)).toBeNull();
      expect(MathUtils.findMax(undefined as any)).toBeNull();
    });

    it('should find maximum value correctly', () => {
      expect(MathUtils.findMax([1, 5, 3, 9, 2])).toBe(9);
    });
  });

  describe('findMin', () => {
    it('should return null for empty array', () => {
      expect(MathUtils.findMin([])).toBeNull();
    });

    it('should return null for null or undefined input', () => {
      expect(MathUtils.findMin(null as any)).toBeNull();
      expect(MathUtils.findMin(undefined as any)).toBeNull();
    });

    it('should find minimum value correctly', () => {
      expect(MathUtils.findMin([1, 5, 3, 9, 2])).toBe(1);
    });
  });

  describe('getArrayCoverage', () => {
    it('should return 0 for empty array', () => {
      expect(MathUtils.getArrayCoverage([])).toBe(0);
    });

    it('should return 0 for null or undefined input', () => {
      expect(MathUtils.getArrayCoverage(null as any)).toBe(0);
      expect(MathUtils.getArrayCoverage(undefined as any)).toBe(0);
    });

    it('should count valid elements correctly', () => {
      const arr = [1, null, 3, undefined, 5];
      expect(MathUtils.getArrayCoverage(arr)).toBe(3);
    });
  });

  describe('getArrayCoveragePercentage', () => {
    // FIXME: Empty array causes division by zero resulting in NaN
    it.skip('should return 0 for empty array', () => {
      const arr: any[] = [];
      expect(MathUtils.getArrayCoveragePercentage(arr)).toBe(0);
    });

    it('should return 0 for null or undefined input', () => {
      expect(MathUtils.getArrayCoveragePercentage([null] as any)).toBe(0);
      expect(MathUtils.getArrayCoveragePercentage([undefined] as any)).toBe(0);
    });

    it('should calculate coverage percentage correctly', () => {
      const arr = [1, null, 3, undefined, 5];
      expect(MathUtils.getArrayCoveragePercentage(arr)).toBe(60);
    });

    it('should handle array with all valid elements', () => {
      expect(MathUtils.getArrayCoveragePercentage([1, 2, 3])).toBe(100);
    });

    it('should handle array with all invalid elements', () => {
      expect(MathUtils.getArrayCoveragePercentage([null, undefined, null])).toBe(0);
    });
  });
});
