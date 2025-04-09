interface ConnectionComponentResult {
  information: ConnectionInformation|null
}

interface ConnectionInformation {
  effectiveType: string
  downlink: number
  rtt: number
  saveData: boolean
}

function getConnectionInformation(): ConnectionInformation|null {
  const connection = (navigator as any).connection
  if (connection) {
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    }
  }
  return null
}

export async function component(seed: string): Promise<ConnectionComponentResult> {
  return {
    information: getConnectionInformation()
  }
}
