import React, { Component, stream } from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
require('dotenv').config();

const secret = process.env.STREAM_API_SECRET;
const ayah = "ayah";
const gg = "";
export class NewsFeed extends Component {
    
    render() {
       
        return (
            <StreamApp //this is only an example account, should be the users info :)
                apiKey="5y6k3egn3yzs"
                appId="71363"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.5goB9AX3-mz3TUpfdeZ8Fcj-E_Q_W7fe_T-FQTHdGvQ"
            >
                <NotificationDropdown notify />
                <StatusUpdateForm
                    feedGroup="timeline"
                    userId="user-one"/>
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