'use client';

import { Toaster, toast } from 'sonner';
import styles from '../styles/components/toastWrapper.module.scss'
import { LinkIcon } from './icons';

function renderToast() {
    navigator.clipboard.writeText(window.location.href);
    toast('Copied to clipboard!')
}

export default function CopyLink() {
    return (
        <>
            <button aria-label='Copy link' className='text-titan-500 hover:text-black dark:hover:text-white' onClick={() => renderToast()}>
                <LinkIcon />
            </button>
            <Toaster theme="system" expand visibleToasts={1} toastOptions={{ className: styles.toast }} />
        </>
    );
}
