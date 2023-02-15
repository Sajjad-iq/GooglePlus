import React, { MouseEventHandler } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { Post } from '../../../../Components/shared/Post'
import { PostToggleSection } from '../../styled/PostsToggleSection.styled'
import { AddPostComponent } from '../AddPostComponent'

interface Props {
    IsPostsActive: boolean
    Toggle: MouseEventHandler
    Loading: boolean
    ActivePostsToggle: MouseEventHandler
    Response: any
}

export const Posts = React.memo((props: Props) => {
    return (
        <PostToggleSection display={props.IsPostsActive ? "block" : "none"}>
            < ResponsiveMasonry
                columnsCountBreakPoints={{ 768: 1, 1023: 2, 1919: 3 }}
            >
                <Masonry >
                    <AddPostComponent IsActive={props.IsPostsActive} OpenFunction={props.Toggle} />
                    {props.Loading ? <h1>Loading...</h1> :
                        props.Response?.data.map((e: any) => {
                            return <Post
                                IsPostPreview={false}
                                key={e._id}
                                onClick={props.ActivePostsToggle}
                                PostBody={e.PostBody}
                            />
                        })
                    }
                </Masonry>
            </ResponsiveMasonry >
        </PostToggleSection>
    )
}
)