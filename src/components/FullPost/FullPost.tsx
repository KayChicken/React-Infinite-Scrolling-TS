import React, { useEffect, useState } from 'react';
import styles from './FullPost.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { INewsItem } from '../Main/Main';
import Skeleton from '../Skeleton/Skeleton';





const FullPost: React.FC = () => {

    const params = useParams()
    const [post, setPost] = useState<INewsItem>()
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchPost()
    }, [])


    const fetchPost = async () => {
        const response = await axios.get<INewsItem[]>(`https://jsonplaceholder.typicode.com/photos?id=${params.id}`)
        setPost(response.data[0])
        setLoading(false)

    }

    console.log(post)

    return (
        <div className={styles.container}>  
            {isLoading ? (
                
                    <Skeleton />
                ) : (
                <div>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={post?.url} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>{post?.title}</div>
                        <div className={styles.bodyContainer}>
                            <div className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed justo tempus, cursus dui quis, posuere leo. Ut sagittis maximus lorem, sit amet venenatis neque interdum id. Cras at justo felis. Donec eu mauris metus. Praesent sit amet semper risus, et convallis lacus. Sed sollicitudin lectus id consectetur pharetra. Pellentesque imperdiet viverra viverra. Mauris rhoncus aliquam velit, vel elementum ex porta ornare. Mauris et cursus risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed posuere, neque sit amet porttitor sodales, est enim congue leo, non vehicula velit leo et odio. Duis blandit ac lectus et imperdiet. Donec vel pulvinar nibh. Nullam sodales nisl orci, et scelerisque lacus fermentum in. Cras tincidunt lectus eu felis gravida finibus.</div>
                        </div>


                    </div>
                </div>
            )}


        </div>
    );
};

export default FullPost;