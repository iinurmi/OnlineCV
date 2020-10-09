import React from 'react'


const SideSectionComponent = ({picture}) => {
  return(
    <div className="col-md-3 side-section">
      <div className="sticky-top">
        <img src={picture} className="img-fluid" alt="profile_picture" />
        <div>
          Iiro Nurmi
          iinurmi.wordpress.com
          http://www.linkedin.com/pub/iiro-nurmi/65/15a/b77



        </div>
      </div>
    </div>
  )
}

export default SideSectionComponent
