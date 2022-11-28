import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  const[titulo, setTitulo] = useState("")
  const[imagem, setImagem] = useState("")
  const[descricao, setDescricao] = useState("")

  function onChangeTitulo(e){
    setTitulo(e.target.value)
  }

  function onChangeDescricao(e){
    setDescricao(e.target.value)
  }

  function onChangeImagem(e){
    setImagem(e.target.value)
  }

  function submit(e){
    e.preventDefault()
    props.setPostagem({
      titulo: titulo,
      imagem: imagem,
      descricao: descricao
    })
    setTitulo("")
    setImagem("")
    setDescricao("")
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={titulo} onChange={onChangeTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={imagem} onChange={onChangeImagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={descricao} onChange={onChangeDescricao}/>
        </StyledLabel>
        <button onClick={submit}>Clique para enviar!</button>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
