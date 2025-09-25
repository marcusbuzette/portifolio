export type CarrouselSlideProps = {
    mediaType: "video" | "image",
    mediaLink: string,
    projectName: string,
    projectDescription: string,
    habilitiees: string[],
    imageIcon: string
}

export interface SafeHtmlProps {
  html: string;
  className?: string;
}