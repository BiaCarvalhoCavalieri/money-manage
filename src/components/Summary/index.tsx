import { SummaryContainer, SummaryCard } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income </span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>$ 1.300,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total </span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
