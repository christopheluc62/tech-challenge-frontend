import styled from 'styled-components';

const StyledMain = styled.div`
  .main {
    height: 563px;
  }
  .new-member-form {
    margin: 1em 0 4em 0;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 0.5em;
  }

  input {
    margin-right: 0.5em;
    margin-top: 0.5em;
  }

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.8em;
    padding-top: 1em;
    padding-bottom: 2em;
  }

  .member-list {
    columns: 3;
  }

  .member {
    padding-top: 1.5em;
    font-weight: 600;
    font-size: 1em;
    width: auto;
    display: flex;
    justify-content: center;
    color: black;
  }
`;

export default StyledMain;
