import "./App.css";
import { componentData } from "./data/cdt-data";
import CustomerDecisionTree from "../src/components/CustomerDecisionTree";

function App() {
  return (
    <>
      <CustomerDecisionTree
        data={componentData.data}
        root={true}
        sizes={componentData.sizes}
      />
    </>
  );
}

export default App;
