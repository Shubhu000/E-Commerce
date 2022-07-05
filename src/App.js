import React from "react";
import Layout from "./components/common/Layout/Layout";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <div>
      <Layout>
        <PrivateRoutes />
      </Layout>
    </div>
  );
};

export default App;
