import MotionLine from '../../components/MotionLine';
import SectionIntro from '../../components/SectionIntro';
import MissionVision from './MissionVision';

interface Props {
    onNavChange: (item: string) => void;
}

function AboutUsIntro(props: Props) {
    return (
        <>
            <SectionIntro
                title="ABOUT US"
                descriptionLines={[
                    "Machines that power",
                    "both small & large",
                    "scale production",
                ]}
                bgcolor="white"
            />
            <MotionLine color='black'/>
            <MissionVision onNavChange={props.onNavChange} />
        </>
    );
}

export default AboutUsIntro;
