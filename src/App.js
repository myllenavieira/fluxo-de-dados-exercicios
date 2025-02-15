import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const[postagem, setPostagem] = useState({});
  const[header, setHeader] = useState({});
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
            header={header}
            setHeader={setHeader}
            pageFlow={pageFlow}
          />
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} 
              header={header}
              setHeader={setHeader}
            />
          ) : (
            <FormularioPostagem 
              postagem={postagem}
              setPostagem={setPostagem}
            />
          )}
        </aside>
        <TelaDaPostagem 
          postagem={postagem}
          pageFlow={pageFlow}
        />
      </Container>
    </>
  );
}

export default App;
