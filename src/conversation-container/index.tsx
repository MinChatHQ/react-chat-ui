import React from 'react'
import styled from 'styled-components'
import ConversationHeader from '../conversation-header'
import ConversationList, { Props as ConversationListProps } from '../conversation-list'

export interface Props extends ConversationListProps {
    showHeader?: boolean
}

const HeaderPlaceholder = styled.div`
   background-color: #ffffff;
     height: 56px;
      position: absolute;
      top: 0px;
left: 0px;
right: 0px;
z-index: 10;
box-sizing: border-box;
`

const Container = styled.div`
height: 100%;
  position: relative;
  max-height: 100vh;
overflow: hidden;
`

export default function ConversationContainer(props: Props) {
    const { showHeader = true } = props
    return (
        <Container>
            {!props.loading &&
                (showHeader ? <ConversationHeader /> : <HeaderPlaceholder />)
            }

            <ConversationList
                {...props}
            />
        </Container>
    )
}