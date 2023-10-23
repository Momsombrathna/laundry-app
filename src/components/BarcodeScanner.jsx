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

    <>
        <br />
        <div >
          <input placeholder="scan to show" className="text-center"
            style={{width: 'auto', 
              height: '35px',
              borderRadius: '5px', 
              border: '1px solid gray'}}
              type="text"
              value={barcode}/>
        </div>
    </>
  );
}

export default BarcodeScanner;
