import React from 'react'
import {Form, Col}  from "react-bootstrap"
function SearchForm({params, onParamChange}) {
    return (
        <Form className ="mb-4">
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.label>  Description</Form.label>
                    <Form.Control onChnage={onParamChange}>
                        {params.description} name="discription"

                    </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    ) 
}

export default SearchForm
