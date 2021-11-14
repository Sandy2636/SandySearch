import { Button } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'
import React ,{useState}from 'react'
import { useHistory } from 'react-router'
import "./Search.css"
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Search({hideButton= false}) {
    const [{},dispatch] = useStateValue();
    
    const[input ,setInput] =useState('');
    const history =useHistory()

    const search = e =>{
        e.preventDefault();
        console.log('You hit ',input)

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input,
        })
        
        history.push('./search')
    };
    return (
        <form className="search">
            <div className="search__input">
                <SearchOutlined className="search__inputIcon"/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {!hideButton? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search}variant="outlined">Sandy Search</Button>
                    <Button variant="outlined">i'm Feeling Lucky</Button>
                </div>
            ):(
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={search}variant="outlined">Sandy SSearch</Button>
                    <Button className="search__buttonsHidden" variant="outlined">i'm Feeling Lucky</Button>
                </div>
            )}
        </form>
    )
}

export default Search