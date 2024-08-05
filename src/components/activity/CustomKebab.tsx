import { useMutation } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

import KebabContainer from '@/components/common/Kebab/KebabContainer';
import KebabDelete from '@/components/common/Kebab/KebabDelete';
import KebabLink from '@/components/common/Kebab/KebabLink';
import instance from '@/lib/apis/axios';

const deleteActivity = async (activityId: number) => {
  await instance.delete(`/activities/${activityId}`, {
    headers: {
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
  });
};

export default function CustomKebab({ activityId }: { activityId: number }) {
  const mutation = useMutation({
    mutationFn: () => deleteActivity(activityId),
  });

  const handleDelete = () => {
    mutation.mutate();
  };

  return (
    <KebabContainer>
      {/* TODO 체험 수정 페이지 url 추가 */}
      <KebabLink href="/">수정하기</KebabLink>
      <KebabDelete onClick={handleDelete}>삭제하기</KebabDelete>
      {mutation.isError && <p>{mutation.error.message}</p>}
    </KebabContainer>
  );
}
