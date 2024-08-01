import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes.index";
import Default from "./components/Default/Default";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? Default : Fragment;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
