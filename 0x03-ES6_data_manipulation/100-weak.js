export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    let key = weakMap.get(endpoint);
    if (key < 5) {
      key += 1;
      weakMap.set(endpoint, key);
    } else {
      throw new Error('Endpoint load is high');
    }
  } else weakMap.set(endpoint, 1);
}
