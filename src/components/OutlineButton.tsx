interface LinkProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  action: Function;
  children: string;
  isOutline: boolean;
  disabled: boolean;
}

const OutlineLink = ({
  action,
  children,
  isOutline = false,
  disabled = true,
}: LinkProps) => {
  const styles = `text-lg font-medium  ${
    isOutline ? "bg-alto-200 text-black px-4 py-2 rounded-lg font-black" : ""
  }`;
  return (
    <>
      <button disabled={disabled} className={styles} onClick={() => action()}>
        {children}
      </button>
    </>
  );
};

export default OutlineLink;
