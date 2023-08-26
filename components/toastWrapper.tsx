'use client';

import { Toaster, toast } from 'sonner';
import styles from '../styles/components/toastWrapper.module.scss'
import { LinkIcon } from '../components/icons';

function renderToast() {
    navigator.clipboard.writeText(window.location.href);
    toast('Copied to clipboard!')
}

export default function ToastWrapper() {
    return (
        <>
            <button aria-label='Copy link' className='text-titan-500' onClick={() => renderToast()}>
                <LinkIcon />
            </button>
            <Toaster theme="system" toastOptions={{ className: styles.toast }} />
        </>
    );
}
