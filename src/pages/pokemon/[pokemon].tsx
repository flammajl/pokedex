import { TypeColors } from '@/styles/pages/Home';
import { memo, useCallback, useState } from 'react';
import { About, Section, Type } from '@/styles/pages/Pokemon';
import Link from 'next/link';
import SEO from '@/components/SEO';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import api from '@/services/api';
import Loading from '@/components/Loading';
import ArrowLeft from '../../assets/arrow-left.svg';

interface PokemonNameProps {
  results: { name: string }[];
}

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

interface DataProps {
  data: PokemonInfo;
}

const DynamicComponent = dynamic(() => import('../../components/DynamicInfo'));

const Pokemon: React.FC<DataProps> = ({ data }) => {
  const [info, setInfo] = useState('about');

  const handleInfo = useCallback((infoChange: string) => {
    setInfo(infoChange);
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      pokemonType={data.types[0].type.name}
    >
      <SEO title={`${data.name} | Pokédex`} />

      <div>
        <section>
          <Link href="/">
            <a>
              <ArrowLeft />
            </a>
          </Link>
          <div>
            <h1>{data.name}</h1>
            <Type>
              {data.types.map(type => (
                <div key={type.type.name}>
                  <h2>{type.type.name}</h2>
                </div>
              ))}
            </Type>
          </div>
          <span>{`#${data.id}`}</span>
          <img src="/images/pokeball-bg-big.png" alt="pokeball" />
        </section>
      </div>
      <About>
        <div>
          <figure>
            <Image
              src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}
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

          <DynamicComponent component={info} data={data} />
        </div>
      </About>
    </Section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<PokemonNameProps>('pokemon?limit=151');

  const paths = response.data.results.map(name => {
    return {
      params: { pokemon: name.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DataProps> = async context => {
  const { pokemon } = context.params;
  const response = await api.get<PokemonInfo>(`pokemon/${pokemon}`);

  const { data } = response;

  return {
    props: {
      data,
    },
  };
};

export default memo(Pokemon);
