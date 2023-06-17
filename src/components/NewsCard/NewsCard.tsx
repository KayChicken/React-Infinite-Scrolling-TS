import React from 'react';
import styles from './NewsCard.module.css'
import { Link } from 'react-router-dom';
import { INewsItem } from '../Main/Main';

interface INewsCardProps {
    item: INewsItem
    id : number
}



const NewsCard: React.FC<INewsCardProps> = ({ item, id }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={item.url} alt="" />
            </div>
            <div className={styles.content}>
                <Link className={styles.title} to={`/post/${id}`}>{item.title}</Link>
                <div className={styles.bodyContainer}>
                    <div className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed justo tempus, cursus dui quis, posuere leo. Ut sagittis maximus lorem, sit amet venenatis neque interdum id. Cras at justo felis. Donec eu mauris metus. Praesent sit amet semper risus, et convallis lacus. Sed sollicitudin lectus id consectetur pharetra. Pellentesque imperdiet viverra viverra. Mauris rhoncus aliquam velit, vel elementum ex porta ornare. Mauris et cursus risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed posuere, neque sit amet porttitor sodales, est enim congue leo, non vehicula velit leo et odio. Duis blandit ac lectus et imperdiet. Donec vel pulvinar nibh. Nullam sodales nisl orci, et scelerisque lacus fermentum in. Cras tincidunt lectus eu felis gravida finibus.</div>
                </div>
                
            </div>

        </div>
    );
};

export default NewsCard;