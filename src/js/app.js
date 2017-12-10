import React, {Component} from 'react';
import {render} from 'react-dom';
import TableView from './components/ViewComponents/TableView';
import Config from '../../config/Config.json';
import NavbarInstance from './components/Common/Nav';
//import mockdataset from './data/mockHistory';

class App extends React.Component {
  constructor(){
   super();
   this.state={
     data : Config.dataSources[0].mockDataSet,
     selection: 'first',
     demoView : Config.views[0]
    }
 }

handleDataSet(value){
  if(value === 'second'){
    this.setState({data:Config.dataSources[1].mockDataSet, selection : 'second', demoView : Config.views[1]});
  } else {
    this.setState({data:Config.dataSources[0].mockDataSet, selection : 'first', demoView : Config.views[0]});
  }
  };

radioButtons() {
  return(<div>
    <input type="radio" name="abc"
      checked={this.state.selection === 'first'}
      value="first"
      onChange={({target})=> this.handleDataSet(target.value)} /><span>dataset</span><br/>
    <input type="radio" name="abc"
      checked={this.state.selection === 'second'}
      value="second"
      onChange={({target})=> this.handleDataSet(target.value)} /><span>dataset1</span>
  </div>
  );
}

render(){
  return(
    <div className="body">{this.radioButtons() }
      <NavbarInstance handleDataSet={() => this.handleDataSet}/>
      <TableView Config={this.state.demoView} dataset={this.state.data}/>
    </div>
  );
}
}

export default App;
