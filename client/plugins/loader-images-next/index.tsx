interface imageLoaderInterface {
  src: string;
}
export const imageLoader = ({ src }: imageLoaderInterface) => {
  return `/static/images/${src}`;
};
