import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useChannel, useEvent } from '@harelpls/use-pusher';
import { useEffect, useRef, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Home: NextPage = () => {
    const [message, setMessages] = useState([]);
    const [resource, setResources] = useState([
        'http://localhost:3000/sample.pdf',
        'https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/mountains.jpg',
    ]);

    const [numPages, setNumPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

    const channel = useChannel('my-channel');
    // const pdfURL = 'https://www.africau.edu/images/default/sample.pdf';
    // const pdfURL = '/files/sample.pdf';
    const pdfURL = 'http://localhost:3000/sample.pdf';

    // useEvent(channel, 'my-event2', ({ data: any }) => {
    //     console.log('recieved ', data);
    //     setMessages((messages) => [...messages, data]);
    // });

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Guidance App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Production Control</h1>
                <p>message: {message}</p>
                <p className={styles.description}>List of tasks</p>
                {message.map((element, index) => (
                    <div className={styles.grid} key={index}>
                        <h2 className={styles.card}> {element}</h2>
                    </div>
                ))}
                <p className={styles.description}>Resource:</p>
                {resource.map((element, index) =>
                    // if not ending in pdf
                    !element.endsWith('.pdf') ? (
                        <>
                            <Image
                                alt="Mountains"
                                src={element}
                                width={300}
                                height={175}
                                // sizes="50vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </>
                    ) : (
                        <div className="Example__container__document">
                            <Document file={element}>
                                <Page pageNumber={pageNumber} />
                            </Document>
                        </div>
                    )
                )}
            </main>
        </div>
    );
};

export default Home;