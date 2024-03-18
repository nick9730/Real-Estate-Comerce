import React from 'react'
import styled from 'styled-components'


const Content=styled.div`
    width: 100%;
   font-size: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`

export default function Copyrights() {
  return (
    <Content>
        <div>

        COPYRIGHT @ 2024 | POLICY
        </div>
        <div>
            Koutrenis Nikolaos
        </div>
        </Content>
  )
}
