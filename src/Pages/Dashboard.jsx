import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import UserNavigation from "../Components/UserNavigation";
import Footer from "../Views/Footer";
import "../Styles/Dashboard.css";

function Dashboard() {
    const [request, setRequest] = React.useState('');
    const navigate = useNavigate();
    const [cards, setCards] = React.useState([
        {
            title: 'Tutions',
            primaryTitle: 'Learn with out skilled teachers',
            description: 'Our highly trained teachers will bridge across your study hurdles',
            button: 'Request of tution'
        },
        {
            title: 'Download books',
            primaryTitle: 'Learn with out skilled teachers',
            description: 'Our highly trained teachers will bridge across your study hurdles',
            button: 'Request of books'
        },
        {
            title: 'Video lectures',
            primaryTitle: 'Learn with out skilled teachers',
            description: 'Our highly trained teachers will bridge across your study hurdles',
            button: 'Request of lectures'
        },
    ]);

    useEffect(()=>{
        // console.log(request.toLocaleLowerCase().replace(/\s/g, ""));
        if(request.toLocaleLowerCase().replace(/\s/g, "")=='tutions'){
            navigate('/Tution')
        }else if(request.toLocaleLowerCase().replace(/\s/g, "")=='downloadbooks'){
            navigate('/DownloadBooks')
        }else if(request.toLocaleLowerCase().replace(/\s/g, "")=='videolectures'){
            navigate('/Lectures')
        }
    },[request]);

    return (
        <>
            <Container
                fluid
                className="dashboardContainer"
                style={{ minHeight: "100vh" }}
            >
                <Row>
                        <UserNavigation />
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12} className="AskQuestion_Column mt-5">
                        <h1>
                            How would you like to start <span>learning?</span>
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-2">
                    {
                        cards.map((obj, idx) => {
                            return (
                                <Col xs={12} md={12} lg={4} className='cardContainer'>
                                    <Card style={{ width: "100%" }} className='card mt-3'>
                                        <Card.Header className="cardHeader">{obj.title}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{obj.primaryTitle}</Card.Title>
                                            <Card.Text>
                                                {
                                                    obj.description
                                                }
                                            </Card.Text>
                                            <Button
                                                className="request_btn"
                                                variant="custom"
                                                onClick={
                                                    ()=>{
                                                        setRequest(obj.title)
                                                    }
                                                }
                                            >
                                                {obj.button} <i className="fa fa-arrow-right"></i>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Dashboard;
