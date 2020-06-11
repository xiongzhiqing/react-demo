import React, { Component } from 'react';
import './App.css';
import ListItem from './components/listItem'
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
          stock: 20,
        },
        {
          id: 2,
          name: "---Sony 65寸高清液晶电视",
          price: 14000,
          stock: 10,
        },
        {
          id: 3,
          name: "-1--Sony 65寸高清液晶电视",
          price: 14000,
          stock: 10,
        },
        {
          id: 4,
          name: "--2-Sony 65寸高清液晶电视",
          price: 14000,
          stock: 10,
        },
        {
          id: 5,
          name: "---3Sony 65寸高清液晶电视",
          price: 14000,
          stock: 10,
        },
        {
          id: 6,
          name: "---4Sony 65寸高清液晶电视",
          price: 14000,
          stock: 10,
        },
        {
          id: 7,
          name: "5---Sony 65寸高清液晶电视",
          price: 14000,
          stock: 10,
        },
      ]
    }
  }

  renderList () {
    if (this.state.listData.length === 0) {
      return <div className="container">购物车是空的</div>
    }
    return this.state.listData.map((item, index) => {
      return <ListItem key={item.id} data={item} index={index} onDelete={this.handleDelete} />
    })
  }
  handleDelete = (id) => {
    const listData = this.state.listData.filter(item => item.id !== id)
    console.log(id)
    this.setState({
      listData
    })
  }

  render () {
    return (<div className="container">
      <div className='title'>Hello React</div>
      {this.renderList()}
    </div>);
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
