import { ViewWordsByCategorySet, ViewIndex } from "@views/index";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { ROUTE_WORDS_CATEGORY, ROUTE_HOME } from "@constants";

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={""} element={<MainLayout />} errorElement={<></>}>
      <Route path={ROUTE_HOME} element={<ViewIndex />} />
      <Route path={ROUTE_WORDS_CATEGORY} element={<ViewWordsByCategorySet />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
