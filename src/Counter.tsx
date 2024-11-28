import { Button } from "./Button";

type PropsType = {
  value: number
  startValue: number
  maxValue: number
  isDisabled: boolean
  message: string
  onChange: (count: number) => void
}


export const Counter = ({value, startValue, maxValue, isDisabled, message, onChange}: PropsType) => {

  const onClickIncreaseHandler = () => {
    if (value < maxValue) {
      onChange(value + 1)
    }
  }

  const onClickResetHandler = () => {
    onChange(startValue)
  }

  const incorrectUserMessage = startValue < 0 ||
                               maxValue < 0 ||
                               startValue === maxValue ||
                               startValue >= maxValue

  const isDisableButton = value === maxValue                               
                               
  return (
    <div className="counter container">
      <div className='counter__count'>
        {isDisabled || incorrectUserMessage ? (
          <div className="message-before-set">
            {incorrectUserMessage ? <div className="error-text">Icrorrect value!</div> : message}
          </div>
        ) : (
          <div className={value >= maxValue ? "overMaxValue" : ""}>{value}</div>
        )}
      </div>
      <div className="counter__buttons">
        <Button
          title="inc"
          disable={isDisabled || isDisableButton}
          onClick={onClickIncreaseHandler}
        />
        <Button
          title="reset"
          disable={isDisabled}
          onClick={onClickResetHandler}
        />
      </div>
    </div>
  );
};
