import React, {FC, ReactElement} from "react";
import {Paper, Typography} from '@material-ui/core';

import mainStyles from './styles'
import Tweet from "../../components/tweet";
import TweetCreator from "../../components/tweet-creator";

const TemporaryVarTweetText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eaque eos laboriosam nesciunt qui tempore vitae voluptas! A animi culpa, est inventore optio praesentium veritatis liquam enim fugit perferendis sequi?";

const Main: FC = (): ReactElement => {
    const classes = mainStyles()

    return (
        <section className={classes.main}>
            <Paper elevation={3}>
                <Typography variant='h6'>Home</Typography>
                <TweetCreator/>
            </Paper>
            <Paper elevation={3} className={classes.mainTweetSection}>
                <Tweet
                    user={{
                        fullName: 'Natalie Portman',
                        username: '@natalieportman',
                        avatarUrl: 'https://stuki-druki.com/aforizms/Natalie-Portman-01.jpg',
                    }}
                    tweetText={TemporaryVarTweetText}
                />
                <Tweet
                    user={{
                        fullName: 'Natalie Portman',
                        username: '@natalieportman',
                        avatarUrl: 'https://stuki-druki.com/aforizms/Natalie-Portman-01.jpg',
                    }}
                    tweetText={TemporaryVarTweetText}
                />
                <Tweet
                    user={{
                        fullName: 'Natalie Portman',
                        username: '@natalieportman',
                        avatarUrl: 'https://stuki-druki.com/aforizms/Natalie-Portman-01.jpg',
                    }}
                    tweetText={TemporaryVarTweetText}
                />
            </Paper>
        </section>
    )
}

export default Main
