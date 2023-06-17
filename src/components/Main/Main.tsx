import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styles from './Main.module.css'

import NewsCard from '../NewsCard/NewsCard';

export interface INewsItem {
    id: number
    title: string
    url: string
}




const Main: React.FC = () => {


    const [news, setNews] = useState<INewsItem[]>([])
    const [fetch, setFetch] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)
    const isNews = useRef(true)



    useEffect(() => {
        if (fetch) {
            fetchNews()
            setFetch(false)
        }

    }, [fetch])


    useEffect(() => {
        document.addEventListener(('scroll'), scrollHandler)
    }, [])

    const fetchNews = async () => {
        const response = await axios.get<INewsItem[]>(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}}`)
        if (response.data.length > 0) {
            setNews([...news, ...response.data])
            setPage(page + 1)


        }

        else {
            isNews.current = false
        }





    }

    const scrollHandler = (e: any) => {

        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10) && isNews.current) {
            setFetch(true)
        }



    }

    return (

        <div className={styles.container}>
            {news.map((item) => (
                <NewsCard key={item.id} item={item} id={item.id} />
            ))}
        </div>

    );
};

export default Main;
