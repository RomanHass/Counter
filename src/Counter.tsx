import { Button } from "./Button";

type PropsType = {
  value: number
  onChange: (count: number) => void
}

export const Counter = ({value, onChange}: PropsType) => {

  const onClickIncreaseHandler = () => {
    onChange(value + 1)
  }

  const onClickResetHandler = () => {
    onChange(0)
  }

  return (
    <div className="counter container">
      <div className='counter__count'>
        {value}
      </div>
      <div className="counter__buttons">
        <Button
          title="inc"
          onClick={onClickIncreaseHandler}
        />
        <Button
          title="reset"
          onClick={onClickResetHandler}
        />
      </div>
    </div>
  );
};
