import { Models } from 'node-appwrite';

type CardProps = {
  file: Models.Document;
};

const Card = ({ file }: CardProps) => {
  return <div>{file.name}</div>;
};

export default Card;
