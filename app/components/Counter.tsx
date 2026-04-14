'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../features/counterSlice';
import type { RootState, AppDispatch } from '../../lib/store';

export default function Counter({pageName = 'Home'}: {pageName: string}) {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h3>{pageName} Count:::: {count}</h3>
      <button onClick={() => dispatch(increment())}>cnt +</button>
    </div>
  );
}
