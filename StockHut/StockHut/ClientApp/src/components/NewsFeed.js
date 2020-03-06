import React, { Component } from 'react';
import {StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import stream from 'getstream';

export class NewsFeed extends Component {
    
    render() {
    //const client = stream.connect('5y6k3egn3yzs', 'wp5frj3m5dbzcngp3nsqrrahuu4dx7umrtvud8bvdbm929nr2rvrzmrvjg6fe424');
    let userToken = stream.createUserToken("user-two");
        return (
            <StreamApp //this is only an example account, should be the users info :)
                apiKey = "5y6k3egn3yzs"
                appId="71363"
                token={userToken}> 
            >
        <NotificationDropdown notify />
                <StatusUpdateForm
                    //feedGroup="timeline"
                //userId="user-two" 
                />
                <FlatFeed
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
        );
    }
}

/**
 * Once users are created with the token, we can add this piece of code
 * cant do it now because the account we are logged in is inappropriate
 * <CommentList activityId={props.activity.id} />
  */