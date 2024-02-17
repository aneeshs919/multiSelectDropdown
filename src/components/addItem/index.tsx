import { KeyboardEvent, useState } from "react"
import "./addItem.scss"

const AddItem = ({
  addedItem,
  inputOnClickEvent,
}: {
  addedItem: (value: string) => void
  inputOnClickEvent: () => void
}) => {
  const [value, setValue] = useState<string>("")
  const handleAdd = () => {
    if (!value) return
    addedItem(value)
    setValue("")
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd()
    }
  }

  const handleOnclick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    inputOnClickEvent()
  }
  return (
    <input
      className="dropdownWrap"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => handleEnter(e)}
      onClick={(e) => handleOnclick(e)}
      placeholder="Add Item"
    />
  )
}

export default AddItem
