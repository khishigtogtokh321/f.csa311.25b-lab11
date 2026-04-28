import React from 'react';
import { Cell } from './game';

interface Props {
  cell: Cell
}

class BoardCell extends React.Component<Props> {
  render(): React.ReactNode {
    const playable = this.props.cell.playable ? 'playable' : '';
    const mark = this.props.cell.text === 'X' ? 'x-mark'
      : this.props.cell.text === 'O' ? 'o-mark' : '';

    // Render neon X and O characters
    const display = this.props.cell.text === 'X' ? '✕'
      : this.props.cell.text === 'O' ? '○' : '';

    return (
      <div className={`cell ${playable} ${mark}`}>{display}</div>
    )
  }
}

export default BoardCell;