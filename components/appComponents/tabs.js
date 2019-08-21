import { Component } from 'react'
import { Nav } from 'react-bootstrap'
import Event from '../../pages/index/event/event'
import Home from '../../pages/index/home/home'
import Tool from '../../pages/index/tools/tool'
import Manage from '../../pages/index/manage/manage'

const tabs = ['Home', 'Event', 'Tool', 'Manage']

class Tab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabs,
      activeTab: tabs[0]
    }
  }

  tabHandler (tab) {
    this.setState({
      activeTab: tab
    })
  }

  activeComponent () {
    let component = null
    switch (this.state.activeTab) {
      case 'Home':
        component = <Home />
        break
      case 'Event':
        component = <Event />
        break
      case 'Tool':
        component = <Tool />
        break
      case 'Manage':
        component = <Manage />
        break
      default :
        component = <Home />
    }
    return component
  }

  render () {
    const tabs = this.state.tabs.map(tab => {
      return (
        <Nav.Item key={tab}>
          <Nav.Link eventkey={tab} onClick={this.tabHandler.bind(this, tab)}>{tab}</Nav.Link>
        </Nav.Item>
      )
    })

    return (
      <div>
        <Nav justify variant="tabs" activeKey={this.state.activeTab} defaultActiveKey='Home'>
          {tabs}
        </Nav>
        {this.activeComponent()}
      </div>
    )
  }
}

export default Tab
