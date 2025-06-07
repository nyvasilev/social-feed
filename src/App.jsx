import { UserFeed } from "./screens";
import { Header, Footer } from "./components";
import { appContainer } from "./assets/globalStyles";
import "./App.css";

function App() {
  return (
    <div css={appContainer}>
      <Header />
      <UserFeed />
      <Footer />
    </div>
  );
}

export default App;
