import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import CardPokemon from '../components/CardPokemon';
import { capitalizeFirstLetter } from '../utils/GlobalFunction';

export default function DetailPokemon() {
  const { state } = useLocation()
  console.log(state)

  return (
    <div className='container'>
      <div className='wrap'>
        <div style={{ paddingTop: 30, paddingBottom: 30, flex: 0.4 }}>
          <CardPokemon item={state} isActive={false} >
            <div style={{ marginTop: 15 }} className='text-center card-grey'>
              <p className='font-secondary'>Type</p>
              <div className='wrap' style={{ gap: 0 }}>
                {state.types.map((item, index) => {
                  return (
                    <span className='badge-primary' key={index}>{capitalizeFirstLetter(item.type.name)}</span>
                  )
                })}
              </div>
            </div>
            <div style={{ marginTop: 15 }} className='text-center card-grey'>
              <p className='font-secondary'>Abilities</p>
              <div className='space-around wrap' style={{ gap: 0 }}>
                {state.abilities.map((item, index) => {
                  return (
                    <div key={index}>
                      <h5 style={{ marginTop: 10, marginBottom: 0 }}>{capitalizeFirstLetter(item.ability.name)}</h5>
                      {item.is_hidden && <small>Hidden Ability</small>}
                    </div>
                  )
                })}
              </div>
            </div>
          </CardPokemon>
        </div>
        <div style={{ paddingTop: 30, paddingBottom: 30, flex: 1 }}>
          <div className='card-container'>
            <div className='card-grey text-center'>
              <h2>Moves</h2>
            </div>
            <div className='wrap' style={{ gap: 20 }}>
              {state.moves.map((item, index) => {
                return (
                  <div key={index} style={{ marginTop: 15 }}>
                    <span className='card-title'>{capitalizeFirstLetter(item.move.name)}</span>
                    {item.version_group_details.map((items, idx) => {
                      return (
                        <div className='row' key={idx}>
                          <span className='badge-primary'>{capitalizeFirstLetter(items.version_group.name)}</span>
                          <p style={{ margin: 10 }} className='font-secondary'>Level {items.level_learned_at}: Moves learn by <b>{capitalizeFirstLetter(items.move_learn_method.name)}</b></p>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}