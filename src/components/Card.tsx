export type CardProps = {
  name: string;
  title: string;
  img: string;
  action: string;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <a href={props.action} className="card-a">
    <div className="card">
      <img className="image-project" src={props.img} />
      <div className="card-content">
        <h3>{props.title}</h3>
      </div>
    </div>
    </a>
  );
};

export default Card;
