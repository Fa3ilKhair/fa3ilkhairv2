import Icon from "./Icon";

export default function SocialMediaIcon({ icon, link }) {
  return (
    <a href={link} className="bg-[#3c464c] w-12 h-12 rounded-full flex justify-center items-center hover:bg-[#3c464c50]" target="_blank">
      <Icon icon={icon} className="text-[2rem]" />
    </a>
  );
}
