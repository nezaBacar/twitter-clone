import styled from 'styled-components';

const dropdown = (props) => {
    let dropdownValues = props.possibleValues.map(key => 
        <PossibleValues key={key} value={key}>{key}</PossibleValues>
    );

    return (
        <DropdownMenu value={props.value} onChange={props.handleChange}>
            {dropdownValues}
        </DropdownMenu>
    );
}

export default dropdown;


const DropdownMenu = styled.select`
    max-width: 400px;
    background-color: #FFF;
    color: #5dade2;
    font-weight: bold;
    padding: 16px 0;
    font-size: 16px;
    border: none;
    cursor: pointer;
    outline: none;
    /* for Firefox */ 
    -moz-appearance: none; 
    /* for Safari, Chrome, Opera */ 
    -webkit-appearance: none; 

    &:hover, :focus {
        color: #2980B9;
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }
`

const PossibleValues = styled.option`
    background: white;
    color: black;

    &:hover {
        background: #000 !important;
        color: #5dade2 !important;
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }

`


