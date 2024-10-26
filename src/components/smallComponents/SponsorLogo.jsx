export default function SponsorLogo({ link, src, alt }) {
  return (
    <a href={link} target="_blank">
      <img loading="lazy" src={src} className="max-w-none phone:h-6 h-10" alt={alt} />
    </a>
  );
}
