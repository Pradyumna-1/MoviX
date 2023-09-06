import React from 'react'
import "./style.scss"
import { useSelector } from 'react-redux'

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className='genres'>
      {
        data?.map((genre) => {
          if (!genres[genre]?.name) return;
          return (
            <div
              className="genre"
              key={genre}
            >
              {
                genres[genre]?.name
              }
            </div>)
        })
      }
    </div>
  )
}

export default Genres