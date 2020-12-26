import { PokemonInfo } from '@/pages/pokemon/[pokemon]';
import About from './About';
import BaseStats from './BaseStats';
import Moves from './Moves';

interface DynamicProp {
  component: string;
  data: PokemonInfo;
}

const DynamicInfo: React.FC<DynamicProp> = ({ component, data }) => {
  switch (component) {
    case 'about':
      return <About data={data} />;
    case 'base':
      return <BaseStats data={data} />;
    case 'moves':
      return <Moves data={data} />;
    default:
      return <About data={data} />;
  }
};

export default DynamicInfo;
