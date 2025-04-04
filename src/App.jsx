import "./index.css";
import "./App.css";
import { DessertsContainer } from "./DessertsContainer";
import { BillContainer } from "./BillContainer";
import { ConfirmedOrder } from "./ConfirmedOrder";

export function App() {
  return (
    <>
      <DessertsContainer />
      <BillContainer />
      <ConfirmedOrder />
    </>
  );
}
