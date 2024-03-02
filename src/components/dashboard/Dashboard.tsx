import SideNav from "../side-nav/SideNav";
import Header from "../header/Header";
import CustomerDecisionTree from "../customer-decision-tree/CustomerDecisionTree";
import { componentData } from "../../data/cdt-data";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1">
        <Header />
        <main className="p-6 overflow-auto">
          <CustomerDecisionTree
            data={componentData.data}
            root={true}
            sizes={componentData.sizes}
          />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
