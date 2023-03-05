import React from "react";
import Form from 'react-bootstrap/Form';

const SearchForm = ({ text, onChange }) => {
    const handleSearchChange = e => {
        console.log("I'm searching for: " + e.target.value);
        onChange(e.target.value)
    };

    return (
        <Form className=" form-outline">
            <Form.Control
                required
                className="search-input col-md-3 my-4 fs-6"
                type="text"
                value={text}
                onChange={handleSearchChange}
                placeholder=""
            />
        </Form>
    );
}
export default withTranslation()(SearchForm);