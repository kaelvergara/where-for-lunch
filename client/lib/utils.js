export function getRandom(list) {
  if (!list || list.length === 0) return null;
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

export function isObjectEmpty(obj) {
  if (typeof obj === 'undefined') {
    throw new Error('Parameter obj is required');
  } else if (typeof obj !== 'object') {
    throw new Error('Parameter obj should be of type object');
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
