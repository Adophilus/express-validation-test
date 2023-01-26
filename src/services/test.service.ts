import { produce } from 'immer'

interface ITest {
  id: string
  name: string
  status: 'SUCCESS' | 'ERROR' | 'PENDING'
}

const tests: ITest[] = []

const generateId = () => {
  return String(Date.now())
}

export const create = (payload: ITest) => {
  const test = produce(payload, (draft) => {
    draft.id = generateId()
  })

  tests.push(test)
  return test
}

export const find = () => {
  return produce(tests, (draft) => draft)
}

export const findById = (id: ITest['id']) => {
  const test = tests.find((test) => test.id === id)
  return produce(test, (draft) => draft)
}

export const updateById = (payload: Omit<ITest, 'id'>, id: ITest['id']) => {
  let test = null

  for (const index in tests) {
    console.log(index)
    const _test = tests[index]
    if (_test.id !== id) continue
    tests.splice(
      Number(index),
      1,
      produce(_test, (draft) => Object.assign(draft, payload))
    )
    test = produce(tests[index], (draft) => draft)
  }

  return test
}

export const destroy = (id: ITest['id']) => {
  let test = null
  for (const index in tests) {
    console.log(index)
    const _test = tests[index]
    if (_test.id !== id) continue
    test = tests.splice(Number(index), 1)
    break
  }
  return test
}
