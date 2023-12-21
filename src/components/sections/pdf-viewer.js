import React, { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import syllabusPdf from "../../assets/Creativa_UI_UX_Syllabus.pdf";
import { Document, Page } from "react-pdf";
import "../../style-assets/pdf-css.scss";

const PDFViewers = () => {
  const [searchParams] = useSearchParams();
  const link = searchParams.get("link");
  console.log(link);

  const [numPages, setNumPages] = useState();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="pdf-section">
      <Document file={syllabusPdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                width={screenSize.width - 17}
                pageNumber={page}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            );
          })}
      </Document>
    </div>
  );
};

export default PDFViewers;
