import { Container } from '@/styles/pages/Loading';
import Pokeball from '../assets/pokeball-black.svg';

const Loading: React.FC = () => {
  return (
    <>
      <Container>
        <Pokeball />
        <p>Loading...</p>
      </Container>
    </>
  );
};

export default Loading;
