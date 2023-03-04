import { Header } from "@components/Header";
import { Hightligth } from "@components/Hightligth";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Hightligth title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}
