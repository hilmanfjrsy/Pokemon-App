import { Global, css } from '@emotion/react'
import GlobalVar from './GlobalVar'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
      .container {
        background-color: #FFEB99;
        display:flex !important;
        min-height:100vh;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // padding:0 4rem
      }
      .sticky{
        position:sticky;
        top:30px
      }
      .center{
        display:flex;
        align-items:center;
        justify-content:center
      }
      .row{
        display:flex;
        flex-direction:row;
        align-items:center
      }
      .wrap{
        max-width:100%;
        width:100%;
        display: inline-flex;
        flex-wrap: wrap;
        gap:25px;
        justify-content:center
      }
      .card-container{
        background-color:white;
        min-width:200px;
        min-height:150px;
        border-radius:15px;
        padding:1rem;
        // margin: 20px
      }

      .card-grey{
        background-color:#f4f4f4;
        width:100%;
        min-height:50px;
        border-radius:15px;
        padding: 10px 0;
        // margin: 20px
      }
      .card-title {
        font-size:16px;
        font-weight:bold;
        display:flex;
        color:#1a1a1a;
        justify-content:center;
        margin: 15px 0px 15px 0px
      }
      .img-container{
        justify-content:center;
        display:flex
      }
      .logo{
        width:200px;
        height:100px;
        object-fit:contain
      }
      .card-img{
        width:120px;
        height:120px
      }

      .card-img-detail{
        width:250px;
        height:250px
      }
      small{
        font-size:10px;
        color:grey;
      }
      progress{
        -webkit-appearance: none;
        width: 100%;
        margin-bottom:10px;
        display:block;
        height:3px
      }
      .progress::-webkit-progress-bar{
        background-color:#e4e4e4;
        height:3px !important;
        border-radius:10px !important;
        border:0px
      }

      .progress-detail::-webkit-progress-bar{
        background-color:#e4e4e4;
        height:10px !important;
        border-radius:10px !important;
        border:0px
      }
      .progress-hp::-webkit-progress-value{
        background-color:#FF0000;
        border-radius:10px !important;
      }

      .progress-defense::-webkit-progress-value{
        background-color:#F8D030;
        border-radius:10px !important;
      }

      .progress-attack::-webkit-progress-value{
        background-color:#6890F0;
        border-radius:10px !important;
      }

      .progress-speed::-webkit-progress-value{
        background-color:#F85888;
        border-radius:10px !important;
      }

      .progress-special-defense::-webkit-progress-value{
        background-color:#78C850;
        border-radius:10px !important;
      }

      .progress-special-attack::-webkit-progress-value{
        background-color:#1A87CF;
        border-radius:10px !important;
      }

      .font-secondary{
        font-size:12px;
        color:grey;
        font-weight:500;
        margin:0
      }

      h5{
        color:#1a1a1a;
        font-size:14px;
        font-weight: 700;
        margin:0 0 5px 0
      }

      .text-center{
        text-align:center
      }

      .space-around{
        display:flex;
        justify-content:space-around
      }

      .btn {
        display: inline-block;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 0;
        padding: 0.7rem 3rem;
        font-size: 0.9rem;
        border-radius: 5px;
      }

      .btn-primary{
        background-color:${GlobalVar.secondaryColor};
        color:white
      }

      .badge-primary{
        background-color:${GlobalVar.secondaryColor};
        border-radius:100px;
        color:white;
        font-size:0.7rem;
        padding: 0.2rem 0.7rem;
        font-weight:600;
        margin: 5px
      }

      .container-grid {
        padding: 0;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(4,2fr);
        margin: 5px 15px;
        gap:20px;
        position: relative;
      }

      .container-detail {
        padding: 30px;
        display: flex;
        margin: 5px 15px;
        gap:20px;
      }

      .card {
        grid-column: span 4;
      }

      @media screen and (min-width: 320px) and (max-width: 549px) {
        .container-grid {
          grid-template-columns: repeat(1,1fr) !important;
        }
        .container-detail {
          display: block !important;
        }
      }

      @media screen and (min-width: 550px) and (max-width: 759px) {
        .container-grid {
          grid-template-columns: repeat(2,1fr) !important;
        }
        .container-detail {
          display: block !important;
        }
      }


      @media screen and (min-width: 760px) and (max-width: 959px) {
        .container-grid {
          grid-template-columns: repeat(3,1fr) !important;
        }
      }

      @media screen and (min-width: 960px) {
        .container-grid {
          grid-template-columns: repeat(4,1fr) !important;
        }
      }
    `}
    />
  )
}