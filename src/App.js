import React, { Component } from 'react';
import './App.css';
// import NavBar from './components/navbar'
import NavBar from './components/navBarFunc'
import ListPage from './components/listPage'
import ItemA from './components/hoc/itemA'
import ItemB from './components/hoc/itemB'
import ItemC from './components/rp/itemC.jsx'
import ItemD from './components/rp/itemD.jsx'
// import ListItem from './components/listItemFunc'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listData: [
        {
          id: 1,
          name: "Sony 65寸高清液晶电视",
          price: 4000,
          value: 20,
        },
        {
          id: 2,
          name: "---Sony 65寸高清液晶电视",
          price: 14000,
          value: 10,
        },
        {
          id: 3,
          name: "-1--Sony 65寸高清液晶电视",
          price: 14000,
          value: 10,
        },
      ]
    }
    console.log('App - constructor')
  }

  componentDidMount () {
    console.log('App - mount')
  }

  handleReset = () => {
    const listData = this.state.listData.map(item => {
      const _item = { ...item }
      _item.value = 0
      return _item
    })
    this.setState({
      listData
    })
  }

  handleDelete = (id) => {
    const listData = this.state.listData.filter(item => item.id !== id)
    console.log(id)
    this.setState({
      listData
    })
  }

  handleDecrease = (id) => {
    const _data = this.state.listData.map(item => {
      if (item.id === id) {
        const _item = { ...item }
        _item.value--
        if (_item.value < 0) _item.value = 0
        return _item
      }
      return item
    })

    this.setState({
      listData: _data
    })
  }

  handleIncrease = (id) => {
    const _data = this.state.listData.map(item => {
      if (item.id === id) {
        const _item = { ...item }
        _item.value++
        return _item
      }
      return item
    })

    this.setState({
      listData: _data
    })
  }

  render () {
    console.log('App -rendering')
    return (
      <React.Fragment>
        <NavBar
          onReset={this.handleReset}
          total={this.state.listData.reduce((a, b) => a + b.value, 0)}
        />
        <ListPage
          data={this.state.listData}
          handleDecrease={this.handleDecrease}
          handleIncrease={this.handleIncrease}
          handleDelete={this.handleDelete}
        />
        <ItemA id={1} />
        <ItemB />
        <ItemC />
        <ItemD />
      </React.Fragment>
    );
  }
}

export default App;
// function App () {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <React.Fragment>
//       <div className="container">
//         {listData.map(item => {
//           return <ListItem data={item} key={item.id} />
//         })}
//       </div>
//     </React.Fragment>
//   );
// }

// export default App;
