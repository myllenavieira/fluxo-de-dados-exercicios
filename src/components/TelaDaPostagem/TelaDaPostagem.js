import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    props.pageFlow > 1?
    <ContainerPostagem>
      <TitleHeader>{props.postagem.titulo}</TitleHeader>
      <Image src={props.postagem.imagem} />
      <Description>{props.postagem.descricao}</Description>
    </ContainerPostagem>
    :
    <ContainerPostagem>
    <TitleHeader>Instagram da Labenu</TitleHeader>
      <Image src={"https://wesco.com.br/wp-content/uploads/2015/08/Pessoas-felizes.jpg"} />
      <Description>Poste suas melhores fotos aqui!</Description> 
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
