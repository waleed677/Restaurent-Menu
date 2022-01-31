import React from 'react';

const CardItem = (props) => {
  return (
      <>
      {props.menu.map((item)=>{
        return <div className="card-container" key={item.id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{item.id}</span>
                            <span className="card-author  subtle">{item.category}</span>
                            <h2 className="card-title">{item.name}</h2>
                            <span className="card-description subtle">
                               {item.description}
                            </span>
                            <div className="card-read">Read</div>
                        </div>
                        <img src={item.image} className='card-media' />
                        <span className="card-tag  subtle">Order Now</span>
                    </div>

                </div>

      })}
           
      </>
  );
};

export default CardItem;
