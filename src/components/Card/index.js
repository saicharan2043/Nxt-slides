import './index.css'
import AllContext from '../../context/AllContext'

const Card = props => {
  const {cardValue} = props
  const {heading, description, id} = cardValue

  return (
    <AllContext.Consumer>
      {value => {
        const {activeId, ClickActive, cardList} = value
        const ActiveCss = activeId === id ? 'active-color' : ''
        const activeBtnClick = () => {
          ClickActive(id)
        }
        const findIndex = cardList.findIndex(echValue => {
          if (echValue.id === id) {
            return true
          }
          return false
        })
        console.log(findIndex)

        return (
          <li
            className={`ListContainer ${ActiveCss}`}
            onClick={activeBtnClick}
            testid={`slideTab${findIndex + 1}`}
          >
            <p className="CountOfList">{findIndex + 1}</p>
            <div className="DisplayContainer">
              <h1 className="HeadingCourse">{heading}</h1>
              <p className="DescriptionCourse">{description}</p>
            </div>
          </li>
        )
      }}
    </AllContext.Consumer>
  )
}

export default Card
