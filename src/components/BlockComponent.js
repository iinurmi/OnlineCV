import React from 'react'

export default class BlockComponent extends React.Component {
  constructor(props) {
    super(props)
    this.hasProperty = this.hasProp.bind(this);
  }

  hasProp = (object, key) => {
    return object ? hasOwnProperty.call(object, key) : false;
  }

  render() {
     const {items} = this.props.data;
     console.log(items)
     return(
       <div>
         {items.map(function(workExp, index) {
           const { url, place, workplace, dateStarted, dateEnded, description, title, listElement } = workExp;
            return (
              <div key={index}>
                <h4><small className="text-muted">{workplace}</small> / {title}</h4>
                <div className="font-weight-light text-uppercase"> {dateStarted} - {dateEnded} {place} </div>
                <p className="body">
                 {description}
                </p>
                {listElement && <div>{listElement.heading}</div>}
                {listElement && listElement.items.map((item, index) => <li key={index}>{item}</li>)
                }
              </div>);
         })}
       </div>
     )
  }
}
/*

*/
