import React, { Component } from 'react';
import MapChart from 'components/MapChart/Index';

import axios from 'axios';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  airports : []}
    }
    componentDidMount() {
    axios.get('http://localhost:4000/api/airports')
      .then(res => {
        this.setState({ airports:  res.data.airports});
      })
  } 
    centralComponent(){
        if(this.state.airports.length == 0){
            return   <ClipLoader color="ffffff" loading="true" css={override} size={150} />
        }
        else{
            return <div><MapChart  airports={this.state.airports}/></div> ;
        }
    }
    render() { 
        return ( <div>
            {this.centralComponent()}
        </div> );
    }
}
 
export default HomeComponent;