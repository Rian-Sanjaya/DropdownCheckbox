import React from 'react';
import DropdownCheckbox from './DropdownCheckbox'

class App extends React.Component {
  state = {
    furnitureStyle: {
      Contemporary: false,
      Modern: false,
      Scandinavian: false,
      Classic: false,
      Midcentury: false,
    }
  }

  handleClickFurniture = (val) => {
    const { furnitureStyle } = this.state

    this.setState({
      furnitureStyle: {
        ...furnitureStyle,
        [val]: !furnitureStyle[val]
      }
    })
  }

  render() {
    const { furnitureStyle } = this.state
    console.log(furnitureStyle)

    return (
      <div className="App">
          <DropdownCheckbox 
            placeholder={'Furniture Style'} 
            width={200} 
            list={Object.keys(furnitureStyle)} 
            onHandleClick={this.handleClickFurniture}
          />
      </div>
    );
  }
}

export default App;
