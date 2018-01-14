import { descendants, items } from './sample'
import { concat, flatten, uniq } from 'lodash'

const data = { descendants, items }

describe('descendants', ()=>{
  it('maps items', ()=>{
    const parents = Object.keys(data.descendants)
    const itemsKeys = Object.keys(data.items)
      expect(itemsKeys).toEqual(expect.arrayContaining(parents))
  })

  it('maps items to items', ()=>{
    const values = uniq(flatten(Object.values(data.descendants)))
    const items = Object.values(data.items)

    expect(items).toEqual(expect.arrayContaining(values))
  })

  it('includes all items', ()=>{
    const parents = Object.keys(data.descendants).map((key) => data.items[key])
    const children = flatten(Object.values(data.descendants))

    const describedItems = uniq(concat(parents, children))
    const allItems = Object.values(data.items)

    expect(describedItems).toEqual(expect.arrayContaining(allItems))
    expect(allItems).toEqual(expect.arrayContaining(describedItems))
  })
})
