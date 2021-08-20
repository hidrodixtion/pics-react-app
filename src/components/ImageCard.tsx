import React from "react";
import { ImageModel } from "../model/ImageModel";

interface MyProp {
    image: ImageModel
}

interface MyState {
    spans: number
}

class ImageCard extends React.Component<MyProp, MyState> {
    state: MyState = {
        spans: 0
    }

    imageRef: React.RefObject<HTMLImageElement>

    constructor(prop: MyProp) {
        super(prop)

        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current?.addEventListener('load', this.setSpans)
        // console.log(this.imageRef.current)
    }

    setSpans = () => {
        let height = this.imageRef.current?.clientHeight ?? 0
        let spans = Math.ceil(height / 10)
        this.setState({ spans })
    }

    render() {
        let { description, url } = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={url} alt={description}/>
            </div>
        )
    }
}

export default ImageCard