import React from 'react'
import {Button} from '@windmill/react-ui'

function ButtonComp({text,className,size,layout,onClick}) {
    return (
        <div>
            <Button onClick={onClick}layout={layout}className={className}size={size}>{text}</Button>

            
        </div>
    )
}

export default ButtonComp
