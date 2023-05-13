import AllContext from '../../context/AllContext'
import './index.css'

const RightSideBar = () => (
  <AllContext.Consumer>
    {value => {
      const {
        activeId,
        cardList,
        onBlurHeading,
        isHeadingInputTrue,
        isDescriptionTrue,
        headingInputClick,
        clickDescriptionInput,
        changeHeadingValue,
        changeDescriptionValue,
      } = value
      const spacificList = cardList.filter(echValue => echValue.id === activeId)
      const {heading, description} = spacificList[0]

      const changeHeading = event => {
        changeHeadingValue(event.target.value)
      }

      const changeDescription = event => {
        changeDescriptionValue(event.target.value)
      }

      const clickHeading = () => {
        headingInputClick()
      }

      const ClickDescription = () => {
        clickDescriptionInput()
      }

      const blurHeading = () => {
        onBlurHeading()
      }

      return (
        <div className="RightContainer">
          {isHeadingInputTrue ? (
            <input
              type="text"
              className="InputHeading"
              value={heading}
              onChange={changeHeading}
              onBlur={blurHeading}
            />
          ) : (
            <h1 className="HeadingRightSide" onClick={clickHeading}>
              {heading}
            </h1>
          )}
          {isDescriptionTrue ? (
            <input
              type="text"
              className="InputDescription"
              value={description}
              onBlur={blurHeading}
            />
          ) : (
            <p className="DescriptionRightSide" onClick={ClickDescription}>
              {description}
            </p>
          )}
        </div>
      )
    }}
  </AllContext.Consumer>
)

export default RightSideBar
