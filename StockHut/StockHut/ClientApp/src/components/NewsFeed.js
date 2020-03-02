import React, { Component, stream } from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

export class NewsFeed extends Component {
    
    render() {
       
        return (
            <StreamApp //this is only an example account, should be the users info :)
                apiKey="du8he7epvp94"
                appId="45206"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTYwNzYyOWMtZjkzYy00YzdiLWFjMjQtMjk1NDA2NzkzYThhIn0.uycxoR39yw9b-r1EI-UMiQuQJZCKFZo3kRW9aBvkId4"
            >
                <NotificationDropdown notify />
                <StatusUpdateForm
                    feedGroup="timeline"
                    userId="1607629c-f93c-4c7b-ac24-295406793a8a"/>
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