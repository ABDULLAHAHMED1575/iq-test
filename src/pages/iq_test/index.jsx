import React, {useEffect, useRef, useState} from 'react';
import {Col, Radio, Row, Space} from "antd";
import Question from "./questions.json"
import Swal from "sweetalert2";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



const Index = () => {
    const Ref = useRef(null);

    const [score, setScore] = useState(0)
    const [started, setStarted] = useState(false)
    const [randomSelected, setRandomSelected] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [value, setValue] = useState("A")
    const [timer, setTimer] = useState("15:00");


    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        return {
            total,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer((minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        setTimer("15:00");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const stopTime = (e) => {
        if (Ref.current) clearInterval(Ref.current);
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 900);
        return deadline;
    };

    useEffect(() => {
        if(timer === "00:00"){
            setStarted(false)
            Swal.fire({
                title: "Time Up",
                text: "You were not able to complete the test in time.",
                icon: "error"
            });
        }
    }, [timer]);


    return (<div className="w-full h-screen">
        <Row gutter={[16, 48]} className="bg-[#EDF7F8] w-full h-full flex flex-row justify-center"
             style={{alignItems: 'center'}}>
            <Col xs={24} sm={24} md={20} lg={16} xl={16} className="w-full h-full mt-8">
                {!started ?
                    <div className="flex flex-col justify-center align-middle bg-white shadow-2xl rounded-md p-5"
                         style={{alignItems: "center"}}>
                    <span className="text-2xl font-black mb-5">
                        Get Ready to Test Your IQ
                    </span>
                        <p className="mb-5 px-16">
                            IQ testing is a widely used method to measure cognitive abilities and problem-solving
                            skills. To begin your IQ test, simply click on the "Start IQ Test" button. These assessments
                            typically consist of a series of questions designed to evaluate your logical reasoning,
                            mathematical aptitude, verbal comprehension, and spatial awareness. IQ tests are valuable
                            tools for assessing intellectual potential and identifying areas of strength and
                            improvement, helping individuals gain a better understanding of their cognitive abilities
                            and aiding educators and psychologists in tailoring educational and developmental strategies
                            to meet specific needs.
                        </p>
                        <button className="bg-[#69B5C3] text-white px-10 py-3 rounded-full text-xl font-bold mb-9"
                                onClick={() => {
                                    shuffleArray(Question)
                                    setRandomSelected(Question.slice(0, 15))
                                    setStarted(true)
                                    clearTimer(getDeadTime());
                                }}
                        >
                            Start IQ Test
                        </button>
                    </div> : <div className="flex flex-col bg-white shadow-2xl rounded-md p-5">
                        <div className="flex flex-row w-full mb-5">
                            <div className="flex justify-start w-1/2">
                                Question: {currentQuestion+1}/15
                            </div>
                            <div className="flex justify-end w-1/2">
                                Time Remaining: {timer}
                            </div>
                        </div>
                        <span className="text-lg font-bold">
                            {randomSelected[currentQuestion].question}
                        </span>
                        <Radio.Group
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}
                            value={value}

                        >
                            <Space direction="vertical">
                                <Radio value="A">{randomSelected[currentQuestion].A}</Radio>
                                <Radio value="B">{randomSelected[currentQuestion].B}</Radio>
                                <Radio value="C">{randomSelected[currentQuestion].C}</Radio>
                                <Radio value="D">{randomSelected[currentQuestion].D}</Radio>
                            </Space>
                        </Radio.Group>
                        <div className="flex flex-row justify-end">
                            <button className="bg-[#69B5C3] text-white px-10 py-3 rounded-md text-md font-bold mb-2"
                                    onClick={() => {
                                        if (value === randomSelected[currentQuestion].answer) {
                                            setScore(score + 1)
                                        }
                                        if (currentQuestion === 14) {
                                            setStarted(false)
                                            Swal.fire({
                                                title: "Test Completed",
                                                text: "Your score is " + score + "/15",
                                                icon: "success"
                                            });
                                            stopTime()
                                            setScore(0)
                                            setCurrentQuestion(0)
                                        }else {
                                            setCurrentQuestion(currentQuestion + 1)
                                        }
                                        setValue("A")
                                    }}
                            >
                                {currentQuestion === 14 ? "Submit" : "Next"}
                            </button>
                        </div>
                    </div>}
            </Col>
        </Row>
    </div>);
};

export default Index;
