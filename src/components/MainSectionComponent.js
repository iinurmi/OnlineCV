import React from 'react'

import BlockComponent from './BlockComponent.js'

export default class MainSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {

     return(
       <div className="col-md-9">
          <div className="fixed-height">
          <p>A people first person who is passionate about meaningful problems.
          A person with not so obvious background from theater to programming to event management.
          Excels in situations where there is no one obvious answer. Loves to play badminton and squash.
          Wednesday evenings are dedicated to boxing. Likes to call himself an innovator when no-one is around.</p>
          </div>
          <BlockComponent data={this.props.data} />
       </div>

     )
  }
}
