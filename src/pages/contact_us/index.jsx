import React from 'react';
import {Button, Col, Form, Input, Row} from "antd";
import Swal from "sweetalert2";
import {MailOutlined, UserOutlined} from '@ant-design/icons';

const Index = () => {

    return (<div className="w-full h-screen p-5 flex flex-row justify-center bg-[#EDF7F8]" style={{alignItems: "center"}}>
        <div className="bg-white shadow-2xl rounded-md p-5 rounded-md"
             style={{alignItems: "center"}}>
            <Row gutter={24}>
                <Col span={12}>
                    <div className="p-8">
                        <h2 className="text-3xl mb-4">Contact Us</h2>
                        <p className="mb-4">
                            Thank you for contacting us. Please fill out the form below, and we will get back to you as
                            soon
                            as
                            possible.
                        </p>
                        <p className="mb-4">Real-time text showing the user is contacting us...</p>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="p-8 bg-white">
                        <Form name="contact-form" onFinish={() => {
                            Swal.fire({
                                title: "Success", text: "Your message has been sent successfully.", icon: "success"
                            })
                        }}>
                            <Form.Item
                                name="name"
                                rules={[{required: true, message: 'Please enter your name'}]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder="Name"/>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[{required: true, message: 'Please enter your email'}, {
                                    type: 'email', message: 'Please enter a valid email address'
                                },]}
                            >
                                <Input prefix={<MailOutlined/>} placeholder="Email"/>
                            </Form.Item>
                            <Form.Item
                                name="message"
                                rules={[{required: true, message: 'Please enter your message'}]}
                            >
                                <Input.TextArea placeholder="Message" rows={4}/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{background: "#69B5C3"}}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    </div>);
};

export default Index;
