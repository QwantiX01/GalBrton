interface PaneProps {
  imageLink: string;
  title: string;
  link: string;
}

const Pane = ({ imageLink, title, link }: PaneProps) => {
  return (
    <a href={link}>
      <img
        className="w-full max-w-96 aspect-square rounded-xl"
        src={imageLink}
        alt=""
      />
      <p className="font-medium">{title}</p>
    </a>
  );
};

export default Pane;
