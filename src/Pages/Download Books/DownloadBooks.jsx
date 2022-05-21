import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
// import contactDataService from '../../Services/ContactDB';
import booksDataService from '../../Services/BooksDB';
import UserNavigation from '../../Components/UserNavigation';
import Footer from '../../Views/Footer';
import AddBooks from './AddBooks';
import './DownloadBooks.css';
import cover from '../../Assets/bookCover.jpg';

function DownloadBooks() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState();

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

    console.log(search)
    return (
        <>
            <Container fluid style={{ minHeight: '100vh' }}>
                <Row>
                    <UserNavigation />
                </Row>
                <Row className='mt-5'>
                    <Col md={12} xs={12} lg={12}>
                        <div className='downloadBooksHead'>
                            <h1>Download <span>ebooks</span> for free</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search for books"
                                        value = {search}
                                        onChange={(e)=>setSearch(e.target.value)}    
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col md={12} xs={12} lg={12}>
                        <div className='displayBooks'>
                            {
                                books.map((obj, idx) => {
                                    return (
                                        <div className='bookCard'>
                                            <img src={cover} className='mb-3' />
                                            <h6>Subject: {obj.subject}</h6>
                                            <h6>Book Name: {obj.bookname}</h6>
                                            <h6>For Class: {obj.grade}</h6>
                                            <h6>Author: {obj.author}</h6>
                                            <h6>Publisher: {obj.publisher}</h6>
                                            <Button
                                                className='download'
                                                onClick={() => newWindow(obj.link, obj.downloadable)}
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