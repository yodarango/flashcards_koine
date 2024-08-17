import { Container } from "../components/Container/Container";
import { Finished } from "../components/Finished/Finished";
import { useCardsContext } from "@context";
import { IfElse } from "@ds";

export const Layout = () => {
  const cardsCtx = useCardsContext();
  return (
    <IfElse condition={cardsCtx.state.isFinished}>
      <Finished />
      <Container />
    </IfElse>
  );
};
