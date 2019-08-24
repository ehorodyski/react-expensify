import React from 'react';

export const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing expense {props.match.params.id}
    </div>
  );
};