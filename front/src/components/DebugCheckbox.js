import { useSelector, useDispatch } from "react-redux";
import { switchDebugValue } from "../app/features/debugCheckbox/debugCheckboxSlice";

export default function DebugCheckbox() {
  const dispatch = useDispatch();

  return (
    //<input type="checkbox" id="debug" onChange={handleCheckboxChange} value={DebugValue}/>
    //<input type="checkbox" id="debug" onChange={() => dispatch(switchDebugValue())} />
    <input type="checkbox" id="debug" onChange={(e) => dispatch(switchDebugValue(e.target.checked))} />
  );
}
