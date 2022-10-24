import './index.css';
// import React from "react";

const NewsBanner = () => {
  return (
    <div className="newsbanner">
      <h1 className="newsbanner-header">Hot Topics</h1>
      <div className="newsbanner-content">
        <div className='newsbanner-image'>
          <img
            src="https://source.unsplash.com/random"
            alt="sample newsbanner"
            className="newsbanner-photo"
          />
        </div>
        <div className="newsbanner-info">
          <div className="newsbanner-info-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, non?</div>
          <div className="newsbanner-info-detail">
            <div className="newsbanner-info-publication">2 hours ago</div>
            <div className="newsbanner-info-source">thegrayzone.com</div>
          </div>
        </div>
        <p className="newsbanner-preview">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus veritatis natus veniam molestias explicabo ducimus.
          Iure quos sequi architecto itaque delectus ipsa ab iusto doloribus!
          Omnis consequuntur suscipit incidunt fugit!
        </p>
      </div>
    </div>
  );
}

export default NewsBanner;
