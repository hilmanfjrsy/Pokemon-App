import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardPokemon from '../components/CardPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { ContextProvider } from '../context/BaseContext';
import { getRequest } from '../utils/GlobalFunction';
import GlobalVar from '../utils/GlobalVar';

export default function Home() {
  const context = useContext(ContextProvider)
  const [listPokemon, setListPokemon] = useState([])
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setNextUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [firstLoading, setFirstLoading] = useState(true)

  async function getPokemon() {
    setLoading(true)
    const response = await getRequest(url)
    setNextUrl(response.data.next)
    var temp = []
    response.data.results.map(async item => {
      const res = await getRequest(item.url)
      temp.push(res.data)
      setListPokemon(listPokemon.concat(temp))
    })

    setTimeout(() => {
      setFirstLoading(false)
      setLoading(false)
    }, 2000)

  }

  useEffect(() => {
    getPokemon()
  }, [url])

  if (loading && firstLoading) return <LoadingScreen />

  return (
    <div className='container'>
      <div>
        <div className='center' style={{ marginTop: 10 }}>
          <img src={require('../assets/pokemon.png')} className='logo' />
        </div>
        <div className='center'>
          <Link to={'/my-pokemon'} style={{ textDecoration: 'none', color: GlobalVar.secondaryColor }}>
            <h3 className=''>My Pokemon <span className='badge-primary'>{context.myPokemon.length}</span> </h3>
          </Link>
        </div>
        <div className='container-grid' >
          {listPokemon.map((item, index) => <CardPokemon item={item} index={index} key={index} />)}
        </div>
        <div className='center' style={{ marginTop: 30, marginBottom: 30 }}>
          <button
            className='btn btn-primary'
            onClick={() => setUrl(nextUrl)}
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}