import Head from 'next/head';

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#fff" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Pokédex dos 151 primeiros pokemons"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta
        property="og:image"
        content="https://pokedex.flammajl.vercel.app/images/pokeball-og.jpg"
      />
      <meta
        property="og:image:secure_url"
        content="https://pokedex.flammajl.vercel.app/images/pokeball-og.jpg"
      />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="640" />
      <meta property="og:image:height" content="427" />
    </Head>
  );
};

export default SEO;
