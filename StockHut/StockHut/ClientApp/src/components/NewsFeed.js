import React, { Component } from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm, UserBar } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

export class NewsFeed extends Component {
    
    render() {
       
        return (
            <StreamApp //this is only an example account, should be the users info :)
                apiKey="urzuchjm2333"
                appId="72302"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMCJ9.bvSyZltDDtXhpEIXrqeyTCxRSTwU3eBfKodPt3pZL0s"
            >
                
                <NotificationDropdown notify />
                <StatusUpdateForm
                    feedGroup="user"
                    userId="0"
                />
                <UserBar
                            username="Jenn"
                            avatar="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" >
                        </UserBar> 
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
                    doFeedRequest
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