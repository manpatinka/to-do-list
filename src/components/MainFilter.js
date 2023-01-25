import '../styles/mainfilter.css';

const MainFilter = (props) => {
    let active = {
        backgroundColor: '#555bc3',
        color: '#000000'
    };

    return ( 
        <nav className="main-filter-nav">
          <button
            onClick={ () => props.onUpdate('all') }
            style={ props.current === 'all' ? active : undefined }
          >
            All
          </button>
          <button
            onClick={ () => props.onUpdate('pending') }
            style={ props.current === 'pending' ? active : undefined }
          >
            Pending
          </button>
          <button
            onClick={ () => props.onUpdate('completed') }
            style={ props.current === 'completed' ? active : undefined }
          >
            Completed
          </button>
        </nav>
     );
}
 
export default MainFilter;