import { useDispatch, useSelector } from "react-redux";
import useScanDetection from "use-scan-detection";
import {setBarcode} from "../redux/slices/barcodeSlice";

const BarcodeScanner = () => {
  //const [barCodeScan, setBarCodeScan] = useState("No Barcode Scanned");
  

  const dispatch = useDispatch();
  const barcode = useSelector(
    (state) => state.barcodeScanner.barcode,
  );

  useScanDetection({
    onComplete: (code)=>{
      dispatch(setBarcode(code));
    },
    minLength: 3,
  });

  return (
    <div>

      <p>barcode: </p>
      <input type="text" value={barcode}/>
    </div>
  );
}

export default BarcodeScanner;
