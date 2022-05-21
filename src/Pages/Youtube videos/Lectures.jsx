import React , {useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
// import YouTube, {YouTubeProps} from 'react-youtube';
import Footer from '../../Views/Footer';
import UserNavigation from '../../Components/UserNavigation';
import videos from './YouTubeAPI';
import './Lectures.css'

function Lectures(){
    const [show, setShow] = useState(false);
    const [url, setURL] = useState();
   
    return(
        <>
        <Container fluid style={{minHeight:'100vh'}}>
            <Row>
                <UserNavigation />
            </Row>

            <Row className='mt-5 mb-5'>
                <Col xs={12} md={12} lg={12}>
                    <div className='videosHolder'>
                        {
                            videos.map((obj,idx)=>{
                                return(
                                    <>
                                    <Button className='GradeBtn mt-4'>
                                        <i className='fa fa-desktop'></i> Grade{6+idx}
                                    </Button>
                                    <div className='subVideoHolder mt-1 mb-5'>
                                        {
                                            obj.map((o,i)=>{
                                                return(
                                                    <ReactPlayer
                                                        url = {o.link}
                                                        width = {320}
                                                        height = {180}
                                                        style={{margin : '10px'}}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default Lectures;