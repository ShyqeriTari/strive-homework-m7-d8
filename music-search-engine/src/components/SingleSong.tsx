import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export interface Song {
    title: string,
    album: {
        cover_medium: string
    },
    artist: {
        name: string
    },
    id: string
}

interface SingleSongProps {
    song: Song
}

const SingleSong = ({ song }: SingleSongProps) => {
    return (
        <Col sm={6} md={4} lg={3} className="mb-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={song.album.cover_medium} />
                <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <Card.Text>
                        {song.artist.name}
                    </Card.Text>
                    <Link to={`/${song.id}`}>
                        <Button variant="success">See more</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleSong