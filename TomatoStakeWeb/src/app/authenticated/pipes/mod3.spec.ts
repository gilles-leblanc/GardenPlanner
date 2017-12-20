import { Identity } from '../interfaces/Identity';
import { Mod3Pipe } from './mod3';

describe('Mod3 (modulo 3) Pipe', () => {
  const mod3Pipe: Mod3Pipe = new Mod3Pipe();
  const testData: Identity[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }
  ];

  it('#transform with remainder 1 should return id mod 3 === 1', () => {
    const results = mod3Pipe.transform(testData, 1);
    expect(results.length).toBe(2);
    expect(results[0].id).toBe(1);
    expect(results[1].id).toBe(4);
  });

  it('#transform with remainder 2 should return id mod 3 === 2', () => {
    const results = mod3Pipe.transform(testData, 2);
    expect(results.length).toBe(2);
    expect(results[0].id).toBe(2);
    expect(results[1].id).toBe(5);
  });

  it('#transform with remainder 3 should return id mod 3 === 0', () => {
    const results = mod3Pipe.transform(testData, 0);
    expect(results.length).toBe(2);
    expect(results[0].id).toBe(3);
    expect(results[1].id).toBe(6);
  });
});
