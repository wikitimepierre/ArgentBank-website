import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/debugCounter/debugCounterSlice";

const DebugCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span> {count} </span>
      <button onClick={() => dispatch(increment())}>+</button>
    </span>
  );
};

export default DebugCounter;