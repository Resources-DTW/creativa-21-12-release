

import AboutUs from './pages/about-us';
import Home from './pages/home';
import {  Routes, Route } from "react-router-dom";
import UpcomingBatches from './pages/upcoming-batches';
import OurStudentWorks from './pages/our-student-works';
import PDFViewers from './components/sections/pdf-viewer';
import Gallery from './pages/gallery';

// PDF Viewer Implementation
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  return (
    <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/upcoming-batches" element={<UpcomingBatches />} />
          <Route path="/our-student-works" element={<OurStudentWorks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pdf-viewer" element={<PDFViewers />} />
        { /*<Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
}

export default App;
