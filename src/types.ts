export type planetType = {
    name: string;
    images: {
          png: string;
          webp:string;
        },
    description: string;
    distance:string;
    travel: string;
}
export type PlanetNames = 'Moon' | 'Mars' | 'Europa' | 'Titan';

export type imagesType = {
  Moon: string;
  Mars: string;
  Europa: string;
  Titan: string;
}