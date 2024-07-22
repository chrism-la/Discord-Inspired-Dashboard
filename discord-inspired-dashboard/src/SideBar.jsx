import { FaSafari, FaPoo, FaFire, FaCamera, FaTwitter } from 'react-icons/fa';

export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaPoo size="28" />} />
            <SideBarIcon icon={<FaSafari size="28" />} />
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<FaCamera size="28" />} />
            <SideBarIcon icon={<FaTwitter size="28" />} />
        </div>
    );
}

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;
