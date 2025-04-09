interface DateComponentResult {
  timezoneOffset: number
  timezone: string
}

function getTimezoneOffset(): number {
  const year  = new Date().getFullYear()
  const a     = new Date(year, 0, 1).getTimezoneOffset()
  const b     = new Date(year, 6, 1).getTimezoneOffset()
  return Math.max(a, b)
}

function getTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

export async function component(seed: string): Promise<DateComponentResult> {
  return {
    timezoneOffset: getTimezoneOffset(),
    timezone: getTimeZone(),
  }
}
