import React, { Component } from 'react';
import $ from 'jquery' ;   // $  npm install jquery


class UserGist extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            lastGistUrl: ''
        };
    }


    componentDidMount() {
        // $.get(this.props.source, (result) => {
        //     let lastGist = result[0];


        //         this.setState({
        //             username: lastGist.owner.login,
        //             lastGistUrl: lastGist.html_url
        //         });

        // });
        fetch(this.props.source)
            .then(response => response.json())
                .then(result =>{ 
                    let lastGist = result[0];
                    console.log(result);
                    console.log("-----------");
                    console.log(lastGist);
                        this.setState({
                            username: lastGist.owner.login,
                            lastGistUrl: lastGist.html_url
                        });
                    }).catch((error) => {
                        console.error('Error:', error);
                      });


                
    }

    render() {
        return (
            <div>
                {this.state.username}: last gist is <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
}

export default UserGist ;

    // <UserGist source="https://api.github.com/users/octocat/gists" />