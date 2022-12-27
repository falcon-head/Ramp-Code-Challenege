import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      >
        <input
          id={inputId}
          style={{ backgroundColor: "#000000", height: "30px" }}
          type="checkbox"
          className="RampInputCheckbox--input"
          checked={checked}
          disabled={disabled}
          onChange={() => {
            console.log("Click the check box")
            onChange(!checked)
          }}
        />
      </label>
    </div>
  )
}
