import React, {Component} from 'react';
import facebook from "./fb.jpg";
import "./FbButton.css"


class FacebookButton extends Component {
  state = {
         user: null,
      }



   componentDidMount() {
     window.fbAsyncInit = function() {
       window.FB.init({
          appId      : '1871953466247879',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        autoLogAppEvents: true,
        xfbml      : true,  // parse social plugins on this page
        version    : 'v3.0' // The Graph API version to use for the call
    });

  };

  (function(d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) return;
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

}

login = () => {
    window.FB.login(
      response => {this.statusChangeCallback(response)},
      {scope :'email, public_profile'}
    );
}

statusChangeCallback(response){
  console.log('statusChangeCallback',response);
  if (response.status === 'connected') {
      this.apiCall();
      console.log('Connecté!')
      // Logged into your app and Facebook.
  } else if (response.status === 'not_autorized') {
    console.log('Connecté à FB mais pas à lappli')

  } else {
    console.log('Pas connecte a facebook')
      // The person is not logged into this app or we are unable to tell.
  }
}

apiCall(){
  console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
     // document.getElementById('status').innerHTML =
      //  'Thanks for logging in, ' + response.name + '!';
      this.setState({
        user: response.name,
      })
    }.bind(this));
}

   render() {
      return (
<div>
          Appuyez sur l'image pour vous connecter
         <img src={facebook} width="200" id ="button" title="facebook login" alt ="facebook" onClick = {this.login} />

</div>
      )
   }
}

export default FacebookButton;
