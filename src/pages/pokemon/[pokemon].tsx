import { TypeColors } from '@/styles/pages/Home';
import { useRouter } from 'next/router';
import { memo, useCallback, useState } from 'react';
import { About, Section, Type } from '@/styles/pages/Pokemon';
import Link from 'next/link';
import SEO from '@/components/SEO';
import dynamic from 'next/dynamic';
import { useFetch } from '@/hooks/useFetch';
import Image from 'next/image';
import ArrowLeft from '../../assets/arrow-left.svg';

export interface PokemonInfo {
  id: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  name: string;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: keyof typeof TypeColors;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  weight: number;
}

const DynamicComponent = dynamic(() => import('../../components/DynamicInfo'));

const Pokemon: React.FC = () => {
  const [info, setInfo] = useState('about');

  const router = useRouter();
  const { pokemon } = router.query;

  const { data: pokemonData } = useFetch<PokemonInfo>(`pokemon/${pokemon}`);

  const handleInfo = useCallback((infoChange: string) => {
    setInfo(infoChange);
  }, []);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  return (
    pokemonData && (
      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        pokemonType={pokemonData.types[0].type.name}
      >
        <SEO title={`${pokemonData.name} | Pokédex`} />

        <div>
          <section>
            <Link href="/">
              <a>
                <ArrowLeft />
              </a>
            </Link>
            <div>
              <h1>{pokemonData.name}</h1>
              <Type>
                {pokemonData.types.map(type => (
                  <div key={type.type.name}>
                    <h2>{type.type.name}</h2>
                  </div>
                ))}
              </Type>
            </div>
            <span>{`#${pokemonData.id}`}</span>
            <img src="/images/pokeball-bg-big.png" alt="pokeball" />
          </section>
        </div>
        <About>
          <div>
            <figure>
              <Image
                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`}
                width={200}
                height={200}
              />
            </figure>

            <ul>
              <li>
                <button onClick={() => handleInfo('about')} type="button">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleInfo('base')} type="button">
                  Base Stats
                </button>
              </li>
              <li>
                <button onClick={() => handleInfo('moves')} type="button">
                  Moves
                </button>
              </li>
            </ul>

            <DynamicComponent component={info} data={pokemonData} />
          </div>
        </About>
      </Section>
    )
  );
};

export default memo(Pokemon);
