import React from 'react'
import {Button} from '@windmill/react-ui'

function ButtonComp({text,className,size,layout}) {
    return (
        <div>
            <Button layout={layout}className={className}size={size}>{text}</Button>

            
        </div>
    )
}

export default ButtonComp
