const items = {
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
    
    ['@managers']: {},
    ['@developers']: {},
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

const descendants = {
    ['@root']: ['@my-org'],
    ['@my-org']: ['@people', '@teams'],
    ['@teams']: ['@developers', '@managers'],
    ['@people']: ['@marie', '@john', '@alex'],    
}

const resolveItems = () => {
  Object.entries(descendants).forEach(([key, list])=>{
      console.log(key, descendants[key])
      descendants[key] = descendants[key].map(itemKey => items[itemKey])
  })
}

resolveItems()

export default { items: items, descendants: descendants }