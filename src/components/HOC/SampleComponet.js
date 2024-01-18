import React from 'react'

export default function SampleComponent(props) {
    return (
        <>
            <h1> Hii I am Sample Componets</h1>
            {
                props.name && <h2>Hi i am {props.name}</h2>
            }
        </>
    )
}


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
