import React, { Component } from 'react';
import './ImgsList.css';
import { Link } from 'react-router-dom';



class ImgsList extends Component {
    constructor(props){
      super(props);
      this.state = {
        imgs: [],
        url: ''
      }
    }
  
    componentDidMount() {
      fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
        .then(res => res.json())
        .then(data => {
          this.setState({ imgs: data });
         
        })
        .catch(err => {
          console.log('Error happened during fetching!', err);
        });
    }

    render() {
        return(
            <div className="container">
                <div className="gallery">
                    {this.state.imgs.map((item, i) => {
                        
                        return(
                            <Link to="/fullimage">
                                <div className="gallery-item" key={i}  onClick={() => this.props.fullScreenImage(item.urls.full)}>
                                <img src={item.urls.small}  alt="picture" />
                                    <span className="text-wrapper">
                                        <span className="name">Created by: </span>
                                        <span className="title">{item.user.first_name} {item.user.last_name}</span>
                                    </span>
                                </div>  
                            </Link>
         
                        )
                    })}
                </div>
            </div> 
        )
    }
  }


export default ImgsList;