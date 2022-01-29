import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, generateComma } from '../utils/GlobalFunction';

export default function CardPokemon({ item, index, children, isActive = true }) {

  return (
    <Link to={'/detail-pokemon'}
      state={item}
      style={{ textDecoration: 'none', pointerEvents: isActive ? 'auto' : 'none' }}>
      <div key={index} className='card' >
        <div className='card-container' >
          <div className='img-container'>
            <img src={item.sprites.front_default} className={isActive ? 'card-img' : 'card-img-detail'} />
          </div>
          <div className='space-around' style={{ marginTop: 15, marginBottom: 15 }}>
            <div className='text-center'>
              <h5>{parseFloat(item.height / 10) + ' m'}</h5>
              <p className='font-secondary'>Height</p>
            </div>
            <div className='text-center'>
              <h5>{parseFloat(item.weight / 10) + ' kg'}</h5>
              <p className='font-secondary'>Weight</p>
            </div>
            <div className='text-center'>
              <h5>{item.base_experience}</h5>
              <p className='font-secondary'>Exp</p>
            </div>
          </div>
          {item.nickname ?
            <div className='text-center'>
              <span className='card-title' style={{marginBottom:0}}>{item.nickname.toUpperCase()}</span>
              <small>{item.name.toUpperCase()}</small>

            </div>
            :
            <span className='card-title'>{item.name.toUpperCase()}</span>
          }
          <div>
            {children}
          </div>
          {item.stats.map((val, idx) => {
            return (
              <div key={idx}>
                <small>{capitalizeFirstLetter(val.stat.name)}</small>
                <progress className={`${isActive ? 'progress ' : 'progress-detail '} ${'progress-' + val.stat.name}`} value={val.base_stat} max="100" />
              </div>
            )
          })}
        </div>
      </div>
    </Link>
  )
}