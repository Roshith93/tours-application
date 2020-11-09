import React, { useState } from 'react'

const Tour = (tour) => {
  const { id, name, info, image, price, removeTour } = tour
  const [moreInfo, setmoreInfo] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {moreInfo ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setmoreInfo(!moreInfo)}>
            {moreInfo ? 'show less' : 'Read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Delete
        </button>
      </footer>
    </article>
  )
}

export default Tour
