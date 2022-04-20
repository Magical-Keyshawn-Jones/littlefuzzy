import { connect } from "react-redux";

function MovieList (){

}

// mapStateToProps means turn storage to Props
// State is our Bank/Storage/Safe we are grabbing from
function mapStateToProps (state) {

// We're telling our Bank to grab this info from it's storage and turn it into props
    return {
        movies: state.movies,

        moviesToWatch: state.moviesToWatch,

        user: state.user
    }
}

// Connect is connecting the component to Storage/Bank/Safe/Inventory
export default connect(mapStateToProps, {})(MovieList)