import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {BaseButton} from './BaseButton'

const StyledButton = styled (BaseButton)`
${({theme,variant})=>theme.variants.iconButton[variant || 'primary']}
`

export const IconButton = styled (({icon,...rest})=>{
    let clone = React.cloneElement(icon, rest)
    return <StyledButton as={clone.type} {...rest} className={rest.className}/>
})
`// Could add styles here but not necessary. This wraps styled icon which is passed in as a prop.`

IconButton.defaultProps = {
    size: 24
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    variant: PropTypes.string
}