import React from 'react';

const Tabs = () => {
    return (
        <div className="row tabs-main ">
            <div className="col s12 z-depth-1">
                <ul className="tabs">
                    <li className="tab col s3"><a className="active" href="#man">Man</a></li>
                    <li className="tab col s3"><a href="#woman">Woman</a></li>
                </ul>
            </div>
            <div id="man" className="col s12">
                <div className="list">
                    <a href="details.html" className="waves-effect z-depth-1 list__item">
                        <span className="list__name">SHOES</span>
                        <div className="list__img"><img src="../../img/product/list/your-product.png" alt=""/></div>
                    </a>
                    <a href="details.html" className="waves-effect z-depth-1 list__item">
                        <span className="list__name">JEANS</span>
                        <div className="list__img"><img src="../../img/product/list/your-product%20(1).png" alt=""/>
                        </div>
                    </a>
                    <a href="details.html" className="waves-effect z-depth-1 list__item">
                        <span className="list__name">SUITS</span>
                        <div className="list__img"><img src="../../img/product/list/your-product%20(2).png" alt=""/>
                        </div>
                    </a>
                    <a href="details.html" className="waves-effect z-depth-1 list__item">
                        <span className="list__name">T-SHIRTS</span>
                        <div className="list__img"><img src="../../img/product/list/your-product%20(3).png" alt=""/>
                        </div>
                    </a>
                </div>
            </div>
            <div id="woman" className="col s12">
                <div className="list">
                    <a href="details.html" className="waves-effect z-depth-1 list__item">
                        <span className="list__name">SHOES</span>
                        <div className="list__img"><img src="../../img/product/list/shoes.png" alt=""/></div>
                    </a>
                    <a href="details.html" className="waves-effect z-depth-1 list__item">
                        <span className="list__name">JEANS</span>
                        <div className="list__img"><img src="../../img/product/list/straight.png" alt=""/></div>
                    </a>
                    <a href="details.html" className="waves-effect z-depth-1 list__item">
                        <span className="list__name">SUITS</span>
                        <div className="list__img"><img src="../../img/product/list/suits.png" alt=""/></div>
                    </a>
                    <a href="details.html" className="waves-effect z-depth-1 list__item">
                        <span className="list__name">T-SHIRTS</span>
                        <div className="list__img"><img src="../../img/product/list/T_shirt_women_back.png" alt=""/>
                        </div>
                    </a>
                </div>
            </div>
        </div>

)
}


export default Tabs;
