import { Link, useParams } from "react-router-dom"
import {useState, useEffect} from 'react'

interface SongComponentProps {
  
    title: string,
    album:{
      cover_medium: string
    },
    artist:{
      name: string
    },
    rank: number
  
}

const SongPage = ()=> {

  const [song, setSong] = useState<SongComponentProps | null>(null)

  const params = useParams()

  const fetchSong = async () => {

      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/deezer/track/' + params.songId
        )
        if (response.ok) {
          let data = await response.json()
           
          setSong(data)
        }else {
          alert('error in the request')
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=> {
        fetchSong()
    }, [])

    return(
        <div className="bg-search mar d-flex" >
         { song && <>
          <Link to={"/"}>
            <h2  style={{marginTop: "100px"}}>Back to Search page</h2>
            <i className="bi bi-arrow-90deg-left font-25"></i>
          </Link>
         <div className="ml-5">
          <h1>{song.title}</h1>
          <img src={song.album.cover_medium} alt="single song"></img>
          <h3>{song.artist.name}</h3>
          <h5>rank: {song.rank}</h5>
          </div>
         
          </>
          }
        </div>
    )
}

export default SongPage