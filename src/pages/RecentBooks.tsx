import BookCard from '@/components/BookCard';
import { useGetRecentBooksQuery } from '@/redux/api/apiSlice';
import { IBook } from '@/types/globalTypes';
import React from 'react';

const RecentBooks = () => {
    const { data, isLoading, error } = useGetRecentBooksQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 1000
    }
    )

    if (isLoading) {
        return <p>Loading</p>
    }
    if (error) {
        return <p>Error</p>
    }
    return (
        <div>
            <p className='mt-10 font-semibold text-xl'>Recently Added</p>


            <div className="flex justify-between col-span-9 mt-10 grid md:grid-cols-3 lg:grid-cols-3 gap-10 pb-20">
                {
                    data?.data?.map((book: IBook) => (
                        <BookCard book={book} />
                    ))
                }
            </div>




        </div>
    );
};

export default RecentBooks;