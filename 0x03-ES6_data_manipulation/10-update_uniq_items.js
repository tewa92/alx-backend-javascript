export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) throw Error('Cannot process');

  items.forEach((value, key) => {
    if (value === 1) {
      items.set(key, 100);
    }
  });
}
