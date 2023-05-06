import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding-bottom: 2rem;
`

const Title = styled.h1`
    margin-bottom: 1rem;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Temp = styled.div`
    font-size: 2rem;
`

const Icon = styled.img`
    
`

const IconDescription = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1rem;
`

const MinMax = styled.div`
    font-size: 1.1rem;
`

export default function Results({ weatherInfo }: any) {
    return (
        <Container>
            <Title>{weatherInfo.name}, {weatherInfo.sys.country}</Title>
            <Info>
                <Temp>{weatherInfo.main.temp} °C</Temp>
                <Temp style={{fontSize: '1rem'}}>Sensação térmica: {weatherInfo.main.feels_like} °C</Temp>
                <Icon src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} />
                <IconDescription>{weatherInfo.weather[0].description.toUpperCase()}</IconDescription>
            </Info>
            <Info>
                <MinMax>min. {weatherInfo.main.temp_min} °C</MinMax>
                <MinMax>max. {weatherInfo.main.temp_max} °C</MinMax>
            </Info>
        </Container>
    )
}