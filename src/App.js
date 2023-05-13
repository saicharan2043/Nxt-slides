import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import LeftSideBar from './components/LeftSideBar'

import RightSideBar from './components/RightSideBar'

import AllContext from './context/AllContext'

import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeId: 'cc6e1752-a063-11ec-b909-0242ac120002',
    cardList: initialSlidesList,
    isHeadingInputTrue: false,
    isDescriptionTrue: false,
  }

  ClickActive = id => {
    this.setState({
      activeId: id,
      isHeadingInputTrue: false,
      isDescriptionTrue: false,
    })
  }

  addNewItem = () => {
    const {activeId, cardList} = this.state
    const newValue = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const findIndex = cardList.findIndex(echValue => {
      if (echValue.id === activeId) {
        return true
      }
      return false
    })

    const updatedList = cardList.splice(findIndex + 1, 0, newValue)
    console.log(cardList)
    this.setState({cardList, activeId: newValue.id})
  }

  onBlurHeading = () => {
    console.log('hello')
    this.setState({isHeadingInputTrue: false, isDescriptionTrue: false})
  }

  headingInputClick = () => {
    this.setState({isHeadingInputTrue: true, isDescriptionTrue: false})
  }

  clickDescriptionInput = () => {
    this.setState({isHeadingInputTrue: false, isDescriptionTrue: true})
  }

  changeHeadingValue = value => {
    const {activeId} = this.state
    this.setState(priousValue => ({
      cardList: [
        ...priousValue.cardList.map(echValue => {
          if (echValue.id === activeId) {
            return {...echValue, heading: value}
          }
          return echValue
        }),
      ],
    }))
  }

  changeDescriptionValue = value => {
    const {activeId} = this.state
    this.setState(priousValue => ({
      cardList: [
        ...priousValue.cardList.map(echValue => {
          if (echValue.id === activeId) {
            return {...echValue, description: value}
          }
          return echValue
        }),
      ],
    }))
  }

  render() {
    const {
      activeId,
      cardList,
      isHeadingInputTrue,
      isDescriptionTrue,
    } = this.state
    return (
      <AllContext.Provider
        value={{
          activeId,
          cardList,
          isHeadingInputTrue,
          isDescriptionTrue,
          ClickActive: this.ClickActive,
          headingInputClick: this.headingInputClick,
          clickDescriptionInput: this.clickDescriptionInput,
          changeHeadingValue: this.changeHeadingValue,
          changeDescriptionValue: this.changeDescriptionValue,
          onBlurHeading: this.onBlurHeading,
        }}
      >
        <>
          <nav className="Navbar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
              alt="nxt slides logo"
              className="Img"
            />
            <h1 className="HeadingNavbar">Nxt Slides</h1>
          </nav>
          <div className="MeinContainer">
            <button className="NewItemContainer" onClick={this.addNewItem}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                alt="new plus icon"
                className="PlusImg"
              />
              <p className="TextOfNewItem">New</p>
            </button>
            <div className="BottomContainer">
              <LeftSideBar listOfValues={initialSlidesList} />
              <RightSideBar />
            </div>
          </div>
        </>
      </AllContext.Provider>
    )
  }
}

export default App
