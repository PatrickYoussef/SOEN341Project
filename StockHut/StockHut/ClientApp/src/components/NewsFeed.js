import React, { Component } from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm, UserBar } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import { NavMenu } from "./Navbar/NavMenu";
import axios from 'axios'

export class NewsFeed extends Component {

    constructor() {
        super()
        this.state = {
            id: -1,
            username: "laurent",
            password: "",
            token: "",
            feedId: ""
        }
    }

    componentDidMount() {
        fetch('https://localhost:44314/api/Users/UserName/' + this.props.location.state.username)
            .then(response => response.json())
            .then(data => {
                this.state.id = data.id;
                this.state.username = data.username;
                this.state.password = data.password;
                this.state.token = data.token;
                this.state.feedId = data.feedId;
                console.log(this.state)
            })
    }
    
    render() {
        let token = this.state.token
        let userId = this.state.feedId

        return (
            <div>
                <NavMenu />
                <StreamApp //this is only an example account, WE SHOULD PASS THE CURRRENT USER AND GET ITS TOKEN AND FEEDID     so token is token and userId is feedId
                    apiKey="urzuchjm2333"
                    appId="72302"
                    token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYTIwNDhmN2MzZjk5NGQ2YTg2YjVmOWQxNDg3YjZjNzUifQ.zjqtFVhRRWX6-Le2-lSpyDBF8M76FSpg7JiKFfKn4qk"//**********
                >
                
                    <NotificationDropdown notify />
                    <StatusUpdateForm
                        feedGroup="timeline"
                        userId="a2048f7c3f994d6a86b5f9d1487b6c75"//**********
                    />
             
                    <FlatFeed
                        feedGroup="timeline"
                        userId="a2048f7c3f994d6a86b5f9d1487b6c75"//**********
                        options={{ reactions: { recent: true } }}
                        notify
                        Activity={(props) =>
                            <Activity {...props}
                                Footer={() => (
                                    <div style={{ padding: '8px 16px' }}>
                                        <LikeButton {...props} />
                                        <CommentField
                                            activity={props.activity}
                                            onAddReaction={props.onAddReaction} />
                                        <CommentList activityId={props.activity.id} />
                                    </div>
                                )}
                            />
                        }   
                    />
                </StreamApp>
            </div>
        );
    }
}

/**
 * Once users are created with the token, we can add this piece of code
 * cant do it now because the account we are logged in is inappropriate
 * <CommentList activityId={props.activity.id} />
  */