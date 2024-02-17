import { useEffect, useState } from "react"
import "./app.scss"
import "./App.css"
import DropDown from "./components/dropDown"
import AddedItem from "./components/addItem"

const OPTIONS: string[] = ["Education", "Art", "Sports"]

function App() {
  const [availableOptions, setAvailableOptions] = useState<string[]>(OPTIONS)
  const [option, setOption] = useState<string[]>([])
  const [showDropDown, setShowDropDown] = useState<boolean>(true)
  const handleSelect = (item: string) => {
    if (!option.includes(item)) {
      setOption([...option, item])
    } else {
      setOption(option.filter((selectedOption) => selectedOption !== item))
    }
  }

  const handleAddItem = (value: string) => {
    setAvailableOptions([...availableOptions, value])
  }

  const handleAddInputClick = () => {
    setShowDropDown(true)
  }

  useEffect(() => {
    document.body.addEventListener("click", () => setShowDropDown(false))
  }, [showDropDown])

  return (
    <div className="dropdownContainer">
      <div className="selectedOptions">{option?.join(",")}</div>
      <AddedItem
        addedItem={(value) => handleAddItem(value)}
        inputOnClickEvent={handleAddInputClick}
      />
      {showDropDown && (
        <DropDown
          options={availableOptions}
          selectItems={option}
          handleSelect={handleSelect}
        />
      )}
    </div>
  )
}

export default App
