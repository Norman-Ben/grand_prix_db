import React from 'react';

export default function NewsCard() {
  function handler(res: any) {
    fetch('/api/getRaceCalendar')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handler}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
