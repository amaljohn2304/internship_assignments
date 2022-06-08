import React, { useState } from 'react';
import './quiz.css'
import { useTimer } from 'react-timer-hook';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

const Quiz = () => {

    const data = [
        {
            question: 'What is the capital of the United States?',
            answers: ['Washington', 'New York', 'Los Angeles', 'Atlanta'],
            correctAnswer: 'Washington',
            click_index: -1,
            multiple: 1,
            selections: [],
            correct_index: 0,
            marks: 3,
            click: false,
            flag: -1,
            error: -1,
            correct: false,

        },
        {
            question: 'What is the capital of the India?',
            answers: ['New Delhi', 'Mumbai', 'Kolkata', 'Kochi'],
            correctAnswer: 'Washington',
            click_index: -1,
            multiple: -1,
            selections: [],
            correct_index: 0,
            click: false,
            flag: -1,
            marks: 3,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the China?',
            answers: ['Yang Zhu', 'Beijing', 'Xianh Tso', 'Sun Phu'],
            correctAnswer: 'Washington',
            correct_index: 1,
            click_index: -1,
            multiple: -1,
            selections: [],
            click: false,
            marks: 3,
            flag: -1,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the United States?',
            answers: ['Washington', 'New York', 'Los Angeles', 'Atlanta'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            multiple: -1,
            selections: [],
            marks: 3,
            click: false,
            flag: -1,
            error: -1,
            correct: false,

        },
        {
            question: 'What is the capital of the India?',
            answers: ['New Delhi', 'Mumbai', 'Kolkata', 'Kochi'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            click: false,
            multiple: -1,
            selections: [],
            flag: -1,
            marks: 3,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the China?',
            answers: ['Yang Zhu', 'Beijing', 'Xianh Tso', 'Sun Phu'],
            correctAnswer: 'Washington',
            correct_index: 1,
            click_index: -1,
            click: false,
            marks: 3,
            multiple: -1,
            selections: [],
            flag: -1,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the United States?',
            answers: ['Washington', 'New York', 'Los Angeles', 'Atlanta'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            marks: 3,
            click: false,
            multiple: -1,
            selections: [],
            flag: -1,
            error: -1,
            correct: false,

        },
        {
            question: 'What is the capital of the India?',
            answers: ['New Delhi', 'Mumbai', 'Kolkata', 'Kochi'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            click: false,
            flag: -1,
            multiple: -1,
            selections: [],
            marks: 3,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the China?',
            answers: ['Yang Zhu', 'Beijing', 'Xianh Tso', 'Sun Phu'],
            correctAnswer: 'Washington',
            correct_index: 1,
            click_index: -1,
            click: false,
            multiple: -1,
            selections: [],
            marks: 3,
            flag: -1,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the United States?',
            answers: ['Washington', 'New York', 'Los Angeles', 'Atlanta'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            marks: 3,
            multiple: -1,
            selections: [],
            click: false,
            flag: -1,
            error: -1,
            correct: false,

        },
        {
            question: 'What is the capital of the India?',
            answers: ['New Delhi', 'Mumbai', 'Kolkata', 'Kochi'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            multiple: -1,
            selections: [],
            click: false,
            flag: -1,
            marks: 3,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the China?',
            answers: ['Yang Zhu', 'Beijing', 'Xianh Tso', 'Sun Phu'],
            correctAnswer: 'Washington',
            correct_index: 1,
            multiple: -1,
            selections: [],
            click_index: -1,
            click: false,
            marks: 3,
            flag: -1,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the United States?',
            answers: ['Washington', 'New York', 'Los Angeles', 'Atlanta'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            multiple: -1,
            selections: [],
            marks: 3,
            click: false,
            flag: -1,
            error: -1,
            correct: false,

        },
        {
            question: 'What is the capital of the India?',
            answers: ['New Delhi', 'Mumbai', 'Kolkata', 'Kochi'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            multiple: -1,
            selections: [],
            click: false,
            flag: -1,
            marks: 3,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the China?',
            answers: ['Yang Zhu', 'Beijing', 'Xianh Tso', 'Sun Phu'],
            correctAnswer: 'Washington',
            correct_index: 1,
            click_index: -1,
            multiple: -1,
            selections: [],
            click: false,
            marks: 3,
            flag: -1,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the United States?',
            answers: ['Washington', 'New York', 'Los Angeles', 'Atlanta'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            multiple: -1,
            selections: [],
            marks: 3,
            click: false,
            flag: -1,
            error: -1,
            correct: false,

        },
        {
            question: 'What is the capital of the India?',
            answers: ['New Delhi', 'Mumbai', 'Kolkata', 'Kochi'],
            correctAnswer: 'Washington',
            click_index: -1,
            correct_index: 0,
            multiple: -1,
            selections: [],
            click: false,
            flag: -1,
            marks: 3,
            error: -1,
            correct: false,
        },
        {
            question: 'What is the capital of the China?',
            answers: ['Yang Zhu', 'Beijing', 'Xianh Tso', 'Sun Phu'],
            correctAnswer: 'Washington',
            correct_index: 1,
            click_index: -1,
            multiple: -1,
            selections: [],
            click: false,
            marks: 3,
            flag: -1,
            error: -1,
            correct: false,
        },

    ]

    function MyTimer({ expiryTimestamp }) {
        const {
            seconds,
            minutes,
            hours,
            days,
            isRunning,
            start,
            pause,
            resume,
            restart,
        } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


        return (
            <div style={{ textAlign: 'center', background: "#FFD24C", right: 0, marginRight: "0%", justifyContent: 'center', padding: "0.4%", borderRadius: 10 }}>
                <div style={{ fontSize: '3vh' }}>
                    <span>{hours >= 10 ? hours : "0" + hours}</span>:<span>{minutes >= 10 ? minutes : "0" + minutes}</span>:<span>{seconds >= 10 ? seconds : "0" + seconds}</span>
                </div>
            </div>
        );
    }

    const [q_data, setq_data] = useState(data);

    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);
    return (
        <div className='quiz_page' style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
            <div className='acessory_container'>
                <MyTimer expiryTimestamp={time} autoStart={true} />
                <div className='progress_container'>
                    {
                        q_data.map((item, index) => (
                            <div className='box' key={index}
                                style={{
                                    background: item.click === true ? '#C0EDA6' : '#FFD24C',
                                }}>
                                <div style={{ width: item.error === 1 ? "100%" : "0%", height: "0.1%", background: '#FF4949', clear: 'both', fontSize: "0.2vw", borderRadius: 10, visibility: item.error === 1 ? 'visible' : 'hidden' }} className="flag_mark">
                                    &nbsp;
                                </div>
                                {index + 1}
                                <div style={{ width: item.flag === 1 ? "100%" : "0%", height: "0.1%", background: 'yellow', clear: 'both', fontSize: "0.2vw", borderRadius: 10, visibility: item.flag === 1 ? 'visible' : 'hidden' }} className="flag_mark">
                                    &nbsp;
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                q_data.map((item, index) => (
                    <div className='q_container' key={index}>
                        <div>
                            <div className='q_question' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span><h1>Question {index + 1}</h1></span>
                                <span style={{ marginRight: "2%" }}><h3 >Marks : {item.marks}</h3></span>
                            </div>
                            <div className='q_question_text'>
                                <h1>{item.question}</h1>
                            </div>
                        </div>
                        <div className='inner_q_box'>

                            <div className='q_answers'>
                                {
                                    item.answers.map((answer, i) => (
                                        <div className='q_option' id='op0' style={{ background: (i === item.click_index || item.selections.includes(i)) ? "#025cd9" : "#C4DDFF", color: (i === item.click_index || item.selections.includes(i)) ? "#FFFF" : "black", }} onClick={() => {
                                            if (item.multiple === -1) {
                                                item.click_index = i;
                                                item.click = true;
                                            }
                                            else {
                                                item.click = true;
                                                if (!item.selections.includes(i)) {
                                                    item.selections.push(i);

                                                }
                                                else {
                                                    item.selections.splice(item.selections.indexOf(i), 1);
                                                }
                                            }
                                            setq_data([...q_data]);

                                        }}>
                                            {answer}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='assistance_container' style={{ width: "100%", height: "10%", }}>
                                <div className="flag_Button" id="assistance_buttons" style={{ marginLeft: "0%", background: item.flag === 1 ? '#F8CB2E' : "#6BD5E1", borderBottomLeftRadius: 10 }}
                                    onClick={() => {
                                        item.flag = item.flag * -1;
                                        setq_data([...q_data]);

                                    }}>
                                    <EmojiFlagsRoundedIcon />
                                </div>
                                <div className="error_Button" id="assistance_buttons" style={{ marginLeft: "0%", background: item.error === 1 ? '#FF4949' : "#6BD5E1", borderBottomRightRadius: 10 }}
                                    onClick={() => {
                                        item.error = item.error * -1;
                                        setq_data([...q_data]);

                                    }}>
                                    <ErrorOutlineRoundedIcon />
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
            {/* <div className='buttons'>
                <div className='nav_button' id='prev'>
                    Previous
                </div>
                <div className='nav_button' id='next'>
                    Next
                </div>
            </div> */}

            <div className='finish_button'>
                Finish
            </div>
        </div >
    );
}

export default Quiz;
