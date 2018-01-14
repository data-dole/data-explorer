import data from './sample'
import { flatten, uniq } from 'lodash'

describe('sample data', ()=>{
  it('has a required shape', ()=>{
    const requiredShape = {descendants: expect.any(Object), items: expect.any(Object)}

    expect(data).toEqual(expect.objectContaining(requiredShape))
  })
})

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
})
