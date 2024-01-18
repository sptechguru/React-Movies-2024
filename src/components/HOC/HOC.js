import React from 'react'
import SampleComponent from './SampleComponet';


const hocfunction = (Componets) => {
    return ((props) => (
        <>
            <div style={{ backgroundColor: 'red', padding: '30px', color: 'white' }}>
                <Componets  {...props} />
            </div>
        </>
    )
    )
}
const HocSamplComponets = hocfunction(SampleComponent)
export { HocSamplComponets }
