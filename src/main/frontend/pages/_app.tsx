import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PusherProvider } from '@harelpls/use-pusher';

const config = {
    clientKey: '88fb07199586b1f7928d',
    cluster: 'eu',
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PusherProvider {...config}>
            <Component {...pageProps} />;
        </PusherProvider>
    );
}

export default MyApp;
