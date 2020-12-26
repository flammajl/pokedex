import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/Loading';
import api from '@/services/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  InputContainer,
  CardContainer,
  Card,
  TypeContainer,
  Type,
  AvatarContainer,
  TypeColors,
} from '@/styles/pages/Home';
import SEO from '@/components/SEO';

interface PokemonsProps {
  id: number;
  name: string;
  types: {
    type: {
      name: keyof typeof TypeColors;
    };
  }[];
  sprites: {
    front_default: string;
  };
}

interface PokemonNameProps {
  results: { name: string }[];
}

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pokemonList, setpokemonList] = useState<PokemonsProps[]>([]);
  const [pokemons, setPokemons] = useState<PokemonsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [listItem, setListItem] = useState(10);

  const getPokemon = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get<PokemonNameProps>('pokemon?limit=151');

      const names = response.data.results.map(pokemon => pokemon.name);

      const pokemonInfo = await Promise.all(
        names.map(async pokemonlist => {
          const results = await api.get<PokemonsProps>(
            `pokemon/${pokemonlist}`,
          );
          return results.data;
        }),
      );

      if (pokemonInfo) {
        setpokemonList(pokemonInfo);
        setPokemons(pokemonInfo);
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPokemon();

    let wait = false;

    const infiniteScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (!wait && scroll > height) {
        wait = true;
        setListItem(item => item + 10);
        setTimeout(() => {
          wait = false;
        }, 500);
      }
    };

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [getPokemon]);

  const handleSearch = useCallback(() => {
    const inputValue = inputRef.current.value;
    if (pokemonList) {
      const match = pokemonList.filter(item => {
        if (item.name.includes(inputValue.toLowerCase())) {
          return item;
        }
        return null;
      });

      setPokemons(match);
    }
  }, [pokemonList]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <SEO title="Pokédex" />
      <Container>
        <InputContainer>
          <label htmlFor="search">Search</label>
          <input
            ref={inputRef}
            id="search"
            type="text"
            placeholder="Seach pokemons by name"
            onChange={handleSearch}
          />
        </InputContainer>

        <CardContainer>
          {pokemons &&
            pokemons.slice(0, listItem).map(pokemon => (
              <Link href={`/pokemon/${pokemon.name}`} key={pokemon.id}>
                <a>
                  <Card type={pokemon.types[0].type.name}>
                    <span>{`#${pokemon.id}`}</span>
                    <div>
                      <h1>{pokemon.name}</h1>
                      <TypeContainer>
                        <Type>
                          {pokemon.types &&
                            pokemon.types.map(type => (
                              <div key={`${type.type.name}`}>
                                <h2>{type.type.name}</h2>
                              </div>
                            ))}
                        </Type>
                        <AvatarContainer>
                          {pokemon.sprites && (
                            <Image
                              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                              width={64}
                              height={64}
                            />
                          )}
                        </AvatarContainer>
                      </TypeContainer>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default Home;
