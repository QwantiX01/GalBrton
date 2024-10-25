interface PaneProps {
  imageLink: string;
  link: string;
}

const Pane = ({ imageLink, link }: PaneProps) => {
  return (
    <a href={link}>
      <img
        className="max-w-96 aspect-square rounded-xl"
        src={imageLink}
        alt=""
      />
    </a>
  );
};

export default Pane;
