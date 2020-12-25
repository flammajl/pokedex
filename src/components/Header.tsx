import { Container } from '@/styles/pages/Header';
import Pokeball from '../assets/pokeball.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <div>
          <Pokeball />
        </div>
        <h1>Pokédex</h1>
      </div>
    </Container>
  );
};

export default Header;
