import React, { Component } from 'react'

import './Explorer.css';

class Explorer extends Component {
    render() {
        return <div className='mainContent'>
                <div className='centerArea'>
                <div className='item'>item1 </div>
                <div className='item'>item2 </div>
                <div className='item'>item3 </div>
            </ div>
            <div className='rightPanel'>
                <span>Item Details Viewer</span>
            </div>
            <div className='clear' />
          </div>
    }
}

export default Explorer