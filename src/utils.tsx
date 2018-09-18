const match = (value: any) => (cases: object) => {
  const hasKey = (key: string) => String(value) === key
  const matchingCase = Object.keys(cases).find(hasKey) || '_'
  const result = cases[matchingCase]

  if (result === null || (typeof result === 'undefined')) {
    throw new Error('Match error')
  }

  return result
}

export { match  }
