import React from 'react'
import styled from 'styled-components'
import useColorSet from '../../hooks/useColorSet'

export type Props = {
    showHeader?: boolean
    loading?: boolean
    title?: string
    showAddButton?: boolean
    onAddClicked?: () => void
    showSearchBar?: boolean
    searchValue?: string
    onSearchChange?: (value: string) => void
}

const Container = styled.div<{
    backgroundColor?: string,
    dividerColor?: string
}>`
background-color:${({ backgroundColor }) => backgroundColor || '#ffffff'};
position:relative;
top: 0px;
left: 0px;
right: 0px;
z-index: 2;
display: flex;
flex-direction: column;
box-sizing: border-box;
width: 100%;

${({ dividerColor }) => dividerColor ?
        `border-bottom: 1px solid ${dividerColor};`
        :
        'box-shadow:0px 1px 0px rgba(0, 0, 0, 0.07999999821186066);'
    }
`

const TitleRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 56px;
padding: 0 0 0 0;
width: 100%;
box-sizing: border-box;
`

const ChatTitle = styled.div<{
    color?: string
}>`
text-align:left;
vertical-align:text-top;
font-size:16px;
line-height:auto;
color:${({ color }) => color || '#000000'};
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
user-select: none;
font-weight: 600;
padding-left: 20px;
`

const AddButton = styled.button<{
    color?: string
}>`
background: none;
border: none;
cursor: pointer;
padding: 8px 16px 8px 16px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
color: ${({ color }) => color || '#000000'};
transition: background 0.2s;
border-radius: 12px;
margin-right: 12px;
&:hover {
    background: rgba(0,0,0,0.07);
}
`

const HeaderPlaceholder = styled.div`
   background-color: transparent;
     height: 56px;
      position: absolute;
      top: 0px;
left: 0px;
right: 0px;
z-index: 1;
box-sizing: border-box;
`

const SearchBarContainer = styled.div`
    width: 100%;
    background: transparent;
    padding: 0 0 16px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    z-index: 3;
    padding-right: 12px;
    padding-left: 12px;

`

const SearchInputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    margin-left: 0;
`

const SearchIcon = styled.span`
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    pointer-events: none;
    color: #8b98a5;
    font-size: 18px;
`

const SearchInput = styled.input<{
    color?: string
    backgroundColor?: string
    placeholderColor?: string
}>`
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    width: 100%;
    height: 40px;
    padding: 0 14px 0 40px;
    background-color: #f7f8fa;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    font-size: 15px;
    color: ${({ color }) => color || '#111'};
    outline: none;
    box-sizing: border-box;
    &::placeholder {
        color: ${({ placeholderColor }) => placeholderColor || '#8b98a5'};
        opacity: 1;
        font-size: 15px;
    }
`

export default function ConversationHeader({
    loading,
    showHeader = true,
    title = 'Messages',
    showAddButton = true,
    onAddClicked,
    showSearchBar = true,
    searchValue = '',
    onSearchChange
}: Props) {
    const backgroundColor = useColorSet("--chatlist-header-background-color")
    const textColor = useColorSet("--chatlist-header-text-color")
    const dividerColor = useColorSet("--chatlist-header-divider-color")
    const searchTextColor = useColorSet("--input-text-color")
    const searchPlaceholderColor = useColorSet("--input-placeholder-color")
    return (
        <>
            {
                loading ?
                    <div />
                    :
                    (!showHeader ?
                        <HeaderPlaceholder />
                        :
                        <Container
                            dividerColor={dividerColor}
                            backgroundColor={backgroundColor}>
                            <TitleRow>
                                <ChatTitle color={textColor}>{title}</ChatTitle>
                                {showAddButton && (
                                    <AddButton
                                        color={textColor}
                                        aria-label="Add"
                                        onClick={onAddClicked}
                                        type="button"
                                    >
                                        +
                                    </AddButton>
                                )}
                            </TitleRow>
                            {showSearchBar && (
                                <SearchBarContainer>
                                    <SearchInputWrapper>
                                        <SearchIcon>
                                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5 15.5C12.0899 15.5 15 12.5899 15 9C15 5.41015 12.0899 2.5 8.5 2.5C4.91015 2.5 2 5.41015 2 9C2 12.5899 4.91015 15.5 8.5 15.5Z" stroke="#8b98a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18 18L14 14" stroke="#8b98a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </SearchIcon>
                                        <SearchInput
                                            color={searchTextColor}
                                            placeholderColor={searchPlaceholderColor}
                                            type="text"
                                            value={searchValue}
                                            onChange={e => onSearchChange && onSearchChange(e.target.value)}
                                            placeholder="Search conversations..."
                                        />
                                    </SearchInputWrapper>
                                </SearchBarContainer>
                            )}
                        </Container>
                    )
            }
        </>
    )
}