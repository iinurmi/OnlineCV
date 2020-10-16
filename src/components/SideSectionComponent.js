import React from 'react'


const SideSectionComponent = ({picture, category}) => {
  return(
    <div className="col-md-3 side-section">
      <div className="sticky-top">
        <img src={picture} className="img-fluid" alt="profile_picture" />
        <div>
          Iiro Nurmi
          iinurmi.wordpress.com
          <h3>
          {category}
          </h3>

        </div>
      </div>
    </div>
  )
}

export default SideSectionComponent
