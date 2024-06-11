import '../redux/button.css'
import '../redux/togglebtn.css'
import '../redux/redux.css'
import { useDispatch, useSelector } from 'react-redux';
import {counterActions} from '../../store/reduxToolkitIndex'

const ReduxToolkitCounter = () => {
    const counter = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    const isShow = useSelector((state)=>state.isShow);

    const incHandler = () =>{
        dispatch(counterActions.increase())
    }
    const inc5Handler = () =>{
        dispatch(counterActions.increase5(5))
    }
    const decHandler = () =>{
        dispatch(counterActions.decrease())
    }
    const toggleHandler = () =>{
        dispatch(counterActions.toggle())
    }
  return (
    <section>
        <h3>Redux Tool Kit Counter</h3>
        <div className='counter-show'>
            {isShow && <h2>{counter}</h2>}
            <button className='toggleBtn' onClick={toggleHandler}>
            <label htmlFor="theme" className="theme">
            <span>Show</span>
            <span className="theme__toggle-wrap">
                <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark"/>
                <span className="theme__fill"></span>
                <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                </span>
            </span>
            <span>Hide</span>
        </label>
            </button>
        </div>
        <hr/>
        <div className='btn-div'>
            <button onClick={incHandler}>
                <a href="#" className="button button--piyo">
                    <div className="button__wrapper">
                        <span className="button__text">INCREASE</span>
                    </div>
                    <div className="characterBox">
                        <div className="character wakeup">
                            <div className="character__face"></div>
                        </div>
                        <div className="character wakeup">
                            <div className="character__face"></div>
                        </div>
                        <div className="character">
                            <div className="character__face"></div>
                        </div>
                    </div>
                </a>
            </button>
            <button onClick={inc5Handler}>
                <a href="#" className="button button--hoo">
                    <div className="button__wrapper">
                        <span className="button__text">INCREASE 5</span>
                    </div>
                    <div className="characterBox">
                        <div className="character wakeup">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                            <div className="charactor__body"></div>
                        </div>
                        <div className="character wakeup">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                            <div className="charactor__body"></div>
                        </div>
                        <div className="character">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                            <div className="charactor__body"></div>
                        </div>
                    </div>
                </a>
            </button>
            <button onClick={decHandler}>
                <a href="#" className="button button--pen">
                    <div className="button__wrapper">
                        <span className="button__text">DECREASE</span>
                    </div>
                    <div className="characterBox">
                        <div className="character wakeup">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                        </div>
                        <div className="character wakeup">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                        </div>
                        <div className="character">
                            <div className="character__face"></div>
                            <div className="charactor__face2"></div>
                        </div>
                    </div>
                </a>
            </button>
        </div>

    </section>
  )
}


export default ReduxToolkitCounter