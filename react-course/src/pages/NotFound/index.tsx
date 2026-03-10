import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
    return (
       <MainTemplate>
        <p style={{textAlign: "center", fontSize: "2rem", marginTop: "2rem"}}>404 - Página Não Encontrada</p>
       </MainTemplate>
    );
}