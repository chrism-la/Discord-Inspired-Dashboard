export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={}/>
            <SideBarIcon icon={}/>
            <SideBarIcon icon={}/>
            <SideBarIcon icon={}/>
            <SideBarIcon icon={}/>
        </div>
    );
}

const SideBarIcon = ({icon}) => (
    <div className="sidebar-icon">
        {icon}
    </div>
)
