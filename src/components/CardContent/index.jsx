import PrimaryButton from "../Buttons/Primary";
import SmallHeading from "../Heading/Small";
import Paragraph from "../Paragraph";
import Shape from "../Shape";
import SmallSubtitle from "../Subtitle/Small";

export default function CardContent({
  heading,
  subTitle,
  paragraphContent,
  btnLabel,
}) {
  return (
    <Shape styleClasses="shape-main">
      <SmallHeading styleClasses="small-heading-main">{heading}</SmallHeading>
      <SmallSubtitle styleClasses="small-subtitle-main">
        {subTitle}
      </SmallSubtitle>
      <Paragraph styleClasses="paragraph-main">{paragraphContent}</Paragraph>
      <PrimaryButton>{btnLabel}</PrimaryButton>
    </Shape>
  );
}
