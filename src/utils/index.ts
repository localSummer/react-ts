function getValue(value: unknown): string {
  if (value instanceof Date) {
    // 类型保护
    return value.toISOString()
  }
  return String(value)
}
