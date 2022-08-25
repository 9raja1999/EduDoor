import React, { useState } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import Gallery from 'react-grid-gallery'

import GridImage1 from '../../Assets/GridImages/image1.jpeg'
import GridImage2 from '../../Assets/GridImages/image2.jpeg'
import GridImage3 from '../../Assets/GridImages/image3.jpeg'
import GrmidImage4 from '../../Assets/Paramount/1.jpeg'
import GrmidImage5 from '../../Assets/Paramount/2.jpeg'
import GrmidImage6 from '../../Assets/Paramount/3.jpeg'
import GrmidImage7 from '../../Assets/Paramount/4.jpeg'
import GrmidImage8 from '../../Assets/GridImages/image4.jpeg'
function Images() {
    const [imagesGrid, setImagesGrid] = useState([
        {
            src: GridImage1,
            thumbnail: GridImage1,
            thumbnailWidth: 240,
            thumbnailHeight: 320,
            caption: ""
        },
        {
            src: GridImage2,
            thumbnail: GridImage2,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            caption: ""
        },
        {
            src: GridImage3,
            thumbnail: GridImage3,
            thumbnailWidth: 320,
            thumbnailHeight: 148,
            caption: ""
        },
        {
            src: GrmidImage4,
            thumbnail: GrmidImage4,
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
        },
        {
            src: GrmidImage5,
            thumbnail: GrmidImage5,
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: ""
        },
        {
            src: GrmidImage6,
            thumbnail: GrmidImage6,
            thumbnailWidth: 320,
            thumbnailHeight: 113,
            caption: ""
        },
        {
            src: GrmidImage7,
            thumbnail: GrmidImage7,
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: ""
        },
        {
            src: GrmidImage8,
            thumbnail: GrmidImage8,
            thumbnailWidth: 453,
            thumbnailHeight: 550,
            caption: ""
        },
    ])


    const onSelectImage = (index, image) => {
        let images = imagesGrid.slice();
        let img = images[index]
        if (img.hasOwnProperty("isSelected"))
            console.log('Selected')
        else
            console.log('Not selected')
    }
    return (
        <Container fluid className='PartnerSchoolContainer mt-5 mb-5'>
            <Row>
                <Col md={6} xs={12} className="Partner_column" style={{ margin: '0 auto' }}>
                    <div className="Partner_heading" style={{ marginTop: '5%', marginBottom: 'auto' }}>
                        <h6>Gallery</h6>
                        <hr />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} xs={12} className="Partner_column" style={{ margin: '0 auto 5% auto' }}>
                    <div style={{
                        display: "block",
                        minHeight: "1px",
                        margin: '0 auto',
                        overflow: "auto"
                    }}>
                        <Gallery
                            images={imagesGrid}
                            onSelectImage={onSelectImage}
                            lightboxWidth={1536}
                            isOpen={false}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Images