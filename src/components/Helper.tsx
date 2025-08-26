export function makeId() {
  
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return (crypto as any).randomUUID() as string;
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}