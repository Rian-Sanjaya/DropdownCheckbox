import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

class DropdownCheckbox extends React.Component {
  state = {
    showList: false
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickDocument, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickDocument, false)
  }

  handleClickDocument = (e) => {
    if (this.dropDw.contains(e.target)) {
      // the click is inside
      return
    }

    // the click is outside
    if (this.state.showList) {
      this.setState({ showList: !this.state.showList })
    }
  }

  handleClick = (e) => {
    return this.setState({ 
      showList: !this.state.showList
    }) 
     
  }

  render() {
    const { label, placeholder, width, list, onHandleClick } = this.props
    const { showList } = this.state

    return (
      <div 
        style={{ 
          position: 'relative', 
          border: '2px solid',
          width: width ? width : null,
          padding: '5px 10px' }}
        onClick={this.handleClick}
        ref={node => this.dropDw = node}
      >
        { label ? label : null }

        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            { placeholder ? placeholder : null }
          </div>
          <div>
            {
              !showList ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />
            }
          </div>
        </div>

        {
          showList && 
          <div style={{ position: 'absolute', left: 0, right: 0, top: 40 }}>
            <DropdownCheck list={list} onHandleClick={onHandleClick} />
          </div>
        }
        
      </div>
    )
  }
}

class DropdownCheck extends React.Component {
  render() {
    return (
      <Fragment>
        {
          this.props.list.map( (item, i) => {
            return (
              <div key={i} style={{ display: 'flex' }} onClick={ (e) => e.stopPropagation() }>
                <div style={{ flex: 1 }} onClick={ (e) => e.stopPropagation() }>
                  {item}
                </div>
                <input type='checkbox' name={item} 
                  onClick={ (e) => {
                    e.stopPropagation()
                    // console.log(item) 
                    this.props.onHandleClick(item)
                  }} 
                />
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}

export default DropdownCheckbox