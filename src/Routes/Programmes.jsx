import {useEffect} from 'react';
import {
  TitleBanner,
  IntroSectionWithVid,
  ProgrammesList,
  ActivityList
} from '../Components';

const Programmes = ({title}) => {

  // render page title when component is fully rendered
  useEffect(() => {
    document.title = title;
  });

  // Props for IntroSectionWithVideo component
  const introText = "Pretium lectus non purus nunc interdum. Nunc malesuada at egestas in sed. Lectus nulla tempor donec tempus metus semper tempor. Aliquam, vulputate quam habitant convallis morbi nec aenean pharetra neque. Non sit elementum nulla facilisis commodo quisque proin mauris. Lobortis risus id elementum.";
  const vidUrl = "https://www.youtube.com/embed/pjJJ-5athpY?rel=0";
  
  return (
    <div>
      <TitleBanner title="Programmes" />
      <IntroSectionWithVid introText={introText} vidUrl={vidUrl} />
      <ProgrammesList />
      <ActivityList />
    </div>
  );
}

export default Programmes;