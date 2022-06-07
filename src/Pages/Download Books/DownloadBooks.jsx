import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row, Button, Form, Modal } from 'react-bootstrap';
// import contactDataService from '../../Services/ContactDB';
import booksDataService from '../../Services/BooksDB';
import UserNavigation from '../../Components/UserNavigation';
import Footer from '../../Views/Footer';
import AddBooks from './AddBooks';
import './DownloadBooks.css';
import cover from '../../Assets/bookCover.jpg';

function DownloadBooks() {
    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);
    const [filter, setFilter] = useState({
        grade : 'Show All Books',
        subject : 'Show All Subjects'
    });

    const [options, setOptions] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);


    
    const getBooks = async () => {
        const data = await booksDataService.getAllBooks();
        // console.log(data.docs);
        setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const newWindow = (link, access) => {
        if (access == 'y') {
            window.open(link);
        } else {
            alert('Book is currently not available. We will make it available soon');
        }
    }

    const handleClose = () => {
        setShow(false)
    }

    const filteredItems = (obj) => {
        if ((filter.grade === 'Show All Books') && (filter.subject === 'Show All Subjects')) {
            return obj
        } else {
            if (filter.grade !== 'Show All Books') {
                return obj.grade == filter.grade;
            }
        }
    } 

    return (
        <>
            <Container fluid style={{ minHeight: '100vh' }}>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header clo seButton>
                        <Modal.Title>
                            <h4>Filter Books</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Serach by grade</Form.Label>
                                <Form.Select
                                aria-label="Default select example"
                                onChange = {(e) => setFilter({...filter, grade : e.target.value})}
                                >   
                                    
                                    <option value='Show All Books'>Show All Books</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                           <Button
                            variant="primary"
                            onClick={handleClose}
                            style = {{backgroundColor : '#072A52', fontWeight : '600'}}
                        >
                            Filter
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Row>
                    <UserNavigation />
                </Row>
                <Row className='mt-5'>
                    <Col md={12} xs={12} lg={12}>
                        <div className='downloadBooksHead'>
                            <h1>Download <span>ebooks</span> for free</h1>
                            <Button
                                className='search-btn'
                                onClick={()=>setShow(!show)}
                            >Search</Button>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={12} xs={12} lg={12}>
                        <div className='displayBooks'>
                            {   
                                books.filter((obj)=>filteredItems(obj)).map((o, idx) => {
                                    return (
                                        <div className='bookCard'>
                                            <img src={cover} className='mb-3' />
                                            <h6>Subject: {o.subject}</h6>
                                            <h6>Book Name: {o.bookname}</h6>
                                            <h6>For Class: {o.grade}</h6>
                                            <h6>Author: {o.author}</h6>
                                            <h6>Publisher: {o.publisher}</h6>
                                            <Button
                                                className='download'
                                                onClick={() => newWindow(o.link, o.downloadable)}
                                            >Download</Button>
                                        </div>
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

export default DownloadBooks;