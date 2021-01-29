import React, { Component,Fragment } from 'react';


class about extends Component { 
	
    // start app load css and any 
    componentDidMount() {
      document.getElementById("css").setAttribute("href","/css/about.css");
    }

  render() { 
    return ( 
    	<Fragment>
	      <div class="container container-about shadow">
	      	<h5>Game untuk menguji dan melatih seberapa cepat tangan anda dalam hal mengetik</h5>
	      	<h5>Sangat Cocok bagi anda yang suka ngetik :) </h5>
	      	<div id="footer-about">
		      	<p>&copy; Copyright by Ahas Eko Septianto</p>
		      	<p>19-12-2020 bekasi</p>
	      	</div>
	      </div>
      	</Fragment>
   ); 
  } 
} 

export default about ;