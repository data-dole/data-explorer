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

// TODO process references

export default { items: items, descendants: descendants }