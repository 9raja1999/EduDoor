import React, { useEffect } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useState } from 'react'



import one from '../../Assets/Paramount/1.jpeg'
import two from '../../Assets/Paramount/2.jpeg'
import three from '../../Assets/Paramount/3.jpeg'
import four from '../../Assets/Paramount/4.jpeg'


function Paramount() {
    const [imagesArray, setImagesArray] = useState([
        three,
        two,
        one,
        four
    ])
    const [displayImage, setDisplayImage] = useState(null)

    useEffect(()=>{
        setDisplayImage(imagesArray[1])
    },[])

    
    const onChange = (link, o) => {
        setDisplayImage(imagesArray[link])
    }


    useEffect(()=>{
        console.log('dis',displayImage)
    },[displayImage])
    return (
        <Container fluid className='PartnerSchoolContainer mt-5 mb-5'>
            <Row style={{marginTop : '10%'}}>
                <Col md={6} xs={12} className="Partner_column">
                    <div className="Partner_heading" style={{marginTop : '15%', marginBottom : 'auto'}}>
                        <h6>Contract Signing ceremony between Paramount Books (Pvt) Ltd. and ParhaiCastle</h6>
                        <hr />
                    </div>
                </Col>
                <Col md={6} xs={12} className="Partner_column">
                    <Carousel
                        showArrows={true}
                        onChange={onChange}
                        showStatus={false}
                        showIndicators={false}
                        autoPlay
                    >
                        {
                            imagesArray.map((_, idx) => {
                                return (
                                    <div style={{ height : '60vh'}}>
                                        <img alt="" src={_} width='100%' height='100%' />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Paramount