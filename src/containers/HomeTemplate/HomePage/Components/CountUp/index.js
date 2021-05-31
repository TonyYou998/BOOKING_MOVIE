import React from 'react'
import CountUp from 'react-countup';

function CountUpCompo(props) {
  
    return (
        <div className="countup__wrapper pt-5">
            <div className="container   ">
                <div className="d-flex  py-2 countup__content justify-content-center">
                    <div className=" col-3 mr-2 countup__item  text-center h1 ">
                        <CountUp delay={2}  duration={3}
                        end={10000}/>
                        <h2>Happy Clients</h2>
                    </div>
                    <div className=" col-3 mx-2 countup__item text-center h1 ">
                        <CountUp delay={2}  duration={3}
                        end={1000}/>
                        <h2>Movies</h2>
                    </div>
                    <div  className=" col-3 ml-2 countup__item text-center h1 ">
                         <CountUp delay={2}
                          duration={3}

                          end={100}/>
                        <h2>Cinema systems</h2>
                    </div>
                  

                </div>
            </div>


        </div>
    )
}

export default CountUpCompo;