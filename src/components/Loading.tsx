import { Container } from '@/styles/pages/Loading';
import Header from './Header';

const Loading: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Loading...</h1>
      </Container>
    </>
  );
};

export default Loading;
