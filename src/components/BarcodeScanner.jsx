import React, { useState } from 'react';
import useScanDetection from 'use-scan-detection';

const BarcodeScanner = ({ onItemSelection }) => {
  const [barcode, setBarcodeScan] = useState('No Barcode Scanned');

  useScanDetection({
    onComplete: (scannedBarcode) => {
      setBarcodeScan(scannedBarcode);
      onItemSelection(scannedBarcode); // Pass the scanned barcode to the parent component
    },
    minLength: 3,
  });

  return (
    <div>
      <p>Barcode:</p>
      <p>{barcode}</p> 
    </div>
  );
};

export default BarcodeScanner;