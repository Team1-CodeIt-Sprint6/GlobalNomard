import { GetServerSideProps } from 'next';

import MyActivityEditForm from '@/components/MyActivityEditPage/MyActivityEditForm';
import { getActivityDetail } from '@/lib/apis/getApis';

interface ActivityDetailResponse {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImages: { id: number; imageUrl: string }[];
  schedules: { id: number; date: string; startTime: string; endTime: string }[];
}

interface MyActivityProps {
  initialData: ActivityDetailResponse;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id; // Optional Chaining 사용
  if (!id) {
    return {
      notFound: true,
    };
  }
  try {
    const { data } = await getActivityDetail(Number(id));
    return {
      props: {
        initialData: data,
      },
    };
  } catch (error) {
    console.error('Failed to fetch activity details:', error);
    return {
      notFound: true,
    };
  }
};

export default function MyActivityEdit({ initialData }: MyActivityProps) {
  return <MyActivityEditForm initialData={initialData} />;
}
