import { DessertsCards } from "./DessertsCards";
import "./DessertsContainer.css";
import properties from "./Properties/data.json";

export function DessertsContainer() {
  return (
    <div className="desserts-container">
      <h1 className="desserts-title">Desserts</h1>
      <div className="desserts-containerCards">
        {Object.keys(properties).map((key) => (
          <DessertsCards key={key} id={key} />
        ))}
      </div>
    </div>
  );
}

