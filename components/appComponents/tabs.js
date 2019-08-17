import { Component } from 'react'
import { Nav } from 'react-bootstrap'

const tabs = ['Home', 'Track', 'Tool', 'Manage']

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

  render () {
    const tabs = this.state.tabs.map(tab => {
      return (
        <Nav.Item key={tab}>
          <Nav.Link eventkey={tab} onClick={this.tabHandler.bind(this, tab)}>{tab}</Nav.Link>
        </Nav.Item>
      )
    })

    return (

      <Nav justify variant="tabs" activeKey={this.state.activeTab} defaultActiveKey='Home'>
        {tabs}
        <p>{this.state.activeTab}</p>
        <this.state.activeTab/>
      </Nav>
    )
  }
}

export default Tab
