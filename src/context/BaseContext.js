import React, { createContext, Component, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ContextProvider = createContext()

export default function BaseContext({ children }) {
    const location = useLocation()
    const [myPokemon, setMyPokemon] = useState([])
    
    useEffect(() => {
        let pokemon = JSON.parse(localStorage.getItem('myPokemon')) || []
        setMyPokemon(pokemon)
    }, [location])

    return (
        <ContextProvider.Provider
            value={{
                myPokemon,
                setMyPokemon
            }}
        >
            {children}
        </ContextProvider.Provider>
    )

}
// export default class BaseContext extends Component {
//     state = {
//         myPokemon: [],
//     }
//     setValue = (key, value) => {
//         this.setState({ [key]: value })
//     }

//     render() {
//         return (
//             <ContextProvider.Provider
//                 value={{
//                     ...this.state,
//                     setValue: this.setValue.bind(this),
//                 }}
//             >
//                 {this.props.children}
//             </ContextProvider.Provider>
//         )
//     }
// }
