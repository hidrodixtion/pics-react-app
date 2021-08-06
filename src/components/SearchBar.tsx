import React from "react";
import { Form } from "react-bootstrap";

interface MyState {
    term: string
}

interface MyProp {
    onSubmit: (term: string) => void
}

class SearchBar extends React.Component<MyProp, MyState> {

    state: MyState = {
        term: ''
    }

    onInputChange(e: React.BaseSyntheticEvent) {
        this.setState({term: e.target.value})
    }

    onFormSubmit(e: React.BaseSyntheticEvent) {
        e.preventDefault()
        
        console.log(this.state.term)
    }

    onFormSubmit2 = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        console.log(this.state.term)

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit2}>
                <Form.Label>Image Search</Form.Label>
                {/* <Form.Control type="text" placeholder="Search" onChange={this.onInputChange.bind(this)}/> */}
                <Form.Control type="text" placeholder="Search" onChange={e => this.onInputChange(e)}/>
            </Form>
        )
    }
}

export default SearchBar