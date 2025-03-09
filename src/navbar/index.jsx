import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import { useLocation, useNavigate} from "react-router-dom";

const Index = () => {
    const [selected, setSelected] = useState("/")
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Set the selected state based on the current pathname
        setSelected(location.pathname);
    }, [location]);

    return (<div className="bg-white w-full h-14 border-b-gray-200 border-b-2">
        <Row className="h-full w-full">
            <Col span={8} className="h-full">
                <div className="flex flex-col justify-center align-middle h-full" style={{alignItems: "center"}}>
                    <img src="logo.png" alt="logo.png"/>
                </div>
            </Col>
            <Col span={8}>
            </Col>
            <Col span={8}>
                <div className="flex flex-row justify-center align-middle h-full gap-4" style={{alignItems: "center"}}>
                    <span className={selected === "/" ? "text-md font-bold text-[#63B5C6] cursor-pointer": "text-md cursor-pointer"} onClick={()=>navigate("/")}>
                        Home
                    </span>
                    <span className={selected === "/test" ? "text-md font-bold text-[#63B5C6] cursor-pointer": "text-md cursor-pointer"} onClick={()=>navigate("/test")}>
                        IQ Test
                    </span>
                    <span className={selected === "/contact" ? "text-md font-bold text-[#63B5C6] cursor-pointer": "text-md cursor-pointer"} onClick={()=>navigate("/contact")}>
                        Contact Us
                    </span>
                </div>

            </Col>
        </Row>
    </div>);
};

export default Index;