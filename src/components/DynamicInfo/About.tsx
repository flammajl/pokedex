import { PokemonInfo } from '@/pages/pokemon/[pokemon]';
import { Info } from '@/styles/pages/Info';
import { useMemo } from 'react';

export interface InfoProps {
  data: PokemonInfo;
}

const About: React.FC<InfoProps> = ({ data }) => {
  const weight = useMemo(() => {
    return data.weight / 10;
  }, [data.weight]);

  return (
    <Info>
      <div>
        <div>
          <h3>Weight</h3>
          <span>{`${weight} Kg`}</span>
        </div>

        <div>
          <h3>Abilities</h3>
          <ul>
            {data.abilities.map(ability => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Info>
  );
};

export default About;
