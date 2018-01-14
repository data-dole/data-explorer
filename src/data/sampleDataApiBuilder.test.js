import buildDataApi from './sampleDataApiBuilder'

describe('sampleDataApiBuilder', ()=>{
  const item1 = { v: 1}
  const item11 = { v: 11}
  const item2 = { v: 2}

  const itemsById = { '1': item1, '2': item11, '3': item2}
  const descendantsById = {
    '1': [item11],
    '3': [],
  }
    
  const dataApi = buildDataApi(itemsById, descendantsById)

  describe('getSubItemsOf', ()=>{
    it('returns roots for null', ()=>{
        expect(dataApi.getSubItemsOf(null)).toEqual([item1, item2])
    })

    it('returns sub items for a super item', ()=>{
        expect(dataApi.getSubItemsOf(item1)).toEqual([item11])
    })

    it('returns empty list for an empty root item', ()=>{
        expect(dataApi.getSubItemsOf(item2)).toEqual([])
    })

    it('returns empty list for a leaf item', ()=>{
        expect(dataApi.getSubItemsOf(item11)).toEqual([])
    })
  })

  describe('getItemId', ()=>{
    it('returns id for known items', ()=>{
      expect(dataApi.getItemId(item11)).toEqual('2')
    })
    it('returns undefined for unknown items', ()=>{
      expect(dataApi.getItemId({...item11})).toBeUndefined()
    })
  })
})