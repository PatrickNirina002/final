
import React, { Component } from 'react';
import axios from 'axios';
import ReactImageMagnify from 'react-image-magnify';

export default class ListTous extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/profil')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (
<div class="col-md-2 carde">
<div class="card">
<div className="imag">
<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: 'http://localhost:8080/user/'+obj.photo_profil,
        
    },
    largeImage: {
        src: 'http://localhost:8080/user/'+obj.photo_profil,
        width: 1200,
        height: 1800
    }
}} />
</div>



<div class="card-body">

  
  <h4 class="card-title">{obj.nom}</h4>

  <p class="card-text">{obj.email}</p>
  <a  class="btn btn-primary">{obj.password}</a><br/>
  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">  <i class="fas fa-shopping-cart grey-text ml-3"></i> </a>

</div>
</div>
</div>)

                            })) : ('')
                        }
                
        </div>
        </div>
    }
    render() {
        return (
            <div >
                {this.liste()}
            </div>
        );
    }
}