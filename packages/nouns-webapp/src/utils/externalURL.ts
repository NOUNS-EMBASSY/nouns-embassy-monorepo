export enum ExternalURL {
  discord,
  twitter,
  notion,
  discourse,
  nounsCenter,
  instagram,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.discord:
      return 'https://discord.gg/ZyxSUXbn';
    case ExternalURL.twitter:
      return 'https://twitter.com/LarhribAmine';
    case ExternalURL.notion:
      return 'https://nouns.notion.site/Explore-Nouns-a2a9dceeb1d54e10b9cbf3f931c2266f';
    case ExternalURL.discourse:
      return 'https://embassydao.discoursehosting.net';
    case ExternalURL.nounsCenter:
      return 'https://nouns.center/';
    case ExternalURL.instagram:
      return 'https://www.instagram.com/z_of_zillion';
  }
};
