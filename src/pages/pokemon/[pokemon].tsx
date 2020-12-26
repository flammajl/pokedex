import api from '@/services/api';
import { TypeColors } from '@/styles/pages/Home';
import { useRouter } from 'next/router';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { About, Section, Type, Info } from '@/styles/pages/Pokemon';
import Link from 'next/link';
import SEO from '@/components/SEO';
import Image from 'next/image';
import ArrowLeft from '../../assets/arrow-left.svg';

interface PokemonInfo {
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
  weight: number;
}

const Pokemon: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonInfo>(
    {} as PokemonInfo,
  );
  const [loading, setLoading] = useState(false);

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

  const weight = useMemo(() => {
    return pokemonData.weight / 10;
  }, [pokemonData.weight]);

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
              <li>About</li>
              <li>Base Stats</li>
              <li>Moves</li>
            </ul>

            <Info>
              <div>
                <div>
                  <h3>Weight</h3>
                  <span>{`${weight} Kg`}</span>
                </div>

                <div>
                  <h3>Abilities</h3>
                  <ul>
                    {pokemonData.abilities.map(ability => (
                      <li key={ability.ability.name}>{ability.ability.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Info>
          </div>
        </About>
      </Section>
    )
  );
};

export default memo(Pokemon);
