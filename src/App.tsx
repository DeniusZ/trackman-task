import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { AppLayout } from "./ui/AppLayout";

import {
  Facilities,
  Locations,
  Players,
  AccessManagement,
  PageNotFound,
} from "./pages";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="facilities" />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="locations" element={<Locations />} />
            <Route path="players" element={<Players />} />
            <Route path="access-management" element={<AccessManagement />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
