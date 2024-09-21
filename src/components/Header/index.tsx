import logoImage from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTrasactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New trasaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTrasactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
