'use client'

import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    id: string
}

export default function EditButtton({ id }: Props) {
    return (
        <Button outline>
            <Link href={`/auctions/update/${id}`}>Edit Auction</Link>
        </Button>
    )
}
