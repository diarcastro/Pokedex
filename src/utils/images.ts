export const IMAGE_PATH = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
export const IMAGE_EXT = '.svg';

export const getImage = (id: number) => `${IMAGE_PATH}${id}${IMAGE_EXT}`;
