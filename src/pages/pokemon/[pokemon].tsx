import api from '@/services/api';
import { TypeColors } from '@/styles/pages/Home';
import { useRouter } from 'next/router';
import { memo, useCallback, useEffect, useState } from 'react';
import { About, Section, Type } from '@/styles/pages/Pokemon';
import Link from 'next/link';
import SEO from '@/components/SEO';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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
  const [pokemonData, setPokemonData] = useState<PokemonInfo>(
    {} as PokemonInfo,
  );
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState('about');

  const router = useRouter();
  const { pokemon } = router.query;

  const getPokemonInfo = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`pokemon/${pokemon}`);
      setPokemonData(response.data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  }, [pokemon]);

  useEffect(() => {
    getPokemonInfo();
  }, [getPokemonInfo]);

  const handleInfo = useCallback((infoChange: string) => {
    setInfo(infoChange);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pokemonData.types) return null;

  return (
    pokemonData && (
      <Section pokemonType={pokemonData.types[0].type.name}>
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
            <div>
              <Image
                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonData.id}.png`}
                width={200}
                height={200}
              />
            </div>

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
