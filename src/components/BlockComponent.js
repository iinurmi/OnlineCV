import React from 'react'
import $ from 'jquery';

export default class BlockComponent extends React.Component {
  constructor(props) {
    super(props)
    this.hasProperty = this.hasProp.bind(this);
    this.window = $(window);
    this.animation_elements = $('.animation-element');
  }

  componentDidMount(){
    this.check_if_in_view(); // default the animation for those which are in view
    this.window.on('scroll', this.check_if_in_view);
  }

  check_if_in_view = () => {
    let window_height = this.window.height();
    let window_top_position = this.window.scrollTop();
    let window_bottom_position = (window_top_position + window_height);
    console.log('asdasd', window_bottom_position);
    console.log('animation_element', this.animation_elements);
    // testing this is stupid should be done other way!
    let animation_elements = $('.animation-element');
    $.each(animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          console.log("element should have classes added")
          $element.addClass('show');
          $element.removeClass('hide');
        } else {
          //$element.removeClass('show');
          //$element.addClass('hide');
      }
    });
  }
  hasProp = (object, key) => {
    return object ? hasOwnProperty.call(object, key) : false;
  }

  render() {
     const {items} = this.props.data;

     return(
       <div>
         {items.map(function(workExp, index) {
           const { url, place, workplace, dateStarted, dateEnded, description, title, listElement } = workExp;
            return (
              <div className="block-element animation-element hide" key={index}>
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
