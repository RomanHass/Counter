import { Button } from "./Button";

type PropsType = {
  value: number;
}

export const Counter = ({value}: PropsType) => {

  return (
    <div className="counter container">
      <div className='counter__count'>
        {value}
      </div>
      <div className="counter__buttons">
        <Button
          title="inc"
        />
        <Button
          title="reset"
        />
      </div>
    </div>
  );
};
