import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Patterns, ProductA, ProductB } from './patterns';

describe('Patterns', () => {

  describe('Singleton', () => {
    it('should return the same instance', () => {
      const instance1 = Patterns.Singleton.getInstance();
      const instance2 = Patterns.Singleton.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe('Observer', () => {
    let observer: Patterns.Observer<number>;
    let callback: (data: number) => void;

    beforeEach(() => {
      observer = new Patterns.Observer<number>();
      callback = vi.fn();
    });

    it('should subscribe and notify observers', () => {
      observer.subscribe(callback);
      observer.notify(1);
      expect(callback).toHaveBeenCalledWith(1);
    });

    it('should unsubscribe observers', () => {
      const unsubscribe = observer.subscribe(callback);
      unsubscribe();
      observer.notify(1);
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('Factory', () => {
    it('should create ProductA when type is "a"', () => {
      const product = Patterns.Factory.createProduct('a');
      expect(product).toBeInstanceOf(ProductA);
      expect(product.operation()).toBe('Product A');
    });

    it('should create ProductB when type is "b"', () => {
      const product = Patterns.Factory.createProduct('b');
      expect(product).toBeInstanceOf(ProductB);
      expect(product.operation()).toBe('Product B');
    });

    it('should throw an error for unknown product type', () => {
      expect(() => Patterns.Factory.createProduct('c')).toThrow('Unknown product type: c');
    });
  });
});
