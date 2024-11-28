/* eslint-disable no-unused-vars */
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const ListVirtualization = () => {
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  return (
    <>
      <div>ListVirtualization</div>
      <ul>
        <List height={300} width={'100%'} itemCount={items.length} itemSize={20}>
          {({ index, style }) => <li style={style}>{items[index]}</li>}
        </List>
      </ul>
    </>
  );
};

export default ListVirtualization;
