import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 40px 0;

  ul {
    margin: 30px auto;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    max-width: 600px;

    li {
      background: #e0e0e0;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 20px;
      list-style-type: none;
      width: 100%;
    }
  }

  button: {
    width: 100px;
    height: 45px;
  }
`;