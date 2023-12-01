import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (id) => {
      setLoading(true);
      dispatch(thunk(id))
        .unwrap()
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [dispatch, thunk]
  );

  return [runThunk, loading, error];
};
