import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const baseUrlFallback = "https://libraryone.com";

const Seo = ({ title, description, path = "/", image = "/og-image.png" }: SeoProps) => {
  const siteName = "LibraryOne";
  const fullTitle = `${title} | ${siteName}`;

  const origin =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : baseUrlFallback;

  const url = `${origin}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;

