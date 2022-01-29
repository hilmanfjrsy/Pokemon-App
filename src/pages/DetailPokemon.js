import React, { Component, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import CardPokemon from '../components/CardPokemon';
import { ContextProvider } from '../context/BaseContext';
import { capitalizeFirstLetter } from '../utils/GlobalFunction';
import GlobalVar from '../utils/GlobalVar';

export default function DetailPokemon() {
  const context = useContext(ContextProvider)
  const { state } = useLocation()

  return (
    <div className='container' >
      <div className='container-detail'>
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
          {state.nickname ?
            <button
              className='btn btn-primary'
              onClick={() =>{} }
              style={{ width: '100%', marginTop: 20, backgroundColor:'firebrick' }}
            >
              Release Pokemon
            </button>
            :
            <button
              className='btn btn-primary'
              onClick={() => catchPokemon(state)}
              style={{ width: '100%', marginTop: 20 }}
            >
              Catch Pokemon
            </button>
          }
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

  function catchPokemon(pokemon) {
    let percentage = Math.random()
    let probability = 0.50

    let timerInterval
    Swal.fire({
      title: `Catch ${capitalizeFirstLetter(pokemon.name)}`,
      html: 'Will be successful if the percentage is above 50%',
      timer: 2000,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        if (percentage < probability) {
          Swal.fire(
            {
              title: `Failed to catch ${capitalizeFirstLetter(pokemon.name)}`,
              text: `Your percentage is ${parseInt(percentage * 100)}%`,
              icon: 'error',
              confirmButtonColor: GlobalVar.secondaryColor,
              confirmButtonText: 'Close',
              allowOutsideClick: false
            }
          )
        } else {
          Swal.fire(
            {
              title: `Congrats you got ${capitalizeFirstLetter(pokemon.name)}`,
              text: `With percentage ${parseInt(percentage * 100)}%`,
              icon: 'success',
              confirmButtonColor: GlobalVar.secondaryColor,
              confirmButtonText: 'Give Nickname!',
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                giveNickname(pokemon)
              }
            })
        }
      }
    })
  }

  function giveNickname(pokemon) {
    Swal.fire({
      title: 'Give your pokemon a nickname',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      confirmButtonText: 'Save',
      confirmButtonColor: GlobalVar.secondaryColor,
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: (nickname) => {
        return nickname
      },
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        let checkPokemon = context.myPokemon
        let find = checkPokemon.find(item => item.nickname.toLowerCase() == result.value.toLowerCase())
        if (find) {
          Swal.fire(
            {
              title: `Failed`,
              text: `Pokemon with nickname ${result.value} already exists`,
              icon: 'error',
              confirmButtonColor: GlobalVar.secondaryColor,
              confirmButtonText: 'Change Nickname!',
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                giveNickname(pokemon)
              }
            })
        } else {
          pokemon.nickname = result.value
          checkPokemon.push(pokemon)
          context.setMyPokemon(checkPokemon)
          localStorage.setItem('myPokemon', JSON.stringify(checkPokemon))
          Swal.fire({
            title: `${result.value}`,
            text: `New pokemon has been added!`,
            confirmButtonColor: GlobalVar.secondaryColor,
            imageUrl: pokemon.sprites.front_default
          })
        }
      }
    })
  }
}