import { css } from '@emotion/react';
import React, { Component } from 'react';
import { HashLoader } from 'react-spinners';
import GlobalVar from '../utils/GlobalVar';

export default function LoadingScreen() {
  const override = css`
        display: block;
        margin: 0 auto;
      `;
  return (
    <div className='container center'>
      <div>
        <img src={require('../assets/pokemon.png')} className='logo' />
        <HashLoader css={override} size={35} color={GlobalVar.secondaryColor} />
      </div>
    </div>
  )
}