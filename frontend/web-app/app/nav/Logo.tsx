'use client'

import { useParamsStore } from '@/hooks/useParamsStore';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'
import { AiOutlineCar } from 'react-icons/ai';

export default function Logo() {
    const router = useRouter();
    const pathName = usePathname();
    const reset = useParamsStore(state => state.reset);

    function doReset() {
        if (pathName !== '/') router.push('/');
        reset()
    }

    return (
        <div onClick={doReset} className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-blue-800'>
            <AiOutlineCar size={34} />
            <div>LazarBazaar Auctions</div>
        </div>
    )
}
