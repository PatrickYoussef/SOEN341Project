import React, { Component } from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

export class NewsFeed extends Component {

    render() {
        return (
            <StreamApp
                apiKey="du8he7epvp94"
                appId="45206"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMzRjODM0NTgtMzhjZC00N2RkLTkxZjYtN2EwMDRmMDIzMGYzIn0.byMMzY7eTP4Hz64WIF3fQFetdhNQUeYHxqVcSQ8-LLQ"
            >
                <NotificationDropdown notify />
                <StatusUpdateForm
                    feedGroup="timeline"
                    userId="34c83458-38cd-47dd-91f6-7a004f0230f3" />
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