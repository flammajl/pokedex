import { MovesWrapper } from '@/styles/pages/Info';
import { InfoProps } from './About';

const Moves: React.FC<InfoProps> = ({ data }) => {
  return (
    <MovesWrapper>
      <div>
        {data.moves.map(move => (
          <p>{move.move.name}</p>
        ))}
      </div>
    </MovesWrapper>
  );
};

export default Moves;
