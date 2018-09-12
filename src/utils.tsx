import { compose, isNil, join, reject } from 'ramda'

const match = (value: any) => (cases: object) => {
  const hasKey = (key: string) => String(value) === key
  const matchingCase = Object.keys(cases).find(hasKey) || '_'
  const result: any = cases[matchingCase]

  if (isNil(result)) {
    throw new Error('Match error')
  }

  return result
}

export { match  }
