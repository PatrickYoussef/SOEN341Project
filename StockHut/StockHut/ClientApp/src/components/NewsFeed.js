import React, { Component } from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm, UserBar } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import { NavMenu } from "./Navbar/NavMenu";

export class NewsFeed extends Component {

    constructor() {
        super()
        this.state = {
            username: ""
        }
    }

    UNSAFE_componentWillMount() {
        fetch('https://localhost:44314/api/Users/Username/' + this.props.location.state.username)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    username: data.username
                })
            })
    }
    
    render() {

        return (
            <div>
                <NavMenu />
                <StreamApp
                    apiKey="urzuchjm2333"
                    appId="72302"
                    token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZjAxOTQ0OGNjYjlkNDc1MWI5OTY2MzIyYmIxYmQxNmQifQ.S9OU_EoVcV9IuO9DJ3u7y7NjdRK6gY6fPIO8RVYk3cU"
                >
                    <div style={{ fontSize: 28 }}>{this.state.username}</div>
                    <NotificationDropdown notify />
                    <StatusUpdateForm
                        feedGroup="timeline"
                        userId="f019448ccb9d4751b9966322bb1bd16d"
                    />
             
                    <FlatFeed
                        feedGroup="timeline"
                        userId="f019448ccb9d4751b9966322bb1bd16d"
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

