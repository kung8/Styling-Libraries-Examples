import React from 'react'
import styled from 'styled-components' //npm i styled-components

export default function Example (){
    return(
        <div>
            <ExampleText>
                This is an example
            </ExampleText>
            </div>
    )
}

const ExampleText = styled.p`
    margin:40px;
    &:hover{
        color:red
    }
    @media screen and (min-width:700px){
        background:blue;
    }
`