// Sidebar.tsx

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Sidebar.scss';
import logo from "../assets/images/logo.png"
import { RxDashboard } from "react-icons/rx"
import { BiSolidChart } from "react-icons/bi"
import { PiTreeStructureFill } from "react-icons/pi"
import { AiTwotoneSetting } from "react-icons/ai"
import { TbUsersGroup } from "react-icons/tb"
import {TbSwitch2} from "react-icons/tb"

interface SidebarProps { }

interface NavItem {
  label: string;
  subLabel?:String;
  subItems?: string[];
  icon?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [openedSubNavs, setOpenedSubNavs] = useState<string[]>([]);

  const handleItemClick = (item: string) => {
    setOpenedSubNavs((prevOpenedSubNavs) => {
      if (prevOpenedSubNavs.includes(item)) {
        return prevOpenedSubNavs.filter((nav) => nav !== item);
      } else {
        
        return [...prevOpenedSubNavs, item];
      }
    });
  };

  const isSubNavOpen = (label: string) => openedSubNavs.includes(label);

  const renderArrowIcon = (label: string) => {
    const labelsWithArrow = ['Element Setup', 'Payroll settings', 'Payroll Activities'];

    if (labelsWithArrow.includes(label) && isSubNavOpen(label)) {
      return <FaChevronDown className="arrow-icon rotated" />;
    } else if (labelsWithArrow.includes(label)) {
      return <FaChevronUp className="arrow-icon rotated" />;
    }

    return null;
  };

  const ToPnavItems: NavItem[] = [
    { label: 'Switch Module', subLabel:"Payroll Management", icon: <TbSwitch2 /> },
  
  ];

  const navItems: NavItem[] = [
    { label: 'Dashboard', icon: <RxDashboard /> },
    { label: 'Payroll Activities', icon: <BiSolidChart />, subItems:["Payroll Run", "Payroll Reversal, ",
  "Payroll History", "Payroll Lock","Enable Payslip", "Payroll Log", "Payroll Approval"] },
    { label: 'Salary Structure', icon: <PiTreeStructureFill /> },
    { label: 'Element Setup', icon: <AiTwotoneSetting />, subItems: ["Elements", "Balances"] },
    { label: 'Employees', icon: <TbUsersGroup /> },
  ];

  const secondNavItems: NavItem[] = [
    { label: 'Payroll settings', icon: <RxDashboard />, subItems: ["Payroll Options", "Deduction Account setup", "Variation Portal Period", "Paygroup setup", "Tax setup"] },
    { label: 'My accounts', icon: <BiSolidChart /> },
    { label: 'Logout', icon: <PiTreeStructureFill /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav">
      <ul>
          {ToPnavItems.map((item) => (
            <li key={item.label}>
              <div
                onClick={() => handleItemClick(item.label)}
                className='nav-items' 
              >
                <div >
                {item.icon && <span className="icon">{item.icon}</span>}

                </div>
                <div>
                <div>
                {item.label} {renderArrowIcon(item.label)}

                </div>
                <div className='sub-label'>

                {item.subLabel} {renderArrowIcon(item.label)}

                </div>
                </div>
             
              </div>
              {item.subItems && isSubNavOpen(item.label) && (
                <ul className={`sub-nav ${item.label === 'Payroll Activities' ? 'payroll-activities' : ''}`}>
                  {item.subItems.map((subItem) => (
                    <li key={subItem} onClick={() => handleItemClick(subItem)}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* <hr className='line-divider' /> */}
      </nav>
      <nav className="nav">
      <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <div
                onClick={() => handleItemClick(item.label)}
                className={`nav-item ${isSubNavOpen(item.label) ? 'active' : ''}`}
              >
                {item.icon && <span className="icon">{item.icon}</span>}
                {item.label} {renderArrowIcon(item.label)}
              </div>
              {item.subItems && isSubNavOpen(item.label) && (
                <ul className={`sub-nav ${item.label === 'Payroll Activities' ? 'payroll-activities' : ''}`}>
                  {item.subItems.map((subItem) => (
                    <li key={subItem} onClick={() => handleItemClick(subItem)}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <hr className='line-divider' />
      </nav>
      <nav className="second-nav">
        <ul>
          {secondNavItems.map((item) => (
            <li key={item.label}>
              <div
                onClick={() => handleItemClick(item.label)}
                className={`nav-item ${isSubNavOpen(item.label) ? 'active' : ''}`}
              >
                {item.icon && <span className="icon">{item.icon}</span>}
                {item.label} {renderArrowIcon(item.label)}
              </div>
              {item.subItems && isSubNavOpen(item.label) && (
                <ul className="sub-nav">
                  {item.subItems.map((subItem) => (
                    <li key={subItem} onClick={() => handleItemClick(subItem)}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
