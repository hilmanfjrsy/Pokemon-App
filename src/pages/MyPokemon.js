import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import CardPokemon from '../components/CardPokemon';
import { ContextProvider } from '../context/BaseContext';
import { releasePokemon } from '../utils/GlobalFunction';
import GlobalVar from '../utils/GlobalVar';

export default function MyPokemon() {
  const context = useContext(ContextProvider)
  const listPokemon = context.myPokemon

  return (
    <div className='container'>
      <div>
        <div className='center' style={{ marginTop: 10, marginBottom: 30 }}>
          <img src={require('../assets/pokemon.png')} className='logo' />
        </div>
        <div className='center' style={{marginBottom:15}}>
          <h5 >{listPokemon.length == 0 ? 'No data available' : `You have ${listPokemon.length} pokemon`}</h5>
        </div>
        <div className='container-grid' >
          {listPokemon.map((item, index) => (
            <div key={index}>
              <CardPokemon item={item} index={index} />
              <button
                className='btn btn-primary'
                onClick={() => { releasePokemon(item,context,listPokemon) }}
                style={{ width: '100%', marginTop: 10, marginBottom: 20, backgroundColor: 'firebrick' }}
              >
                Release Pokemon
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}