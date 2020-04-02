import React, { Component } from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm, UserBar } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import { NavMenu } from "./Navbar/NavMenu";

export class NewsFeed extends Component {
    
    render() {
        let userList = this.props.location.state.users
        let username = this.props.location.state.username
        let user  = userList.find(function (element) {
                return element.username == username;
            })
        return (
            <div>
                <NavMenu />
                <StreamApp
                    apiKey="urzuchjm2333"
                    appId="72302"
                    token={user.token}
                >
                
                    <NotificationDropdown notify />
                    <StatusUpdateForm
                        feedGroup="timeline"
                        userId={user.feedId}
                    />
             
                    <FlatFeed
                        feedGroup="timeline"
                        userId={user.feedId}
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

