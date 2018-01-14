const buildDataAPI = (itemsById, descendantsById) => {  
  const roots = Object.keys(descendantsById).map(key => itemsById[key])
  Object.entries(itemsById).forEach(([key, obj]) => {
    Object.defineProperty(obj, '___id', { value: key })
  })

  const getSubItemsOf = item => (
    item === null ? roots : (descendantsById[item.___id] || [])
  )

  const getItemId = item => itemsById[item.___id] ? item.___id : undefined

  return { getSubItemsOf, getItemId }
}

export default buildDataAPI