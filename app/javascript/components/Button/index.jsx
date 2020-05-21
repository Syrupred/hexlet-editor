import React from 'react';
import { useRunCode } from '../../slices/editor';


export const Button = () => {
  const { runCode } = useRunCode();

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={runCode}
    >
      Run
    </button>
  );
};
