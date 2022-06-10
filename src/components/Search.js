import styled from "styled-components";

function Search(){
    return(
    
        <SearchForm>
            <label name="SearchField" for="searchField">Search for Food:</label>
            <input id="searchField" name="SearchField" />
        </SearchForm>
    
)
}

export default Search

const SearchForm = styled.form`

display: flex;
flex-wrap: wrap;
max-width: 70%;
justify-content: center;
gap: 20px;
margin-top: 1em;

label {
    font-weight: 900;
}

#searchField {
    background-color: lightblue;
    border: solid 3px darkblue;
    border-radius: 12px;
    font-size: large;
    padding: 10px;
}
`
