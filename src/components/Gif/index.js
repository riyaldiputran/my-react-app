export default function GifComponent(props) {
    return (
      <div>
        <p>{props.title}</p>
        <img src={props.url} alt="Gif" />
      </div>
    );
  }
  