export type CardProps = {
  name: string;
  title: string;
  img: string;
  action: string;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="carta">
      <img className="image-project" src={props.img} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.name}</p>

        <form action={props.action}>
          <button>Ver</button>
        </form>
      </div>
    </div>
  );
};

export default Card;
