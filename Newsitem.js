import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title , description , imageurl , newsUrl}  = this.props;
    return (
    <>

    <div style={{margin : "10px" ,  display : "flex" , flexWrap : "wrap"}}>
        
  <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
  <img src={imageurl} class="card-img-top" alt="..."/>
   
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href={newsUrl } target={'_blank'} rel= "noreferrer" class="btn btn-primary btn btn-sm">Read More</a>
  </div>

     </div> 


  
</div>

    </>
 
    )
  }
}

export default Newsitem
