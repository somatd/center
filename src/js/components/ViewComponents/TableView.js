import React from 'react';
import { render } from 'react-dom';
import { connect, bindActionCreators } from 'react-redux';
import { loadHistory } from '../../actions/historyAction';
import { setHistory } from '../../actions/index';
import Styles from '../../../styles/tableView.css';

class TableView extends React.Component {

getTableContent(dataset, columns){
  return dataset.map((record, recordIndex)=>{
    return (<tr key={recordIndex}>
      {this.getRowFields(record, columns)}
    </tr>)
 });
}

getRowFields(record, columns) {
  return columns.map(column => {
      const fieldData = record[column.id];
      return (<td key={fieldData}>{fieldData}</td>)
  });
}

getHeader(data){
  return data.map(column=> {
     return (<td key={column.label}>{column.label.toUpperCase()}</td>)
   })
}

render(){
  const { Config, dataset} = this.props;
  const view = Config.id;
  let tableClassName;
  if(view ==='authHistory'){
    tableClassName = "authHistory";
  } else if(view ==='authSession'){
    tableClassName = 'authSession';
  }
  const displayList=this.getTableContent(dataset, Config.columns);
  const displayHeader = this.getHeader(Config.columns);
  return(
    <div className = "container">
      <table className={`table ${tableClassName}`}>
        <thead>
          <tr className="tableHeader">
            {displayHeader}
          </tr>
        </thead>
        <tbody>
          {displayList}
        </tbody>
      </table>
    </div>
  )
}
}

export default TableView;
