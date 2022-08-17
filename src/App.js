import React from "react";
import { Routes, Route } from 'react-router-dom';
import Preview from "./content-component/preview-license";
import TrackingDetail from "./content-component/tracking-detail";
import Tracking from "./content-component/tracking-main";
import Wrongpage from "./content-component/wrongpage";
import Footer from "./menu-component/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="tracking" element={<Tracking />} />
        <Route path="tracking-detail" element={<TrackingDetail />} />
        <Route path="preview" element={<Preview />} />
        <Route path="*" element={<Wrongpage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
