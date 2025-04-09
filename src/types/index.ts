export type Tuple = [string, string]
export type primitive = null|number|boolean|string|primitive[]
export type Json = {
  [key: string]: primitive|Json
}
