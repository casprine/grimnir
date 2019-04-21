import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
            border: 0;
            box-sizing: inherit;
            -webkit-font-smoothing: antialiased;
          font-family:  -apple-system,BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important; 
            font-weight: inherit;
            margin: 0;
            padding: 0;
            text-decoration: none;
            text-rendering: optimizeLegibility;
            
        }


        html,body  {
            height:100vh;
        }


        ul , ol{
            list-style-type:none;
          }

        body {
            background-color: #e6edf1;
        }

        .pointer{
          cursor: pointer;
        }
        

button{
  cursor: pointer;

}

        .center {
          display:flex;
          justify-content:center;
          align-items:center;        }
`;

export default GlobalStyle;
