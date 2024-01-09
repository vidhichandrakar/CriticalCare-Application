export function isNotEmptyObject(obj) {
  return obj && typeof obj === "object" && Object.keys(obj).length;
}