import React from 'react';
import { Link } from 'react-router-dom';

const SingleVolunteering = (props) => {
  const { img, title, color } = props.volunteeringData
  return (
    <div className="col-md-3">
      <Link to = "/">
        <figure className="figure position-relative">
          <img src={img} className="figure-img img-fluid rounded" alt=""></img>
          {
            <figcaption className={
              color === "#FFBD3E" ?
                "figure-caption caption-style orange" :
                (
                  color === "#FF7044" ?
                  "figure-caption caption-style red" :
                  (
                  color === "#3F90FC" ?
                  "figure-caption caption-style blue" :
                  "figure-caption caption-style darkBlue"
                  )
                )
            }>{title}</figcaption>
          }
        </figure>
      </Link>
    </div>
  );
};

export default SingleVolunteering;