import styled from 'styled-components'

import { Search } from 'lucide-react'

import { FormEvent, useState } from 'react'

import Results from './components/Results'
import Loading from './components/Loading'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #ad92ec, #1688e6);
`

const Wrapper = styled.div`
  min-width: 20%;
  background-color: rgb(37 99 235);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 2px #000;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: relative;
`

const Input = styled.input`
  border-radius: 0.5rem;
  border: 1px solid black;
  outline: none;
  width: 20rem;
  padding: 0.8rem;
  font-size: 1rem;
`

const Button = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 12%;
  top: 35%;
`

function App() {

  const [city, setCity] = useState("")
  const [weatherInfo, setWeatherInfo] = useState()
  const [loading, setLoading] = useState(false)


    async function fetchWeather(e: FormEvent) {
      setLoading(true)
      e.preventDefault()
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=d5bbec1f9469a4d00df8f6ac6e8adce1`)
      const data = await resp.json()
      setWeatherInfo(data)
      setLoading(false)
    }

  return (
    <Container className="App">
      <Wrapper>
        <Form onSubmit={fetchWeather}>
          <Input type='text' placeholder='Insira uma cidade' value={city} onChange={e => setCity(e.target.value)} />
          <Button>
            <Search />
          </Button>
        </Form>
        {loading && <Loading />}
        {weatherInfo && <Results weatherInfo={weatherInfo} />}
      </Wrapper>
    </Container>
  )
}

export default App
