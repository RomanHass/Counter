import { ChangeEvent } from "react"
import { Button } from "./Button"

type PropsType = {
  startValue: number
  maxValue: number
  changeMaxValue: (maxValue: number) => void
  changeStartValue: (startValue: number) => void
}

export const SettingCounterBlock = ({startValue, maxValue, changeMaxValue, changeStartValue}: PropsType) => {

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeMaxValue(Number(e.currentTarget.value))
  }

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeStartValue(Number(e.currentTarget.value))
  }

  return (
    <div className="settings-counter container">
      <div className="settings-counter__block">
        <div className="settings-counter__max-box settings-counter--flex">
          <span>max value:</span> 
          <input type="number" 
                 value={maxValue}
                 onChange={onChangeMaxValueHandler}
          />
        </div>
        <div className="settings-counter__start-box settings-counter--flex">
          <span>start value:</span> 
          <input type="number" 
                 value={startValue}
                 onChange={onChangeStartValueHandler}
          />
        </div>
      </div>
      <div className="counter__buttons">
        <Button title="set" onClick={() => {}} />
      </div>
    </div>
  )
}