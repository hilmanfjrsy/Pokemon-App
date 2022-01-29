import React, { useEffect, useState } from 'react';
import CardPokemon from '../components/CardPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { getRequest } from '../utils/GlobalFunction';

export default function Home() {
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
        <div className='center' style={{ marginTop: 10, marginBottom: 30 }}>
          <img src={require('../assets/pokemon.png')} className='logo' />
        </div>
        <div className='wrap' >
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