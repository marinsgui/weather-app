import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  height: 60%;
  width: 40%;
  background-color: lightblue;
  border-radius: 1rem;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const Input = styled.input`
  border-radius: 0.5rem;
  border: 1px solid black;
  outline: none;
  width: 20rem;
  padding: 0.8rem;
  font-size: 1rem;
`

function App() {

  return (
    <Container className="App">
      <Wrapper>
        <Form>
          <Input type='text' placeholder='Insira uma cidade' />
        </Form>
      </Wrapper>
    </Container>
  )
}

export default App
