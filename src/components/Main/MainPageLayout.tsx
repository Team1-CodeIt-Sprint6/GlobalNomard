import MainPageBody from './MainPageBody';
import MainPageHeader from './MainPageHeader';

export default function MainPageLayout() {
  return (
    <div className="flex flex-col items-center">
      <MainPageHeader />
      <MainPageBody />
    </div>
  );
}
