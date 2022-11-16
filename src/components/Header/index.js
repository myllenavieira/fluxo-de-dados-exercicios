import {TitleHeader, FotoPerfil} from './styled'

export const Header = (props) => {

    return(
        props.pageFlow > 1?
        <TitleHeader>
            <FotoPerfil src={props.header.foto}></FotoPerfil>
            <p>{props.header.nome}</p>
        </TitleHeader>
        :
        <TitleHeader>
            <FotoPerfil src={"https://yt3.ggpht.com/ytc/AMLnZu-p6Y8W9ihEBnKQGlCkuEgxSjZIQ-Hp3U_A4yCe=s900-c-k-c0x00ffffff-no-rj"}></FotoPerfil>
            <p>Labenu Insta4</p>
        </TitleHeader>
    )
}