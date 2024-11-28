import { Button } from "./Button"

type PropsType = {
  startValue: number
  maxValue: number
}

export const SettingCounterBlock = ({startValue, maxValue}: PropsType) => {

  return (
    <div className="settings-counter container">
      <div className="settings-counter__block">
        <div className="settings-counter__max-box settings-counter--flex">
          <span>max value:</span> 
          <input type="number" 
                 value={maxValue}
          />
        </div>
        <div className="settings-counter__start-box settings-counter--flex">
          <span>start value:</span> 
          <input type="number" 
                 value={startValue}
          />
        </div>
      </div>
      <div className="counter__buttons">
        <Button title="set" onClick={() => {}} />
      </div>
    </div>
  )
}