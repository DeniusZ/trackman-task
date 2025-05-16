import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { AppLayout } from "./components/AppLayout";

import {
  Facilities,
  Locations,
  Players,
  AccessManagement,
  PageNotFound,
} from "./pages";
import { CreateFacility } from "./pages/CreateFacility";
import { EditFacility } from "./pages/EditFacility";
import { FacilitiesProvider } from "./contexts/FacilitiesContext";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <FacilitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="facilities" />} />
              <Route path="facilities" element={<Facilities />} />
              <Route path="facilities/new" element={<CreateFacility />} />
              <Route path="facilities/:id" element={<EditFacility />} />

              <Route path="locations" element={<Locations />} />
              <Route path="players" element={<Players />} />
              <Route path="access-management" element={<AccessManagement />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FacilitiesProvider>
    </>
  );
};

export default App;
