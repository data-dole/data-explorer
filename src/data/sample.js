export const items = {
    ['@root']: {
        name: 'Root'
    },
    ['@my-org']: {
        name: 'My Org'
    },
    ['@teams']: {
        name: 'Teams'
    },
    ['@team-alfa']: {
        members: ['@marie', '@john']
    },
    ['@team-beta']: {
        members: ['@alex']
    },
    ['@people']: {
        name: 'People'
    },
    ['@marie']: {
        name: 'Marie'
    },
    ['@john']: {
        name: 'John',
        manager: '@marie',
    },
    ['@alex']: {
        name: 'Alex',
        manager: '@john',
    },
}

export const descendants = {
    ['@root']: ['@my-org'],
    ['@my-org']: ['@people', '@teams'],
    ['@teams']: ['@team-alfa', '@team-beta'],
    ['@people']: ['@marie', '@john', '@alex'],    
}

const resolveItems = () => {
  Object.entries(descendants).forEach(([key, list])=>{
      descendants[key] = descendants[key].map(itemKey => items[itemKey])
  })
  // TODO resolve references
}

resolveItems()
