import React from 'react'

import BlockComponent from './BlockComponent.js'

export default class MainSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {

     return(
       <div className="col-9">
          <BlockComponent data={this.props.data} />
       </div>

     )
  }
}
