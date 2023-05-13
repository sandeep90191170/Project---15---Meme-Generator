import React from "react";

export default function Meme(props) {

    const [appData, setAppData] = React.useState({
        firstline: "",
        secondline: "",
        memepicture: "https://i.imgflip.com/28j0te.jpg"

    });

    const [newMemeData, setNewMemeData] = React.useState([]);


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((memeData) => setNewMemeData(memeData.data.memes));
    } );

function getNewMeme() {
    const randomNumber = Math.floor(Math.random() * newMemeData.length);
    const url = newMemeData[randomNumber].url;
    console.log(url);
    setAppData((prevdata) => {
        return {
            ...prevdata,
            memepicture: url
        };
    });
}

function enterLine(event) {
    setAppData(prevAppData => {
        return{
            ...prevAppData,
            
                [event.target.name]: event.target.value
            };
    })
    
}
console.log(appData);
return (
    <div className="meme-container">
    <nav className="navbar">
    < img className="memeLOGO" src={props.memeLOGO} alt="memeLOGO" />
    <h1>Meme Generator</h1>
    </nav>

    <div className="input-field">
        <input type="text" placeholder="Enter the first line..." name="firstline" onChange={enterLine} value={appData.firstline} />
        <input type="text" placeholder="Enter the second line..." name="secondline" onChange={enterLine} value={appData.secondline} />
       
    </div>
    <button className="generateBTN" onClick={getNewMeme} >Generate a new meme</button>
    
    <img className="imgMEME" src={appData.memepicture} alt="randomMeme" />

   
    </div>
);
}