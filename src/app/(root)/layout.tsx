import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

export default async function SeptupLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in')
    }

    console.log('Hola')

    const store = await prismadb.store.findFirst({
        where: {
            userId
        }
    });


 
    if (store) {
        redirect(`/${store.id}`)
    }
    return (
        <>
        {children}
        </>
    )
}
