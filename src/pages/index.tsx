import Header from '@/components/Header';
import Loading from '@/components/Loading';
import api from '@/services/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Container, InputContainer, CardContainer } from '@/styles/pages/Home';
import SEO from '@/components/SEO';
import Pokemon from '@/components/Pokemon';
import useSWR from 'swr';

interface PokemonNameProps {
  results: { name: string }[];
}

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [listItem, setListItem] = useState(10);

  const { data } = useSWR('pokemon?limit=151', async urlFetch => {
    const response = await api.get<PokemonNameProps>(urlFetch);

    const names = response.data.results.map(name => name.name);

    return names;
  });

  useEffect(() => {
    setPokemons(data);
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
  }, [data]);

  const handleSearch = useCallback(() => {
    const inputValue = inputRef.current.value;
    if (data) {
      const match = data.filter(item => {
        if (item.includes(inputValue.toLowerCase())) {
          return item;
        }
        return null;
      });

      setPokemons(match);
    }
  }, [data]);

  if (!data) {
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
            pokemons
              .slice(0, listItem)
              .map(pokemon => <Pokemon key={pokemon} pokemonName={pokemon} />)}
        </CardContainer>
      </Container>
    </>
  );
};

export default Home;
