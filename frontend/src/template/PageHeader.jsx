import React from 'react'

export default props => (
    <div className='pageHeader pb-2 mt-4 mb-2 border-bottom'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </div>
)