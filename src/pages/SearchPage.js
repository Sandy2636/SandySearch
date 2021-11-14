import React from 'react'
import SSlogo from "./SSlogo.png"
import './SearchPage.css'
import {useStateValue} from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import Response from './response'
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search"
import ImageIcon from "@material-ui/icons/Image"
import RoomIcon from "@material-ui/icons/Room"
import DescriptionIcon from "@material-ui/icons/Description"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import MoreVertIcon from "@material-ui/icons/MoreVert"

function SearchPage() {
    const [{term='god'},dispatch] = useStateValue();
    //live API
    const {data} = useGoogleSearch(term)
    //const data = Response;
    console.log(data)
    return (
        <div className="SearchPage">
            <div className="searchPage__header">
                <Link to='/'>
                    <img  className="searchPage__logo" src={SSlogo} alt="Sandy Search"/>
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButton/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionLeft">
                            <div className="searchPage__option">
                                <SearchIcon/>
                                <Link to="/search/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon/>
                                <Link to="/search/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon/>
                                <Link to="/search/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon/>
                                <Link to="/search/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon/>
                                <Link to="/search/shopping">Shopping</Link>
                            </div>
                            
                            <div className="searchPage__option">
                                <MoreVertIcon/>
                                <Link to="/search/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionRight">
                        <div className="searchPage__option">
                                <Link to="/search/more">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term&& (
            <div className="searchPage__results">
                <p className="searchPage__resultCount">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}s) for {term}</p>
                
                {data?.items.map(item => (
                    <div className="searchPage__result">
                        <a className="searchPage__resultLink"href={item.link}>
                            {item.displayLink} 
                        </a>
                        <a className="searchPage__resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage__resultSnippet">{item.snippet}</p>
                    </div>
                ))}

            </div>
            )}
        </div>
    )
}

export default SearchPage
