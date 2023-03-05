import React from "react";
import { useTranslation, withTranslation } from 'react-i18next';
import './SearchForm.scss'

const SearchForm = ({ text, onChange }) => {
    const [t] = useTranslation();
    const handleSearchChange = e => {
        console.log("I'm searching for: " + e.target.value);
        onChange(e.target.value)
    };

    return (
        <div className=" form-outline">
            <input
                required
                className="search-input col-md-3 my-4 fs-6"
                type="text"
                value={text}
                onChange={handleSearchChange}
                placeholder={t("search.searchTitle")}
            />
        </div>
    );
}
export default withTranslation()(SearchForm);