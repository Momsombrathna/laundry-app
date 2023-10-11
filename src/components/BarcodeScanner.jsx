import React, { useState } from "react";
import useScanDetection from "use-scan-detection";

function BarcodeScanner(props) {
  const [barCodeScan, setBarCodeScan] = useState("No Barcode Scanned");

  useScanDetection({
    onComplete: setBarCodeScan,
    minLength: 3,
  });

  return (
    <div>
      <p> Barcode : </p>
      <p>{barCodeScan}</p>
    </div>
  );
}

export default BarcodeScanner;
