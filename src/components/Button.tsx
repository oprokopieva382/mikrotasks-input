type ButtonPropsType = {
  name: string;
  callback: () => void;
};

export const Button = (props: ButtonPropsType) => {
  const OnClickButtonChange = () => {
    props.callback();
  };

  return <button onClick={OnClickButtonChange}>{props.name}</button>;
};
