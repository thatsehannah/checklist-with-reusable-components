import { useState } from 'react';
import { IdValue } from './types';

export function useChecked() {
  const [checkedIds, setCheckedIds] = useState<IdValue[]>([]);

  const handleCheckChange = (checkedId: IdValue) => () => {
    const isChecked = checkedIds.includes(checkedId);
    let newCheckedIds = isChecked
      ? checkedIds.filter((itemCheckedId) => itemCheckedId !== checkedId)
      : checkedIds.concat(checkedId);
    setCheckedIds(newCheckedIds);
  };

  return { checkedIds, handleCheckChange };
}
