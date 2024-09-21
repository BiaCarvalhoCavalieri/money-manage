import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHighlight variant="income">$ 5499,00</PriceHighlight>
              </td>
              <td>Sell</td>
              <td>04/13/2024</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td>
                <PriceHighlight variant="outcome">-$ 99,00</PriceHighlight>
              </td>
              <td>Food</td>
              <td>04/10/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
