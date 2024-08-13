'use client';
import { toast } from 'sonner';
import useSWR from 'swr';

export default function Page() {
  const { data, error, isLoading } = useSWR('/api/home', fetcher, {
    onError: () => {
      //before error
      alert('something went wrong');
      // toast('something went wrong');
    },
  });
  console.log(data, error);

  if (!isLoading && error) {
    //after error
    //alert(error.message);
    // toast(error?.message);
    return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24 '>
        {error?.message}
      </main>
    );
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black'>
      {isLoading ? <>loading...</> : JSON.stringify(data)}
    </main>
  );
}

const fetcher = async (url: string) => {
  const response = await fetch(`http://localhost:3002${url}`, {
    cache: 'no-cache',
  });
  let data = {};
  if (response.status !== 200) {
    throw new Error(response.statusText);
  } else {
    data = await response.json();
  }
  return data;
};
