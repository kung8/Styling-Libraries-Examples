import React from 'react'



function CSSinJSExample() {
    const kevmountain = {
        pizza: { background: 'blue', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' },
        achoo: {
            fontWeight: 'bold', fontSize: 40, textAlign: 'center', color: 'white'
        }
    }
    
    return (
        <div style={kevmountain.pizza}>
            <p style={kevmountain.achoo}>Hello</p>
        </div>
    )
}

export default CSSinJSExample 