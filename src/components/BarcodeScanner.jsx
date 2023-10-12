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
      <p style={{ fontFamily: 'sans-serif' ,fontSize: 15,color: 'white'}}>Barcode: </p>
      <p><input type="text" value={barCodeScan} onChange={(e) => setBarCodeScan(e.target.value)} style={{backgroundColor: 'blue ',width:'200px',height:'100px',fontSize: 20,fontFamily: 'sans-serif',textAlign: 'center'}} /></p>
    </div>
  );
}

export default BarcodeScanner;
