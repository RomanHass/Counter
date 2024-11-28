import { ChangeEvent, useState } from "react"
import { Button } from "./Button"

type PropsType = {
  startValue: number
  maxValue: number
  changeMaxValue: (maxValue: number) => void
  changeStartValue: (startValue: number) => void
  changeDisableStatus: (isDisabled: boolean) => void
  onSetClick: () => void
  onSet: (start: number, max: number) => void
}

export const SettingCounterBlock = ({startValue, maxValue, changeMaxValue, changeStartValue, changeDisableStatus, onSetClick, onSet}: PropsType) => {

  const [disaledButton, setDisabledButton] = useState(true)

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Number(e.currentTarget.value);
    changeMaxValue(newMaxValue)
    updateDisabledButton(startValue, newMaxValue)
    changeDisableStatus(true)
  }

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = Number(e.currentTarget.value);
    changeStartValue(newStartValue)
    updateDisabledButton(newStartValue, maxValue)
    changeDisableStatus(true)
  }

  const validateInputClass = (startValue: number, maxValue: number, currentValue: number) => {
    if (currentValue < 0) return 'error'
    if (startValue === maxValue) return 'error'
    if (startValue > maxValue) return 'error'
  }

  const updateDisabledButton = (startValue: number, maxValue: number) => {
    let isValid = startValue < maxValue && startValue >= 0 && maxValue >= 0
    setDisabledButton(!isValid)
  }

  const onClicSetkHandler = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    setDisabledButton(true)
    changeDisableStatus(false)
    onSetClick()
    onSet(startValue, maxValue)
  }

  return (
    <div className="settings-counter container">
      <div className="settings-counter__block">
        <div className="settings-counter__max-box settings-counter--flex">
          <label htmlFor="maxValue">max value:</label> 
          <input id="maxValue"
                 className={validateInputClass(startValue, maxValue, maxValue)}
                 type="number" 
                 value={maxValue}
                 onChange={onChangeMaxValueHandler}
          />
        </div>
        <div className="settings-counter__start-box settings-counter--flex">
          <label htmlFor="startValue">start value:</label> 
          <input id="startValue" 
                 className={validateInputClass(startValue, maxValue, startValue)}
                 type="number" 
                 value={startValue}
                 onChange={onChangeStartValueHandler}
          />
        </div>
      </div>
      <div className="counter__buttons">
        <Button title="set" 
                disable={disaledButton} 
                onClick={onClicSetkHandler}
        />
      </div>
    </div>
  )
}