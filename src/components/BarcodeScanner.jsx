import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import JsBarcode from 'jsbarcode';

const BarcodeScanner = () => {
  const webcamRef = useRef(null);
  const [scannedCode, setScannedCode] = useState('');

  const handleBarcodeScanned = (result) => {
    setScannedCode(result.text);
  };

  const captureBarcode = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    JsBarcode("#barcode-canvas", imageSrc, {
      format: "CODE128",
      displayValue: false,
    });
    

    const barcodeData = JsBarcode("#barcode-canvas")
      .toDataURL()
      .replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
    handleBarcodeScanned(barcodeData);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/png" />
      <button onClick={captureBarcode}>Scan Barcode</button>
      <canvas id="barcode-canvas" style={{ display: 'none' }}></canvas>
      <p>Scanned Code: {scannedCode}</p>
    </div>
  );
};

export default BarcodeScanner;