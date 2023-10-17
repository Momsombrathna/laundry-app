import { useDispatch, useSelector } from "react-redux";
import useScanDetection from "use-scan-detection";
import {setBarcode} from "../redux/slices/appSlice";

const BarcodeScanner = () => {
  
  const dispatch = useDispatch();
  const barcode = useSelector(
    (state) => state.sliceItems.barcode,
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
