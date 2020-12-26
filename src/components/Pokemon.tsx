import { useFetch } from '@/hooks/useFetch';
import {
  AvatarContainer,
  Card,
  Type,
  TypeColors,
  TypeContainer,
} from '@/styles/pages/Home';
import Image from 'next/image';
import Link from 'next/link';
import Loading from './Loading';

interface PokemonProps {
  pokemonName: string;
}

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

const Pokemon: React.FC<PokemonProps> = ({ pokemonName }) => {
  const { data: pokemon } = useFetch<PokemonsProps>(`pokemon/${pokemonName}`);

  if (!pokemon) {
    return <Loading />;
  }

  return (
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
  );
};

export default Pokemon;
