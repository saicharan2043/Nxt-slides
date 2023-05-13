import React from 'react'

const AllContext = React.createContext({
  activeId: 'cc6e1752-a063-11ec-b909-0242ac120002',
  ClickActive: () => {},
  cardList: [],
  isHeadingInputTrue: false,
  isDescriptionTrue: false,
  headingInputClick: () => {},
  clickDescriptionInput: () => {},
  changeHeadingValue: () => {},
  changeDescriptionValue: () => {},
  onBlurHeading: () => {},
})

export default AllContext
