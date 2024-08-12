import { PLAYER } from '@/tic-tac-toe/constants';
import Square from '../Square/Square';
import S from './Squares';

function Squares() {
  const squares = Array(9).fill(null);
  const currentPlayer = PLAYER.ONE;

  return (
    <div className="Squares">
      {Squares.map((square, index) => {
        return <Square key={index}>{index + 1}</Square>;
      })}
    </div>
  );
}

export default Squares;
