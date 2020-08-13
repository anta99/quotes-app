import React,{useState,useEffect} from 'react';
import './quotes.scss';

function Quotes() {
    const [quote,setQuote]=useState("");
    const [author,setAuthor]=useState("");
    const getQuotes=()=>{
        fetch("https://api.quotable.io/random").then(res=>res.json()).then(data=>{
            console.log(data);
            setQuote(data.content);
            setAuthor(data.author);
        });
    }
    useEffect(() =>{
        getQuotes();
    },[]);
    return (
        <div id="quotes">
            <h1>{quote}</h1>
            <h2>Author: <a href={`https://en.wikipedia.org/wiki/${author.replace(" ","_")}`} target="_blank">{author}</a></h2>
            {/* <a href="#">T</a>
            <a href="#">T</a> */}
            <button onClick={getQuotes}>New Quota</button>
        </div>
    );
}

export default Quotes;
