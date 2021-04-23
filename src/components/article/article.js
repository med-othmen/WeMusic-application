import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Article extends Component {
    render() {
        return (
            <div>
                {this.props.articles.map(el=>el.titre)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articles:state.articles
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
