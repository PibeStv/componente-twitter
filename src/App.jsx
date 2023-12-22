import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  //al pasarle el userName... le añade el o de @ y lo guarda en la constante formatUserName
  //const format = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard userName="midudev">
        "Miguel Angel Duran"
      </TwitterFollowCard>

      <TwitterFollowCard userName="pheralb">
        "Pablo hernandez"
      </TwitterFollowCard>
    </section>
  );
}
