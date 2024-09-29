import { sum } from "../src/sum";

test('testing sum function', () => { 

    const res = sum(5, 8);

    expect(res).toBe(13);

 })