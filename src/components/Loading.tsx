import loading from '../assets/loading.svg'

import styled from 'styled-components'

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Loading() {
    return (
        <LoadingContainer>
            <img src={loading} alt="loading icon" />
        </LoadingContainer>
    )
}