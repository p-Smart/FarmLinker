import React from 'react';
import Stack from '@mui/material/Stack';

const Grid = ({ children, columns, sx, gridWrapSx, stackGrids='column' }) => {
  const totalChildren = React.Children.count(children);

  if (totalChildren <= columns) {
    return <Stack 
            direction={"row"}
            sx={sx}
            >{children}
            </Stack>
  } 
  else {
    const stackCount = Math.ceil(totalChildren / columns);
    const stacks = [];

    for (let i = 0; i < stackCount; i++) {
      const startIndex = i * columns;
      const endIndex = Math.min((i + 1) * columns, totalChildren);
      const stackChildren = React.Children.toArray(children).slice(startIndex, endIndex);

      stacks.push(
        <Stack 
        key={i} 
        direction={(stackGrids === 'column') ? "row" : "column"}
        sx={gridWrapSx}>
          {stackChildren}
        </Stack>
      );
    }

    return <Stack 
            direction={stackGrids}
            sx={sx}
            >
            {stacks}
            </Stack>;
  }
};

export default Grid;
