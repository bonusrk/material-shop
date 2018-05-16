import React from 'react';
import CategoryList from '../category-list';


export default class Tabs extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            category: 'man'
        }

        this.showWoman = this.showWoman.bind(this, true)
        this.showMan = this.showMan.bind(this, true)
    }


  /*  */


    showWoman(){
        this.setState({category:'woman'})
    }

    showMan(){
        this.setState({category:'man'})
    }





    render() {

        return (
            <div className="row tabs-main ">
                <div className="col s12 z-depth-1" >
                    <ul className="tabs">
                        <li className="tab col s3"><a className="active" onClick={this.showMan}>Man</a></li>
                        <li className="tab col s3"><a onClick={this.showWoman}>Woman</a></li>
                    </ul>
                    <CategoryList category={this.state.category}/>
                </div>

            </div>

        );
    }
}


