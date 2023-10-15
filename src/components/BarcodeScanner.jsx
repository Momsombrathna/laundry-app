import React, { useState } from 'react';
import useScanDetection from 'use-scan-detection';

const BarcodeScanner = ({ onBarcodeScan }) => {
  const [barcode, setBarcode] = useState('No Barcode Scanned');

  useScanDetection({
    onComplete: (scannedBarcode) => {
      setBarcode(scannedBarcode);
      onBarcodeScan(scannedBarcode); // Pass the scanned barcode to the parent component
    },
    minLength: 3,
  });

  return (
    <div>
      <p>Barcode:</p>
      <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} />
    </div>
  );
};

export default BarcodeScanner;