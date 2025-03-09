import React from 'react';
import {Col, Row} from "antd";

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import {useNavigate} from "react-router-dom";


const Index = () => {
    const navigate = useNavigate();
    return (<div className="w-full h-screen">
        <Row gutter={[16, 48]} className="bg-[#EDF7F8]">
            <Col xs={0} sm={0} md={4} lg={4} xl={4}></Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <div className="w-full h-full flex flex-col justify-center align-middle" style={{alignItems: "center"}}>
                        <span className="text-6xl font-black mb-5">
                            Try free the best
                        </span>
                    <span className="text-6xl font-black mb-5">
                            IQ Test online
                        </span>
                    <p className="max-w-xl text-center text-xl mb-9">
                        Take the only IQ Test online led by real psychologists and discover your IQ while growing your
                        intelligence through learning. How could it be better?
                    </p>
                    <button className="bg-[#69B5C3] text-white px-10 py-3 rounded-full text-xl font-bold mb-9"
                            onClick={()=>navigate("/test")}
                    >
                        Start IQ Test
                    </button>
                    <img src="heros_section.png" alt="heros_section.png" className="mb-9"/>
                    <span className="text-2xl font-bold mb-5 text-center">
                            Accurate IQ Test with a comprehensive evaluation
                        </span>
                    <Row gutter={[16, 48]} className="w-full">
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <div className="flex flex-col justify-center align-middle" style={{alignItems: "center"}}>
                                <img src="part1.png" alt="icon1.png" className="mb-5"/>
                                <span className="text-xl font-bold mb-5">
                                        10 Questions
                                    </span>
                                <div className="w-full border-b-2 border-b-gray-200 px-6 mb-5"></div>
                                <span className="w-[200px] text-md mb-9">
                                        Each part tests a different ability of fluid intelligence. That way the test can be far more precise computing your exact IQ score.
                                    </span>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <div className="flex flex-col justify-center align-middle" style={{alignItems: "center"}}>
                                <img src="part2.png" alt="icon1.png" className="mb-5"/>
                                <span className="text-xl font-bold mb-5">
                                        Average duration of 15 minutes
                                    </span>
                                <div className="w-full border-b-2 border-b-gray-200 px-6 mb-5"></div>
                                <span className="w-[200px] text-md mb-9">
                                        Every section is time-boxed to 10 minutes. So go as fast as you can, but with a balanced approach. Mistakes don't sum and later questions will be more difficult.
                                    </span>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <div className="flex flex-col justify-center align-middle" style={{alignItems: "center"}}>
                                <img src="part3.png" alt="icon1.png" className="mb-5"/>
                                <span className="text-xl font-bold mb-5">
                                        Questions with growing difficulty
                                    </span>
                                <div className="w-full border-b-2 border-b-gray-200 px-6 mb-5"></div>
                                <span className="w-[200px] text-md mb-9">
                                        The questions will get harder the closer you are to the end of the section. Do not panic when it gets too complicated. Just try your best guess. Intuition is more powerful than you think.
                                    </span>
                            </div>
                        </Col>
                    </Row>
                    <button className="bg-[#69B5C3] text-white px-10 py-3 rounded-full text-xl font-bold mb-9"
                            onClick={()=>navigate("/test")}
                    >
                        Start IQ Test
                    </button>
                </div>
            </Col>
            <Col xs={0} sm={0} md={4} lg={4} xl={4}></Col>
        </Row>
        <Row gutter={[16, 48]} className="bg-white border-b-2 border-b-gray-200 p-5">
            <Col xs={0} sm={0} md={4} lg={4} xl={4}></Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <div className="w-full h-full flex flex-col justify-center align-middle" style={{alignItems: "center"}}>
                    <div className="mt-12 mb-5">
                            <span className="text-2xl font-black text-center mb-5">
                                Everything you
                            </span>&nbsp;
                        <span className="text-2xl font-black text-center mb-5 border-b-4 border-b-[#69B5C3]">
                                wished
                            </span>&nbsp;
                        <span className="text-2xl font-black text-center mb-5">
                                for an IQ Test
                            </span>
                    </div>
                    <Row className="w-full mt-12">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="flex flex-col p-8">
                                <span className="text-2xl font-black">DISCOVER</span>
                                <span className="text-2xl font-black text-[#69B5C3] mb-5">your intelligence</span>
                                <p className="text-xl ">Find out your exact IQ and IQ range. Or break down your score by test sections with a powerful complete statistical analysis. Compare with other people with percentiles, IQ ranges and position your score in the Bell Curve.</p>
                            </div>
                            <div className="flex flex-col justify-center" style={{alignItems: "center"}}>
                                <button className="bg-[#69B5C3] text-white px-10 py-3 rounded-full text-xl font-bold mb-9"
                                        onClick={()=>navigate("/test")}>
                                    Start IQ Test
                                </button>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <img src="report.png" style={{"width": "300px"}} alt=""/>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={0} sm={0} md={4} lg={4} xl={4}></Col>
        </Row>
        <Row gutter={[16, 48]} className="bg-[#EDF7F8] border-b-2 border-b-gray-200 p-5">
            <Col xs={0} sm={0} md={4} lg={4} xl={4}></Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <Row gutter={[16, 48]} className="w-full">
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} className="p-5">
                        <div className="bg-[#69B6C3] rounded-md shadow-2xl p-8 h-full">
                            <div className="flex flex-col justify-center align-middle" style={{alignItems: "center"}}>
                                <span className="text-4xl text-white font-black mb-5">
                                    FREE to Start
                                </span>
                                <span className="text-xl text-white font-bold">
                                    Try you IQ Test for free
                                </span>
                                <span className="text-xl text-white font-bold">
                                    Check Results
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} className="p-5">
                        <div className="bg-[#69B6C3] rounded-md shadow-2xl p-8 h-full">
                            <div className="flex flex-col justify-center align-middle" style={{alignItems: "center"}}>
                                <span className="text-4xl text-white font-black mb-5">
                                    Basic
                                </span>
                                <span className="text-xl text-white font-bold">
                                    Certificate
                                </span>
                                <span className="text-xl text-white font-bold">
                                    Detail Report
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} className="p-5">
                        <div className="bg-[#69B6C3] rounded-md shadow-2xl p-8">
                            <div className="flex flex-col justify-center align-middle" style={{alignItems: "center"}}>
                                <span className="text-4xl text-white font-black mb-5">
                                    Premium
                                </span>
                                <span className="text-xl text-white font-bold">
                                    Certificate
                                </span>
                                <span className="text-xl text-white font-bold">
                                    Detail Report
                                </span>
                                <span className="text-xl text-white font-bold">
                                    Answer Explained
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={0} md={4} lg={4} xl={4}></Col>
        </Row>
        <Footer bgDark>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <Footer.Title title="Company" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Careers</Footer.Link>
                            <Footer.Link href="#">Brand Center</Footer.Link>
                            <Footer.Link href="#">Blog</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Discord Server</Footer.Link>
                            <Footer.Link href="#">Twitter</Footer.Link>
                            <Footer.Link href="#">Facebook</Footer.Link>
                            <Footer.Link href="#">Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">iOS</Footer.Link>
                            <Footer.Link href="#">Android</Footer.Link>
                            <Footer.Link href="#">Windows</Footer.Link>
                            <Footer.Link href="#">MacOS</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="BrainTesting™" year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    </div>);
};

export default Index;
