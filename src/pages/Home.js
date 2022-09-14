import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { getDataAction } from "../actions/apiAction";
import Loading from "../components/Loading";
import { format, addDays, lastDayOfWeek, addWeeks, subWeeks, subDays, } from "date-fns";
import { fDateTime3, fDateTime4, HEADER, LESSONS, MODULES } from "../actions/constant";
import { isMobile } from 'react-device-detect';

export default function Home() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [week, setWeek] = useState(0);

    const [day, setDay] = useState(0);

    const [moduleId, setModuleId] = useState(28)

    const changeWeekHandle = (btnType) => {
        setDay(0)
        const ad = subDays(startDate, 7)
        if (btnType === "prev") {
            setStartDate((date) => {
                return ad
            });
            setCurrentMonth(subWeeks(currentMonth, 1));
            getData(ad, moduleId)
        }
        if (btnType === "next") {
            const sd = addDays(startDate, 7)
            setStartDate((date) => {
                return sd;
            });
            setCurrentMonth(addWeeks(currentMonth, 1));
            getData(sd, moduleId)
        }
    };

    const nextweek = () => {
        const firstday = "d|MMM|yyy"
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedFirst = "";
        for (let i = 0; i < 7; i++) {
            formattedFirst = format(day, firstday);
            days.push(<div className=" "
                key={day}
                style={{ display: "inline-block" }}>
                <div className="date align-center">
                    <div>{formattedFirst}</div>
                </div>
            </div >
            );
            day = addDays(day, 1);
        }
        rows.pop();
        rows.push(<div className="d-flex align-center top-date" key={day}>{days[0]} <span className="horizontal-line">{"-"}</span> {days[days.length - 1]}</div>);
        days = [];
        return (
            <div>{rows}</div>
        );

    }
    const weekday = (i) => {
        let day = 0
        if (i === 0) {
            day = "א"
        } else if (i === 1) {
            day = "ב"
        } else if (i === 2) {
            day = "ג"
        } else if (i === 3) {
            day = "ד"
        } else if (i === 4) {
            day = "ה"
        } else if (i === 5) {
            day = "ו"
        } else if (i === 6) {
            day = "ז"
        }
        return day
    }

    const renderCells = () => {
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day_ = startDate;
        let formattedDate = "";
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day_, dateFormat);
            days.push(<td className={`${day === i ? "active-col" : ""} header-data-col p-0  small-card justify-content-center rounded-0`}
                key={day_}
                style={{ display: "inline-block" }}>
                <div className="p-3 "
                    onClick={() => {
                        setDay(i)
                        getOneDayData(addDays(startDate, i), moduleId)
                    }}
                >
                    <div className="text-right">{weekday(i)}׳</div>
                    <div className="text-right date-data">{formattedDate}</div>
                </div>
            </td >
            );
            day_ = addDays(day_, 1);
        }
        rows.pop();
        rows.push(<tr className="d-flex flex-row-reverse mobile-header" key={day_}>{days}</tr>);
        days = [];
        return (
            <thead>{rows}</thead>
        );
    };

    useEffect(() => {
        const sd = addDays(lastDayOfWeek(new Date()), -6)
        setStartDate(sd)
        if (isMobile) {
            getOneDayData(sd, moduleId)
        } else {
            getData(sd, moduleId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getData = (start, moduleId) => {
        setLoading(true)
        getDataAction(fDateTime4(start), fDateTime4(addDays(start, 6)), moduleId, ({ data, error }) => {
            setLoading(false)
            if (error) {
                setError(error)
            } else {
                setData(data.Data || [])
            }
        })
    }

    const getOneDayData = (start, moduleId) => {
        setLoading(true)
        getDataAction(fDateTime4(start), fDateTime4(start), moduleId, ({ data, error }) => {
            setLoading(false)
            if (error) {
                setError(error)
            } else {
                setData(data.Data || [])
            }
        })
    }

    const array = {}
    data.forEach((e, i) => {
        array[e.DateJson] = array[e.DateJson] || []
        array[e.DateJson].push(e)
    })
    let max = 0
    for (let i in array) {
        if (array[i].length > max) {
            max = array[i].length
        }
    }
    const count = []
    while (count.length < max) {
        count.push(count.length)
    }

    let days = [0]
    if (!isMobile) {
        days = [0, 1, 2, 3, 4, 5, 6]
    }

    return (<div className="font-rubik-bold">
        <div className=" header">
            <div className="header-border custome-container">
                <div className="app-title"><Link to="/"><img src="/main-logo.png" alt="lockerrrom" height="100%" width="100%" /></Link></div>
                <div className="menu-items">
                    <div className="menu-mobile">
                        {MODULES.map((e, index) => {
                            return <span key={index} className={e.id === moduleId ? "active" : ""}
                                onClick={() => {
                                    setModuleId(e.id)
                                    if (isMobile) {
                                        getOneDayData(addDays(startDate, day), e.id)
                                    } else {
                                        getData(startDate, e.id)
                                    }
                                }}>{e.name}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="placeholder"></div>
        <div id="hero">
            <div className="custome-container">
                <div className="small-header">
                    <div className="d-flex justify-end next-btn">
                        <button className="left-arrow"
                            onClick={() => { changeWeekHandle("next") }}
                            disabled={loading}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
                        </button>
                        <button
                            className={`week d-flex align-center  cursor-pointer ${loading ? "next-btn_" : ""}`}
                            onClick={() => {
                                setWeek(week + 1)
                                changeWeekHandle("next")
                            }
                            }
                            disabled={loading}>
                            <div className="arrow">
                                <img src="/arrow.svg" alt="arrow" height="30px" width="150px" />
                            </div>
                            <div className="ml-2">next week</div>
                        </button>
                        {nextweek()}
                        {week !== 0 && <button
                            className={`week d-flex align-center previous-btn cursor-pointer pr-0 ${loading ? "menu-item_" : ""}`}
                            onClick={() => {
                                setWeek(week - 1)
                                changeWeekHandle("prev")
                            }}
                            disabled={loading}>
                            <div className="mr-2">previous week</div>
                            <div className="arrow" style={{ transform: "rotate(180deg)" }} >
                                <img src="/arrow.svg" alt="arrow" height="30px" width="150px" />
                            </div>
                        </button>}
                        <button className="right-arrow"
                            onClick={() => { changeWeekHandle("prev") }}
                            disabled={loading}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
                        </button>
                    </div>
                </div>
                <div>
                    <table>
                        {renderCells()}
                        <thead className="week-header">
                            <tr className="row flex-row-reverse desktop-header">
                                {HEADER.map((e, index) => {
                                    return <th className={`${fDateTime4(addDays(startDate, index)) === fDateTime4(new Date()) ? "active-col" : ""} data-col`} key={index} width={`14.28%`}>
                                        <div className="p-3 ">
                                            {/* <div className="text-right"></div> */}
                                            <div className="text-right date-data">{e.title}׳</div>
                                        </div>
                                    </th>
                                })}
                            </tr>
                        </thead>
                        {loading ? <tbody><tr><td width="100%"><div className="loader"><Loading /></div></td></tr></tbody> : <tbody>
                            {(data === null || data.length === 0 || error) ? <tr className="w-100 my-4 text-center"><td width="100%"><div className="p-3 loader">{error || "No Data"}</div></td></tr> : count.map((tr, ind) => {
                                return <tr className="row flex-row-reverse table-body" key={ind}>
                                    {days.map((td, i) => {
                                        const d = ((array[fDateTime3(addDays(startDate, isMobile ? day : td))] || [])[tr])
                                        let time = []
                                        if (d && d.FormattedDateTime) {
                                            time = (d.FormattedDateTime).split(" ")
                                        }
                                        if (!d) {
                                            return <td className="data-col data-col-mobile" key={i}></td>
                                        }
                                        return <td className="data-col" width="14.28%" key={i}>
                                            <div className="p-3">
                                                <h4 className="text-right">{time[time.length - 1]}</h4>
                                                <h5 className="text-right text-secondary  fw-600">{d.Name}</h5>
                                                <h4 className="text-right text-uppercase mb-0">{d.EmployeeName}</h4>
                                            </div>
                                        </td>
                                    }
                                    )}
                                </tr>
                            })}
                        </tbody>}
                    </table>
                    <div className=" mb-1 mt-1 next-before">
                        {week !== 0 && <button className="before-week"
                            onClick={() => {
                                setWeek(week - 1)
                                changeWeekHandle("prev")
                            }}
                            disabled={loading}>
                            <div className="week-text">
                                a week before
                            </div>
                            <div className="arrow-right ml-3">
                                <img src="/arrow.svg" style={{ transform: "rotate(180deg)" }} alt="arrow" height="20px" width="180px" />
                            </div>
                        </button>}
                        <button className="next-week "
                            onClick={() => {
                                setWeek(week + 1)
                                changeWeekHandle("next")
                            }} disabled={loading}>
                            <div className="arrow">
                                <img src="/arrow.svg" alt="arrow" height="20px" width="180px" />
                            </div>
                            <div className="ml-2 week-text">
                                next week
                            </div>
                        </button>

                    </div>
                </div>
            </div>

        </div>
        <div className="footer">
            <h5>TAP TO LEARNING ON THE LESSONS</h5>
            <div className="footer-items">
                {LESSONS.map((e, index) => {
                    return <div className={`${LESSONS.length > index + 1 ? "footer-item" : "active footer-item"}`} key={index}><a href={e.link} target="_blank" rel="noreferrer"><h4 >{e.name}</h4></a>
                        {LESSONS.length > index + 1 && <span>|</span>}

                    </div>

                })}

            </div>
        </div>

    </div >
    )
}
