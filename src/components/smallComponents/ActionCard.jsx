import Icon from "./Icon";

export default function ActionCard({title, content, icon}) {

    return(
        <div className="flex flex-col items-center w-64 gap-3">
            <span className="bg-green-100 w-16 h-16 rounded-xl rounded-br-[24px] relative">
                <Icon icon={icon} size="3x" className="absolute right-9 top-1" />
            </span>
            <h2 className="text-[2rem] font-bold text-center leading-[2rem]">{title}</h2>
            <p className="text-center">{content}</p>
        </div>
    );
}