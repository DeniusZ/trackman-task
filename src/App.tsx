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

const facilities = [
  {
    name: "Green Valley Golf Club",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    openingTime: "9:00",
    closingTime: "17:00",
    imageUrl: "url1",
    index: 0,
    isDefault: true,
  },
  {
    name: "Green Valley Golf Club 2",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    openingTime: "8:00",
    closingTime: "18:00",
    imageUrl: "url1",
    index: 1,
    isDefault: false,
  },
  {
    name: "Green Valley Golf Club 3",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    openingTime: "8:00",
    closingTime: "18:00",
    imageUrl: "url1",
    index: 2,
    isDefault: false,
  },
  {
    name: "Green Valley Golf Club 4",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    openingTime: "8:00",
    closingTime: "18:00",
    imageUrl: "url1",
    index: 3,
    isDefault: false,
  },
  {
    name: "Green Valley Golf Club 5",
    address: "123 Fairway Drive, Copenhagen, Denmark",
    openingTime: "14:00",
    closingTime: "22:00",
    imageUrl: "url1",
    index: 4,
    isDefault: false,
  },
];

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="facilities" />} />
            <Route
              path="facilities"
              element={<Facilities facilities={facilities} />}
            />
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
