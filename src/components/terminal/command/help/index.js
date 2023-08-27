import command from "@/components/terminal/command";

const renderItem = (cmd) => {
    if(cmd.hide) return null;
    return <div key={cmd.name} className="flex">
        <div className="w-[100px] text-[rgb(34,197,94)]">{cmd.name}</div>
        <div className="flex-1">{cmd.description}</div>
    </div>
}

const Help = () => {
    return <>
        <p>{"你可以输入以下命令与本站进行交互：".i18n()}</p>
        {command.map(renderItem)}
    </>
};

export default Help;
