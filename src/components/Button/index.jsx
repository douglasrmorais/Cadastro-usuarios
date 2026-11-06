import PropTypes from 'prop-types';


import {Button} from './styles'

function DefaultButton({children, theme, ...rest}){

    console.log(rest)

    return (
        <Button {...rest} theme={theme}>{children}</Button>
    )
}

DefaultButton.PropTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton