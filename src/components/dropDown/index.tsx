import "./dropdown.scss"
const DropDown = ({
  options,
  handleSelect,
  selectItems,
}: {
  options: string[]
  selectItems: string[]
  handleSelect: (item: string) => void
}) => {
  const onSelectClick = (item: string, e: { stopPropagation: () => void }) => {
    handleSelect(item)
    e.stopPropagation()
  }
  return (
    <div className="dropdownContainer" onClick={(e) => e.stopPropagation()}>
      <ul className="dropdownWrap">
        {options.map((item, index) => (
          <li
            key={`${item}${index}`}
            onClick={(e) => onSelectClick(item, e)}
            className={`${selectItems.includes(item) ? "active" : ""}`}>
            <span>{item}</span>
            {selectItems.includes(item) ? <span>✓</span> : ""}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDown
