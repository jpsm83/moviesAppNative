import 'dotenv/config';

export default {
  expo: {
    name: "2025-rn-movies",
    slug: "2025-rn-movies",
    extra: {
      TMDB_API_TOKEN: process.env.TMDB_API_TOKEN,
    },
  },
};
