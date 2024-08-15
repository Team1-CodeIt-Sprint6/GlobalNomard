import ExperienceList from './ExperienceList';
import ListNavBar from './ListNavBar';

export default function MainPageBody() {
  return (
    <div className="flex flex-col px-[16px] py-[32px] pc:px-[350px] pc:py-[80px] tablet:px-[24px] tablet:py-[70px]">
      <ListNavBar />
      <ExperienceList />
    </div>
  );
}
