import Card from '../Card'

import './index.css'
import AllContext from '../../context/AllContext'

const LeftSideBar = () => (
  <AllContext.Consumer>
    {value => {
      const {cardList} = value
      console.log(cardList)
      return (
        <div className="SideBarContainer">
          <ol className="UnOrderList">
            {cardList.map(echValue => (
              <Card cardValue={echValue} key={echValue.id} />
            ))}
          </ol>
        </div>
      )
    }}
  </AllContext.Consumer>
)

export default LeftSideBar
