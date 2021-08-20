import React from "react";
import { Container } from "react-bootstrap";
import { ImageModel } from "../model/ImageModel";
import ImageCard from './ImageCard'
import './ImageList.css'

interface MyProps {
    images: ImageModel[]
}

const ImageList = (props: MyProps) => {
    console.log(props.images)

    let images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
        // return <img key={image.id} src={image.url} alt={image.description}/>
        // className="img-thumbnail m-1" style={{width: 200, height: 200, objectFit: 'cover'}}/>
    })

    return(
        // <div className="d-flex flex-wrap justify-content-center">
        //     {images}
        // </div>
        <div className="image-list">{images}</div>
    )
}

export default ImageList